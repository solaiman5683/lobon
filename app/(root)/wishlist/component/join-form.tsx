'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DISTRICT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { NidUploader } from "./nid-uploader";
import PhoneInput from "./phoneInput";

const occupations = [
    {
        slug: 'Engineer',
        name: 'ইঞ্জিনিয়ার',
    },
    {
        slug: 'Scientist',
        name: 'সাইনটিস্ট',
    },
    {
        slug: 'Entrepreneur',
        name: 'এন্টারপ্রেনার',
    },
    {
        slug: 'Student',
        name: 'শিক্ষার্থী',
    },
    {
        slug: 'Teacher_Researcher',
        name: 'শিক্ষক/গবেষক',
    },
    {
        slug: 'Political_Analyst',
        name: 'রাজনীতি বিশ্লেষক',
    },
    {
        slug: 'Political_Activist',
        name: 'রাজনৈতিক সংগঠক',
    },
    {
        slug: 'Lawyer_Legal',
        name: 'আইনজীবী/আইনপেশার সাথে যুক্ত',
    },
    {
        slug: 'Doctor_Healthcare',
        name: 'চিকিৎসক/চিকিৎসা সেবার সাথে যুক্ত',
    },
    {
        slug: 'Policy_Maker',
        name: 'পলিসি প্রণেতা',
    },
    {
        slug: 'Laborer',
        name: 'শ্রমজীবী',
    },
    {
        slug: 'NGO_Worker',
        name: 'এনজিও কর্মী',
    },
    {
        slug: 'Businessperson',
        name: 'ব্যবসায়ী',
    },
    {
        slug: 'Religious_Leader',
        name: 'ধর্মীয় নেতা',
    },
    {
        slug: 'Expatriate',
        name: 'প্রবাসী',
    },
    {
        slug: 'Activist',
        name: 'এ্যাক্টিভিস্ট',
    },
    {
        slug: 'Farmer_Agriculture',
        name: 'কৃষক/কৃষিপেশার সাথে যুক্ত',
    },
    {
        slug: 'Writer',
        name: 'লেখক',
    },
    {
        slug: 'Artist',
        name: 'শিল্পী',
    },
    {
        slug: 'Govt_Employee',
        name: 'সরকারি চাকুরিজীবী',
    },
    {
        slug: 'Banker',
        name: 'ব্যাংকার',
    },
    {
        slug: 'Journalist_Media',
        name: 'গণমাধ্যম কর্মী',
    },
    {
        slug: 'Athlete',
        name: 'ক্রীড়াবিদ',
    },
    {
        slug: 'Other',
        name: 'অন্যান্য',
    }
];


const activityTypes = [
    {
        slug: 'Publicly',
        name: 'পাবলিকলি',
    },
    {
        slug: 'Secretly',
        name: 'সিক্রেটলি',
    }
]

async function postToNocoDB(inputData: any, nidFile: File | null)
{
    // Handle file upload if a file is provided
    if (nidFile) {
        const formData = new FormData();
        formData.append('file', nidFile);

        try {
            // Upload the file to NocoDB's storage endpoint
            const fileUploadResponse = await axios.post(
                'https://crm.lobon.org/api/v2/storage/upload',
                formData,
                {
                    headers: {
                        'xc-token': 'OqSFdSdpMOKDO1FoeNkL5ULv_POw6CTZw2PbmqM-',
                        'Content-Type': 'multipart/form-data',
                    },
                    // Optional: Organize files in a specific folder
                    params: { path: 'nid_attachments' }, // Customize as needed
                }
            );

            // The response should be an array of objects (e.g., [{ url: "file_url", ... }])
            const attachmentData = fileUploadResponse.data;

            // Validate the response format
            if (!attachmentData) {
                console.error('Invalid file upload response:', attachmentData);
                throw new Error('Failed to process attachment upload: Invalid response format');
            }

            // Assign the attachment data to the NID field
            inputData.NID = attachmentData; // NocoDB expects the full array
        } catch (error: any) {
            console.error(
                'Error uploading file to NocoDB:',
                error.response ? error.response.data : error.message
            );
            throw new Error('File upload failed: ' + (error.response?.data?.message || error.message));
        }
    }

    // Post the record data
    const options = {
        method: 'POST',
        url: 'https://crm.lobon.org/api/v2/tables/mjmif4s4w6tfsa4/records',
        headers: {
            'xc-token': 'OqSFdSdpMOKDO1FoeNkL5ULv_POw6CTZw2PbmqM-',
            'Content-Type': 'application/json',
        },
        data: inputData,
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error: any) {
        console.error(
            'Error posting to NocoDB:',
            error.response ? error.response.data : error.message
        );
        throw new Error('Record creation failed: ' + (error.response?.data?.message || error.message));
    }
}



