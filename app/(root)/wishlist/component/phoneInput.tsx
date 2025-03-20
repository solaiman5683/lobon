"use client";

import
{
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Country
{
    name: string;
    code: string;
    flag: string;
    value: string;
    identifier: string;
}

const PhoneInput = ({ formValues, setFormValues }: any) =>
{
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Country>();
    const [phoneNumber, setPhoneNumber] = useState(formValues.Phone || "");
    const [countryCode, setCountryCode] = useState<Country>();

    // Fetch country data from API
    useEffect(() =>
    {
        const fetchCountries = async () =>
        {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all");
                const data = await response.json();

                const countryMap = new Map<string, Country>();
                data
                    .filter((country: any) => country.idd?.root)
                    .forEach((country: any) =>
                    {
                        const code = `${country.idd.root}${country.idd.suffixes?.[0] || ""}`;
                        const name = country.name.common;
                        const uniqueValue = `${code}-${name}`;
                        countryMap.set(uniqueValue, {
                            name: name,
                            code: code,
                            flag: country.flags.png,
                            value: uniqueValue,
                            identifier: country.cca2,
                        });
                    });

                const countryData = Array.from(countryMap.values()).sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
                setCountries(countryData);

                const bangladesh = countryData.find((country) => country.code === "+880");
                if (bangladesh) {
                    setSelectedCountry(bangladesh);
                    setCountryCode(bangladesh);
                }
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };
        fetchCountries();
    }, []);

    // Handle selection change
    const handleCountryChange = (uniqueValue: string) =>
    {
        const selectedCountry = countries.find((country) => country.value === uniqueValue);
        if (selectedCountry) {
            setSelectedCountry(selectedCountry);
        }
    };
    const handleCountryCodeChange = (uniqueValue: string) =>
    {
        const selectedCountry = countries.find((country) => country.value === uniqueValue);
        if (selectedCountry) {
            setCountryCode(selectedCountry);
        }
    };
    // Update formValues when phone number or country code changes
    useEffect(() =>
    {
        if (formValues.Phone === `${countryCode?.code}${phoneNumber}`) {
            return;
        }

        setFormValues({
            ...formValues,
            Phone: `${countryCode?.code}${phoneNumber}`,
            CountryCode: countryCode?.code,
        });
    }, [countryCode, phoneNumber, formValues, setFormValues]);

    useEffect(() =>
    {
        setFormValues({
            ...formValues,
            Country: selectedCountry?.name,
        });
    }, [selectedCountry]);

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <label htmlFor="phone" className="lg:text-[22px] text-lg font-medium leading-[33px]">
                    আপনার দেশ নির্বাচন করুন
                </label>
                <div className="w-full">
                    <Select
                        value={selectedCountry?.value}
                        onValueChange={handleCountryChange}
                    >
                        <SelectTrigger
                            className={cn(
                                "rounded-[10px] px-4 py-3.5 text-lg h-auto bg-[#edf4e3]/10 outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 focus:outline-[#86cd58] ring-0 focus:ring-0",
                            )}
                        >
                            <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                        <SelectContent>
                            <div className="max-h-[300px] overflow-y-auto">
                                {countries.map((country) => (
                                    <SelectItem
                                        key={country.value}
                                        value={country.value}
                                        className="flex items-center gap-2"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Image
                                                src={country.flag}
                                                alt={`${country.name} flag`}
                                                width={20}
                                                height={20}
                                                className="w-5 h-5 object-cover"
                                            />
                                            <span className="min-w-max">{country.name}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </div>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="phone" className="lg:text-[22px] text-lg font-medium leading-[33px]">
                    আপনার WhatsApp নাম্বার?
                </label>
                <div className="flex outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full rounded-[10px] overflow-hidden">
                    <Select
                        value={countryCode?.value}
                        onValueChange={handleCountryCodeChange}
                    >
                        <SelectTrigger
                            className={cn(
                                "border-r-4 border-[#86cd58] px-4 py-3.5 text-lg h-auto bg-[#edf4e3]/10 outline-none focus:outline-none ring-0 focus:ring-0 rounded-none w-[140px]",
                            )}
                        >
                            <SelectValue placeholder="Code" />
                        </SelectTrigger>
                        <SelectContent>
                            <div className="max-h-[300px] overflow-y-auto">
                                {countries.map((country) => (
                                    <SelectItem
                                        key={country.value}
                                        value={country.value}
                                        className="flex items-center gap-2"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Image
                                                src={country.flag}
                                                alt={`${country.name} flag`}
                                                width={20}
                                                height={20}
                                                className="w-5 h-5 object-cover"
                                            />
                                            <span className="text-white">{country.code}</span>
                                            <span className="min-w-max">{country.name}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </div>
                        </SelectContent>
                    </Select>
                    <input
                        type="number"
                        name="phone"
                        id="phone"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="px-4 py-3.5 bg-[#edf4e3]/10 text-lg w-full focus:outline-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default PhoneInput;