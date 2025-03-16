import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import ClientQueryProvider from "@/components/common/ClientQueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <>
      <Navbar />
      <ClientQueryProvider>
        {children}
      </ClientQueryProvider>
      <Toaster position="bottom-right" />
      <Footer />
    </>
  );
}