export default function JoinForm()
{
    const [formValues, setFormValues] = useState({
        Name: '',
        Activity: activityTypes[0].slug,
        Phone: '',
        Email: '',
        District: '',
        Occupassion: occupations[0].slug,
        About: '',
        Contribution: '',
        Country: '',
        CountryCode: '',
        Status: 'Pending',
    });
    const [nid, setNid] = useState<File[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const QueryClient = useQueryClient();
    const [showAllOccupations, setShowAllOccupations] = useState(false);

    const handleSubmit = async (e: any) =>
    {
        e.preventDefault();
        setIsSubmitting(true);
        // send form data to server
        try {
            await postToNocoDB(formValues, nid[0]);
            toast.success('আপনার তথ্য সফলভাবে সাবমিট করা হয়েছে');

            // Reset form values
            setFormValues({
                ...formValues,
                Name: '',
                Activity: activityTypes[0].slug,
                Email: '',
                District: '',
                Occupassion: occupations[0].slug,
                About: '',
                Contribution: '',
            });
            setNid([]);
            QueryClient.invalidateQueries({ queryKey: ['usersData'] });
        } catch (error) {
            console.log(error);
            toast.error('কিছু একটা সমস্যা হয়েছে, দয়া করে আবার চেষ্টা করুন');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#0A221F] lg:py-32 py-8 px-4 lg:px-0">
            <div className="max-w-2xl mx-auto lg:space-y-6 space-y-4">
                <h4 className="text-white lg:text-[50px] text-3xl font-medium leading-[55px]">জয়েনফর্ম</h4>
                <div className="italic text-white/90 lg:text-[22px] text-lg font-normal font-trb lg:leading-[33px]">নোটঃ আপনি যদি BAL , সমকামী আইডলজি সমর্থক হয়ে থাকেন, <br className="lg:block hidden" /> দয়া করে সাবমিশন থেকে বিরত থাকুন।</div>

                <form onSubmit={handleSubmit} className="space-y-6 text-white">
                    <div className="space-y-2">
                        <label htmlFor="name" className="lg:text-[22px] text-lg font-medium leading-[33px]">আপনার এনআইডি/পাসপোর্ট অনুযায়ী নাম?</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            onChange={(e) => setFormValues({ ...formValues, Name: e.target.value })}
                            value={formValues.Name}
                            className="px-4 py-3.5 bg-[#edf4e3]/10 rounded-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full text-lg" />
                    </div>
                    <div className="space-y-2">
                        <label className="lg:text-[22px] text-lg font-medium leading-[33px]">আপনার আমাদের সাথে কীভাবে অ্যাক্টিভিটিতে অংশ নিতে চান?</label>
                        <div className="flex gap-8">
                            {
                                activityTypes.map((activity) => (
                                    <div key={activity.slug} onClick={() => setFormValues({ ...formValues, Activity: activity.slug })} className={`flex items-center space-x-2 cursor-pointer ${formValues.Activity === activity.slug ? 'text-[#c7ff7d]' : 'text-white'} transition-all duration-150 ease-linear`}>
                                        <div className="w-[22px] h-[22px] relative bg-white/20 rounded-[100px] border-2 border-[#c7ff7d]">
                                            <div className={`w-[10px] h-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#c7ff7d] rounded-[100px] ${formValues.Activity === activity.slug ? 'opacity-100' : 'opacity-0'} transition-all duration-150 ease-linear`} />
                                        </div>
                                        <span className="justify-start text-base font-semibold leading-normal">{activity.name}</span>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <PhoneInput formValues={formValues} setFormValues={setFormValues} />
                    <div className="space-y-2">
                        <label htmlFor="email" className="lg:text-[22px] text-lg font-medium leading-[33px]">
                            আপনার ইমেইল?
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            onChange={(e) => setFormValues({ ...formValues, Email: e.target.value })}
                            value={formValues.Email}
                            className="px-4 py-3.5 bg-[#edf4e3]/10 rounded-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full text-lg" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="district" className="lg:text-[22px] text-lg font-medium leading-[33px]">
                            আপনার এনআইডি/পাসপোর্ট অনুযায়ী কোন জেলা প্রতিনিধিত্ব করেন?
                        </label>
                        {/* <input
                            type="text"
                            name="district"
                            id="district"
                            required
                            onChange={(e) => setFormValues({ ...formValues, District: e.target.value })}
                            value={formValues.District}
                            className="px-4 py-3.5 bg-[#edf4e3]/10 rounded-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full text-lg" /> */}
                        <div className="w-full">
                            <Select
                                value={formValues.District}
                                onValueChange={(value) => setFormValues({ ...formValues, District: value })}
                            >
                                <SelectTrigger
                                    className={cn(
                                        "rounded-[10px] px-4 py-3.5 h-auto bg-[#edf4e3]/10 outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 focus:outline-[#86cd58] ring-0 focus:ring-0 text-lg",
                                    )}
                                >
                                    <SelectValue
                                        placeholder="জেলা নির্বাচন করুন"
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    <div className="max-h-[300px] overflow-y-auto">
                                        {DISTRICT.map((district) => (
                                            <SelectItem
                                                key={district.name}
                                                value={district.name}
                                                className="flex items-center gap-2"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className="min-w-max text-lg">{district.bn}</span>
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </div>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="lg:text-[22px] text-lg font-medium leading-[33px]">
                            আপনার পেশা?
                        </label>
                        <div className="flex flex-wrap gap-4">
                            {
                                showAllOccupations ? occupations.map((occupation) => (
                                    <div
                                        key={occupation.slug}
                                        onClick={() => setFormValues({ ...formValues, Occupassion: occupation.slug })}
                                        className={`flex items-center space-x-2 cursor-pointer ${formValues.Occupassion === occupation.slug ? 'text-[#c7ff7d]' : 'text-white'} transition-all duration-150 ease-linear`}>
                                        <div className="w-[22px] h-[22px] relative bg-white/20 rounded-[100px] border-2 border-[#c7ff7d]">
                                            <div className={`w-[10px] h-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#c7ff7d] rounded-[100px] ${formValues.Occupassion === occupation.slug ? 'opacity-100' : 'opacity-0'} transition-all duration-150 ease-linear`} />
                                        </div>
                                        <span className="justify-start text-base font-semibold leading-normal">{occupation.name}</span>
                                    </div>
                                )) : occupations.slice(0, 3).map((occupation) => (
                                    <div
                                        key={occupation.slug}
                                        onClick={() => setFormValues({ ...formValues, Occupassion: occupation.slug })}
                                        className={`flex items-center space-x-2 cursor-pointer ${formValues.Occupassion === occupation.slug ? 'text-[#c7ff7d]' : 'text-white'} transition-all duration-150 ease-linear`}>
                                        <div className="w-[22px] h-[22px] relative bg-white/20 rounded-[100px] border-2 border-[#c7ff7d]">
                                            <div className={`w-[10px] h-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#c7ff7d] rounded-[100px] ${formValues.Occupassion === occupation.slug ? 'opacity-100' : 'opacity-0'} transition-all duration-150 ease-linear`} />
                                        </div>
                                        <span className="justify-start text-base font-semibold leading-normal">{occupation.name}</span>
                                    </div>
                                ))
                            }

                            <button onClick={() => setShowAllOccupations(!showAllOccupations)} className="text-lime-300 text-base font-medium leading-normal">
                                {
                                    showAllOccupations ? 'View Less' : 'View All'
                                }
                            </button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="url" className="lg:text-[22px] text-lg font-medium leading-[33px]">
                            আপনার সম্পর্কে আমরা কীভাবে জানতে পারি? ex url: LinkedIn, Github, Website, Research Paper, Facebook, etc.
                        </label>
                        <input
                            type="text"
                            name="url"
                            id="url"
                            required
                            onChange={(e) => setFormValues({ ...formValues, About: e.target.value })}
                            value={formValues.About}
                            className="px-4 py-3.5 bg-[#edf4e3]/10 rounded-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full text-lg" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="contributionMessage" className="lg:text-[22px] text-lg font-medium leading-[33px]">
                            আপনি কিভাবে আমদেরকে কট্রিবিউট করতে চান? (optional)
                        </label>
                        <textarea
                            name="contributionMessage"
                            id="contributionMessage"
                            onChange={(e) => setFormValues({ ...formValues, Contribution: e.target.value })}
                            value={formValues.Contribution}
                            className="px-4 py-3.5 bg-[#edf4e3]/10 rounded-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full text-lg" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="contributionMessage" className="lg:text-[22px] text-lg font-medium leading-[33px]">
                            আপনার NID  এটাচ  করুন।
                        </label>
                        <NidUploader files={nid} setFiles={setNid} />
                    </div>

                    <button type="submit" className="px-5 py-3 bg-[#c7ff7d] rounded-[10px]">
                        <span className="text-[#1d3200] text-lg font-semibold leading-normal">
                            {isSubmitting ? 'সাবমিট হচ্ছে...' : 'সাবমিট'}
                        </span>
                    </button>
                </form>
            </div>
        </div>
    )
}
