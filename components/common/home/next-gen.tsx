import Image from "next/image";

export default function NextGen()
{
    return (
        <div className="bg-[#EDF4E3] lg:py-32 py-12 pointer-events-none">
            <div className="container">
                <h2 className="text-center text-[#0A221F] lg:text-5xl text-3xl font-medium leading-[55px]">নেক্সট জেন পলিটিশিয়ান </h2>
                <Image src="/images/next-gen.png" width={1114} height={1611} alt="Next Gen" priority className="h-auto w-full pt-8 hidden lg:block" />
                <Image src="/images/next-gen-mobile.png" width={1114} height={1611} alt="Next Gen" priority className="h-auto w-full pt-8 lg:hidden" />
            </div>
        </div>
    )
}
