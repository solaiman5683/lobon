import 'leaflet/dist/leaflet.css';

const Layout = ({
    children,
}: {
    children: React.ReactNode
}) =>
{
    return (
        <>
            {children}
        </>
    );
};

export default Layout;
