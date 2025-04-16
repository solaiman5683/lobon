import Image from "next/image";

export default function SignatureForm({ data, signature }: any)
{
    return (
        <div className="bg-[#EDF4E3] py-4 px-6 rounded-[10px] space-y-4">
            <div className="flex items-center justify-between">
                <Image src="/logo.svg" alt="Logo" width={40.5} height={56.9} className="h-[56.9px] w-auto" />
                <p className="min-w-max text-center justify-start text-lime-950 text-sm font-medium font-sl leading-none">Leadership of Brave, <br /> Open-minded Nationals</p>
                <p className="w-14 justify-start text-lime-950 text-[9.79px] font-medium font-sl leading-3">
                    Member ID
                    <br />
                    #{data?.MemberID}
                </p>

            </div>
            <hr className="opacity-70" />
            <div className="p-8">
                <div className="h-96 justify-start text-black text-sm font-medium font-sl leading-tight">
                    আমি {data.Name}, স্বেচ্ছায় সম্মতি প্রদান করছি যে, আমি LOBON সদস্য হওয়ার উদ্দেশ্যে আমার জাতীয় পরিচয়পত্র এবং স্বাক্ষর সংযুক্ত করে প্রয়োজনীয় তথ্য দিচ্ছি।
                    <br />
                    <br />
                    আমি নিশ্চিত করছি যে, এই ফর্মে দেওয়া সকল তথ্য আমার জ্ঞাতসারে সঠিক এবং সত্য।
                    <br />
                    <br />
                    আমি অনুমতি দিচ্ছি যে, উক্ত তথ্য শুধুমাত্র LOBON সদস্যপদ যাচাই ও যোগাযোগের উদ্দেশ্যে সংরক্ষণ এবং ব্যবহার করা যেতে পারে।
                    <br /><br />
                    স্বাক্ষর:
                    <br />
                    {
                        signature ? <Image src={signature} alt="Signature" width={100} height={100} className="w-[100px] h-auto" /> : <p className="text-red-500">No signature uploaded</p>
                    }
                    {/* <Image src={signature} alt="Signature" className="w-full h-auto" /> */}
                    <br /><br />
                    তারিখ: {new Date().toLocaleDateString()}</div>
            </div>
        </div>
    )
}
