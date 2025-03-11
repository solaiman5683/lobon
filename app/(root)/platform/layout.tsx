import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";

const Layout = ({
    children,
}: {
    children: React.ReactNode
}) =>
{
    return (
        <>
            <Navbar />
            {children}
            <Toaster position="bottom-right" />
            <Footer />
        </>
    );
};

export default Layout;
