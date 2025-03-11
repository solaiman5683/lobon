'use client';

import { useState } from "react";

const occupations = [
    {
        slug: 'engineer',
        name: 'ইঞ্জিনিয়ার',
    },
    {
        slug: 'scientist',
        name: 'সাইনন্টিস্ট',
    },
    {
        slug: 'entrepreneur',
        name: 'এন্টারপ্রেনার',
    },
    {
        slug: 'others',
        name: 'অন্য পেশা',
    }
]

const activityTypes = [
    {
        slug: 'publicly',
        name: 'পাবলিকলি',
    },
    {
        slug: 'secretly',
        name: 'সিক্রেটলি',
    }
]

export default function JoinForm()
{
    const [formValues, setFormValues] = useState({
        name: '',
        activity: activityTypes[0].slug,
        phone: '',
        email: '',
        district: '',
        occupation: occupations[0].slug,
        url: '',
        contributionMessage: '',
    });

    const handleSubmit = (e: any) =>
    {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <div className="bg-[#0A221F] lg:py-32 py-8 ">
            <div className="max-w-2xl mx-auto space-y-6">
                <h4 className="text-white text-[50px] font-medium leading-[55px]">জয়েনফর্ম</h4>
                <div className="italic text-white/90 text-[22px] font-normal font-trb leading-[33px]">নোটঃ আপনি যদি BAL , সমকামী আইডলজি সমর্থক হয়ে থাকেন, <br /> দয়া করে সাবমিশন থেকে বিরত থাকুন।</div>

                <form onSubmit={handleSubmit} className="space-y-6 text-white">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-[22px] font-medium leading-[33px]">আপনার এনআইডি/পাসপোর্ট অনুযায়ী নাম?</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                            value={formValues.name}
                            className="px-4 py-3.5 bg-[#edf4e3]/10 rounded-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full text-lg" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[22px] font-medium leading-[33px]">আপনার আমাদের সাথে কীভাবে অ্যাক্টিভিটিতে অংশ নিতে চান?</label>
                        <div className="flex gap-8">
                            {
                                activityTypes.map((activity) => (
                                    <div key={activity.slug} onClick={() => setFormValues({ ...formValues, activity: activity.slug })} className={`flex items-center space-x-2 cursor-pointer ${formValues.activity === activity.slug ? 'text-[#c7ff7d]' : 'text-white'} transition-all duration-150 ease-linear`}>
                                        <div className="w-[22px] h-[22px] relative bg-white/20 rounded-[100px] border-2 border-[#c7ff7d]">
                                            <div className={`w-[10px] h-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#c7ff7d] rounded-[100px] ${formValues.activity === activity.slug ? 'opacity-100' : 'opacity-0'} transition-all duration-150 ease-linear`} />
                                        </div>
                                        <span className="justify-start text-base font-semibold leading-normal">{activity.name}</span>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-[22px] font-medium leading-[33px]">
                            আপনার ফোন নাম্বার?
                        </label>
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                            value={formValues.phone}
                            className="px-4 py-3.5 bg-[#edf4e3]/10 rounded-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full text-lg" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-[22px] font-medium leading-[33px]">
                            আপনার ইমেইল?
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                            value={formValues.email}
                            className="px-4 py-3.5 bg-[#edf4e3]/10 rounded-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full text-lg" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="district" className="text-[22px] font-medium leading-[33px]">
                            আপনার এনআইডি/পাসপোর্ট অনুযায়ী কোন জেলা প্রতিনিধিত্ব করেন?
                        </label>
                        <input
                            type="text"
                            name="district"
                            id="district"
                            required
                            onChange={(e) => setFormValues({ ...formValues, district: e.target.value })}
                            value={formValues.district}
                            className="px-4 py-3.5 bg-[#edf4e3]/10 rounded-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full text-lg" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[22px] font-medium leading-[33px]">
                            আপনার পেশা?
                        </label>
                        <div className="flex gap-8">
                            {
                                occupations.map((occupation) => (
                                    <div
                                        key={occupation.slug}
                                        onClick={() => setFormValues({ ...formValues, occupation: occupation.slug })}
                                        className={`flex items-center space-x-2 cursor-pointer ${formValues.occupation === occupation.slug ? 'text-[#c7ff7d]' : 'text-white'} transition-all duration-150 ease-linear`}>
                                        <div className="w-[22px] h-[22px] relative bg-white/20 rounded-[100px] border-2 border-[#c7ff7d]">
                                            <div className={`w-[10px] h-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#c7ff7d] rounded-[100px] ${formValues.occupation === occupation.slug ? 'opacity-100' : 'opacity-0'} transition-all duration-150 ease-linear`} />
                                        </div>
                                        <span className="justify-start text-base font-semibold leading-normal">{occupation.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="url" className="text-[22px] font-medium leading-[33px]">
                            আপনার সম্পর্কে আমরা কীভাবে জানতে পারি? ex url: LinkedIn, Github, Website, Research Paper, Facebook, etc.
                        </label>
                        <input
                            type="text"
                            name="url"
                            id="url"
                            required
                            onChange={(e) => setFormValues({ ...formValues, url: e.target.value })}
                            value={formValues.url}
                            className="px-4 py-3.5 bg-[#edf4e3]/10 rounded-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full text-lg" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="contributionMessage" className="text-[22px] font-medium leading-[33px]">
                            আপনি কিভাবে আমদেরকে কট্রিবিউট করতে চান? (optional)
                        </label>
                        <textarea
                            name="contributionMessage"
                            id="contributionMessage"
                            required
                            onChange={(e) => setFormValues({ ...formValues, contributionMessage: e.target.value })}
                            value={formValues.contributionMessage}
                            className="px-4 py-3.5 bg-[#edf4e3]/10 rounded-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full text-lg" />
                    </div>

                    <button type="submit" className="px-5 py-3 bg-[#c7ff7d] rounded-[10px]">
                        <span className="text-[#1d3200] text-lg font-semibold leading-normal">Submit</span>
                    </button>
                </form>
            </div>
        </div>
    )
}
