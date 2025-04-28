'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DISTRICT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { NidUploader } from "./nid-uploader";
import PhoneInput from "./phoneInput";
import SignatureForm from "./signature-form";
import SignatureUploader from "./signature-uploader";
import Stepper from "./stepper";
import WelcomeMember from "./welcome-member";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

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

// random 10 digit number
const memberId = Math.floor(1000000000 + Math.random() * 9000000000).toString();

// Convert base64 to Blob
const dataURLtoBlob = (dataUrl: string) =>
{
    const arr = dataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)?.[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
};


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

const idTypes = [
    {
        slug: 'NID',
        name: 'এনআইডি',
    },
    {
        slug: 'Passport',
        name: 'পাসপোর্ট',
    },
]

async function postToNocoDB(inputData: any, nidFile: File | null, signatureFile: any)
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
    if (signatureFile) {
        const blob = dataURLtoBlob(signatureFile);
        const formData = new FormData();
        formData.append('file', blob, `signature-${inputData.MemberID}.png`);

        console.log('FormData:', formData.get('file'));

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
                    params: { path: 'signature' }, // Customize as needed
                }
            );

            // The response should be an array of objects (e.g., [{ url: "file_url", ... }])
            const attachmentData = fileUploadResponse.data;

            // Validate the response format
            if (!attachmentData) {
                console.error('Invalid file upload response:', attachmentData);
                throw new Error('Failed to process attachment upload: Invalid response format');
            }

            // Assign the attachment data to the Signature field
            inputData.Signature = attachmentData; // NocoDB expects the full array
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
        IdType: idTypes[0].slug,
        MemberID: memberId,
        IdNumber: '',
        Road: '',
        Sector: '',
        SubDistrict: '',
        PostalCode: '',
    });
    const [nid, setNid] = useState<File[]>([]);
    const [step, setStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const QueryClient = useQueryClient();
    const [showAllOccupations, setShowAllOccupations] = useState(false);

    const [signature, setSignature] = useState<string | null>(null);

    const canContinue = (!!(formValues.Name && formValues.Email && formValues.District && formValues.Occupassion && formValues.About && formValues.Activity && formValues.Phone) && step === 0) || (nid.length > 0 && step === 1) || (signature && step === 2);

    const handleSubmit = async (e: any) =>
    {
        e.preventDefault();
        setIsSubmitting(true);
        // send form data to server
        try {
            await postToNocoDB(formValues, nid[0], signature);
            toast.success('আপনার তথ্য সফলভাবে সাবমিট করা হয়েছে');

            // Reset form values
            setFormValues({
                ...formValues,
                Activity: activityTypes[0].slug,
                Email: '',
                District: '',
                Occupassion: occupations[0].slug,
                About: '',
                Contribution: '',
                MemberID: Math.floor(1000000000 + Math.random() * 9000000000).toString(),
                IdNumber: '',
                Road: '',
                Sector: '',
                SubDistrict: '',
                PostalCode: '',
            });
            setSignature(null);
            setNid([]);
            setStep(prev => prev + 1);
            QueryClient.invalidateQueries({ queryKey: ['usersData'] });
        } catch (error) {
            console.log(error);
            toast.error('কিছু একটা সমস্যা হয়েছে, দয়া করে আবার চেষ্টা করুন');
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() =>
    {
        const formHeader = document.getElementById('form-header');
        if (formHeader) {
            formHeader.scrollIntoView({ behavior: 'auto' });
        }
    }, [step]);

    return (
        <div id="form-header" className="bg-[#0A221F] lg:py-32 py-8 px-4 lg:px-0 space-y-6">
            {
                step < 3 && (
                    <div className="flex gap-8 lg:flex-row flex-col justify-center w-full">
                        <div className="w-72"></div>
                        <div className="lg:w-[576px] lg:space-y-6 space-y-4">
                            <h4 className="text-white lg:text-[50px] text-3xl font-medium leading-[55px]">জয়েনফর্ম</h4>
                            <div className="italic text-white/90 lg:text-[22px] text-lg font-normal font-trb lg:leading-[33px]">নোটঃ আপনি যদি BAL আইডলজি সমর্থক হয়ে থাকেন, <br className="lg:block hidden" /> দয়া করে সাবমিশন থেকে বিরত থাকুন।</div>
                        </div>
                        <div className="w-72"></div>
                    </div>
                )
            }
            <div className="flex gap-8 lg:flex-row flex-col justify-center w-full">
                <div className="lg:w-72 w-full sticky top-10 z-50">
                    {
                        step < 3 && (
                            <Stepper step={step} />
                        )
                    }
                </div>
                <div className="lg:w-[576px] w-full lg:space-y-6 space-y-4">
                    {
                        step === 0 && (
                            <form className="space-y-6 text-white">
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
                                                    <span className="justify-start text-base font-semibold leading-normal flex gap-2 items-center">
                                                        {activity.name}
                                                        {
                                                            activity.slug === 'Secretly' && <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Info size={14} />
                                                                </TooltipTrigger>
                                                                <TooltipContent className="p-0 border border-[#86CD58]">
                                                                    <p className="w-[200px] p-3 text-sm">
                                                                        <span className="text-white">
                                                                            আপনার তথ্য  ব্যবহৃত হবে শুধুমাত্র অভ্যন্তরীণ ও প্রশাসনিক প্রয়োজনে — এবং তা সংরক্ষিত থাকবে সর্বোচ্চ গোপনীয়তায়, একদম mission-critical লেভেলে।
                                                                        </span>
                                                                    </p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        }
                                                    </span>
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
                            </form>)
                    }
                    {
                        step === 1 && (
                            <div className="space-y-6 text-white">
                                <div className="space-y-2">
                                    <label htmlFor="idType" className="lg:text-[22px] text-lg font-medium leading-[33px]">
                                        আইডি টাইপ
                                    </label>
                                    <div className="flex gap-8">
                                        {
                                            idTypes.map((idType) => (
                                                <button key={idType.slug} onClick={() => setFormValues({ ...formValues, IdType: idType.slug })} className={`flex items-center space-x-2 cursor-pointer ${formValues.Activity === idType.slug ? 'text-[#c7ff7d]' : 'text-white'} transition-all duration-150 ease-linear`}>
                                                    <div className="w-[22px] h-[22px] relative bg-white/20 rounded-[100px] border-2 border-[#c7ff7d]">
                                                        <div className={`w-[10px] h-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#c7ff7d] rounded-[100px] ${formValues.IdType === idType.slug ? 'opacity-100' : 'opacity-0'} transition-all duration-150 ease-linear`} />
                                                    </div>
                                                    <span className="justify-start text-base font-semibold leading-normal">{idType.name}</span>
                                                </button>
                                            ))
                                        }

                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="idType" className="lg:text-[22px] text-lg font-medium leading-[33px]">
                                        {
                                            formValues.IdType === 'NID' ? 'আপনার এনআইডি নম্বর' : 'আপনার পাসপোর্ট নম্বর'
                                        }
                                    </label>
                                    <input
                                        type="text"
                                        name="idNumber"
                                        id="idNumber"
                                        required
                                        onChange={(e) => setFormValues({ ...formValues, IdNumber: e.target.value })}
                                        value={formValues.IdNumber}
                                        className="px-4 py-3.5 bg-[#edf4e3]/10 rounded-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full text-lg" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="nid" className="lg:text-[22px] text-lg font-medium leading-[33px]">
                                        দয়া করে আপনার NID এর সামনের ও পেছনের অংশ একসাথে স্ক্যান করে আপলোড করুন (PDF অথবা JPG)
                                    </label>
                                    <NidUploader files={nid} setFiles={setNid} />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="roadName" className="lg:text-[22px] text-lg font-medium leading-[33px]">
                                            রাস্তা/সড়কের নাম
                                        </label>
                                        <input
                                            type="text"
                                            name="roadName"
                                            id="roadName"
                                            required
                                            onChange={(e) => setFormValues({ ...formValues, Road: e.target.value })}
                                            value={formValues.Road}
                                            className="px-4 py-3.5 bg-[#edf4e3]/10 rounded-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full text-lg" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="sector" className="lg:text-[22px] text-lg font-medium leading-[33px]">
                                            এলাকা/সেক্টর
                                        </label>
                                        <input
                                            type="text"
                                            name="sector"
                                            id="sector"
                                            required
                                            onChange={(e) => setFormValues({ ...formValues, Sector: e.target.value })}
                                            value={formValues.Sector}
                                            className="px-4 py-3.5 bg-[#edf4e3]/10 rounded-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full text-lg" />
                                    </div>
                                    <div className="space-y-2 col-span-2">
                                        <label htmlFor="sector" className="lg:text-[22px] text-lg font-medium leading-[33px]">
                                            থানা/উপজেলা
                                        </label>
                                        <input
                                            type="text"
                                            name="subDistrict"
                                            id="subDistrict"
                                            required
                                            onChange={(e) => setFormValues({ ...formValues, SubDistrict: e.target.value })}
                                            value={formValues.SubDistrict}
                                            className="px-4 py-3.5 bg-[#edf4e3]/10 rounded-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full text-lg" />
                                    </div>
                                    <div className="space-y-2 col-span-2">
                                        <label htmlFor="postalCode" className="lg:text-[22px] text-lg font-medium leading-[33px]">
                                            পোস্টাল কোড
                                        </label>
                                        <input
                                            type="text"
                                            name="postalCode"
                                            id="postalCode"
                                            required
                                            onChange={(e) => setFormValues({ ...formValues, PostalCode: e.target.value })}
                                            value={formValues.PostalCode}
                                            className="px-4 py-3.5 bg-[#edf4e3]/10 rounded-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full text-lg" />
                                    </div>

                                </div>
                            </div>)
                    }
                    {
                        step === 2 && (
                            <div className="space-y-6 text-white">
                                <SignatureForm data={formValues} signature={signature} />
                                <div className="space-y-2">
                                    <label htmlFor="nid" className="lg:text-[22px] text-lg font-medium leading-[33px]">
                                        আপনার স্বাক্ষর যুক্ত করুন।
                                    </label>
                                    <SignatureUploader signature={signature} setSignature={setSignature} />
                                </div>
                            </div>)
                    }

                    {
                        step === 3 && <WelcomeMember name={formValues.Name} />
                    }

                    <div className="flex gap-4">
                        {
                            step < 2 && (<button disabled={!canContinue} onClick={() => setStep(step === 0 ? 1 : step === 1 ? 2 : 0)} className={`px-5 py-3 bg-[#c7ff7d] ${(!canContinue) && 'opacity-50'} rounded-[10px]`}><span className="text-[#1d3200] text-lg font-semibold leading-normal">Continue</span></button>)
                        }

                        {step === 2 && (
                            <button onClick={handleSubmit} disabled={!canContinue} className={`px-5 py-3 bg-[#c7ff7d] rounded-[10px] ${(!canContinue) && 'opacity-50'}`}>
                                <span className="text-[#1d3200] text-lg font-semibold leading-normal">
                                    {isSubmitting ? 'Loading...' : 'Become Member'}
                                </span>
                            </button>
                        )}

                        {step > 0 && step < 3 && <button onClick={() => setStep(step === 1 ? 0 : step === 2 ? 1 : 0)} className="px-5 py-3 bg-white/25 rounded-[10px]"><span className="text-white text-lg font-semibold leading-normal">Back</span></button>}

                    </div>

                </div>
                <div className="w-72"></div>
            </div>
        </div>
    )
}
