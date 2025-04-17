import ClientQueryProvider from "@/components/common/ClientQueryProvider";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";

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
