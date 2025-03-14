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
}

const PhoneInput = ({ formValues, setFormValues }: any) =>
{
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountryCode, setSelectedCountryCode] = useState("+880"); // Default to Bangladesh
    const [phoneNumber, setPhoneNumber] = useState(formValues.Phone || "");

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
                        });
                    });

                const countryData = Array.from(countryMap.values()).sort((a, b) =>
                    a.name.localeCompare(b.name)
                );

                setCountries(countryData);
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
            setSelectedCountryCode(selectedCountry.code);
        }
    };

    // Update formValues when phone number or country code changes
    useEffect(() =>
    {
        setFormValues({
            ...formValues,
            Phone: `${selectedCountryCode}${phoneNumber}`,
        });
    }, [selectedCountryCode, phoneNumber]);

    return (
        <div className="space-y-2">
            <label htmlFor="phone" className="text-[22px] font-medium leading-[33px]">
                আপনার ফোন নাম্বার?
            </label>
            <div className="flex w-full">
                <Select
                    value={countries.find((c) => c.code === selectedCountryCode)?.value || ""}
                    onValueChange={handleCountryChange}
                >
                    <SelectTrigger
                        className={cn(
                            "rounded-r-none px-2 py-3.5 h-auto bg-[#edf4e3]/10 outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 focus:outline-[#86cd58] ring-0 focus:ring-0",
                            "w-[120px]"
                        )}
                    >
                        <SelectValue placeholder="+880" />
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
                                        <span className="text-white">({country.code})</span>
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
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="px-4 py-3.5 bg-[#edf4e3]/10 rounded-tr-[10px] rounded-br-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full text-lg"
                    placeholder="Enter phone number"
                />
            </div>
        </div>
    );
};

export default PhoneInput;