import Image from "next/image";

export default function NextGen()
{
    return (
        <div className="bg-[#EDF4E3] py-32 pointer-events-none">
            <div className="container">
                <h2 className="text-center text-[#0A221F] text-5xl font-medium leading-[55px]">নেক্সট জেন পলিটিশিয়ান </h2> 
                <Image src="/images/next-gen.svg" width={1114} height={1611} alt="Next Gen" priority className="h-auto w-full pt-8" />
            </div>
        </div>
    )
}
