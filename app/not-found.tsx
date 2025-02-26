import { Icons } from "@/components/icons";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col items-center gap-2 justify-center">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Icons.logo className="text-4xl" />
        <p className="text-2xl">Lobon </p>
      </Link>
      <p className="text-sm mt-8">404 not found</p>
    </div>
  );
}
