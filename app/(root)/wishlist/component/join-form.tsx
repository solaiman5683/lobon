'use client';

import { useState } from "react";

export default function JoinForm()
{
    const [formValues, setFormValues] = useState({
        name: '',
        activity: 'publicly',
    });
    return (
        <div className="bg-[#0A221F] lg:py-32 py-8 ">
            <div className="max-w-2xl mx-auto space-y-6">
                <h4 className="text-white text-[50px] font-medium leading-[55px]">জয়েনফর্ম</h4>
                <div className="italic text-white/90 text-[22px] font-normal font-trb leading-[33px]">নোটঃ আপনি যদি BAL , সমকামী আইডলজি সমর্থক হয়ে থাকেন, <br /> দয়া করে সাবমিশন থেকে বিরত থাকুন।</div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-6 text-white">
                    <div className="space-y-2">
                        <label className="text-[22px] font-medium leading-[33px]">আপনার এনআইডি/পাসপোর্ট অনুযায়ী নাম?</label>
                        <input type="text" className="px-4 py-3.5 bg-[#edf4e3]/10 rounded-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 w-full text-lg" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[22px] font-medium leading-[33px]">আপনার আমাদের সাথে কীভাবে অ্যাক্টিভিটিতে অংশ নিতে চান?</label>
                        <div className="flex gap-8">
                            <div
                                onClick={() => setFormValues({ ...formValues, activity: 'publicly' })}
                                className="flex items-center space-x-2 cursor-pointer">
                                <div className="w-[22px] h-[22px] relative bg-white/20 rounded-[100px] border-2 border-[#c7ff7d]">
                                    <div className={`w-[10px] h-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#c7ff7d] rounded-[100px] ${formValues.activity === 'publicly' ? 'opacity-100' : 'opacity-0'} transition-all duration-150 ease-linear`} />
                                </div>
                                <span className="justify-start text-white text-base font-semibold leading-normal">পাবলিকলি </span>
                            </div>
                            <div
                                onClick={() => setFormValues({ ...formValues, activity: 'secretly' })}
                                className="flex items-center space-x-2 cursor-pointer">
                                <div className="w-[22px] h-[22px] relative bg-white/20 rounded-[100px] border-2 border-[#c7ff7d]" >

                                    <div className={`w-[10px] h-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#c7ff7d] rounded-[100px] ${formValues.activity === 'secretly' ? 'opacity-100' : 'opacity-0'} transition-all duration-150 ease-linear`} />
                                </div>
                                <span className="justify-start text-white text-base font-semibold  leading-normal">সিক্রেটলি </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
