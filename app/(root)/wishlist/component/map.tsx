'use client';
import { DISTRICT } from '@/lib/constants';
import L from 'leaflet'; // For custom icons
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { GeoJSON, MapContainer, Marker, TileLayer } from 'react-leaflet';
import districtsGeoJSON from './bd-district.geojson'; // Divisions GeoJSON
import divisionsGeoJSON from './bd-divisions.geojson'; // Divisions GeoJSON
import bangladeshGeoJSON from './bd.geojson'; // Country-level GeoJSON

// Custom icon for labels
const createCustomIcon = (count: number) =>
{
    return L.divIcon({
        html: `<div class="flex flex-col justify-center items-center icon-container">
        <span class="w-[50.36px] h-[20.68px] bg-[#c7ff7d] text-black text-[9.40px] font-bold leading-[13.15px] flex items-center justify-center rounded-full">
            ${count} জন
        </span>
            <svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                <g id="location-05">
                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M18.95 2.68616C14.1728 2.68616 9.63554 5.59074 7.74006 10.1487C5.97541 14.392 6.93474 18.0082 8.91628 21.0888C10.5335 23.6029 12.8931 25.8471 14.9983 27.8494C15.3984 28.2299 15.7893 28.6016 16.1642 28.9649L16.1667 28.9674C16.9141 29.6873 17.9121 30.0889 18.95 30.0889C19.9879 30.0889 20.9861 29.6873 21.7335 28.9673C22.0875 28.6262 22.4555 28.2775 22.8318 27.921L22.8335 27.9194C24.9612 25.9032 27.3533 23.6363 28.9874 21.0902C30.9665 18.0066 31.9225 14.3868 30.1601 10.1487C28.2646 5.59074 23.7273 2.68616 18.95 2.68616ZM18.9492 10.1241C16.3547 10.1241 14.2516 12.2273 14.2516 14.8217C14.2516 17.4162 16.3547 19.5193 18.9492 19.5193C21.5437 19.5193 23.6468 17.4162 23.6468 14.8217C23.6468 12.2273 21.5437 10.1241 18.9492 10.1241Z" fill="#C8FF7D"/>
                <path id="Vector_2" d="M9.55391 30.0889C10.37 30.0889 11.0403 30.7132 11.1132 31.5104C11.1403 31.5402 11.1865 31.5848 11.2615 31.644C11.5408 31.864 12.042 32.1308 12.8009 32.3837C14.3023 32.8843 16.4762 33.2207 18.9491 33.2207C21.4221 33.2207 23.5959 32.8843 25.0974 32.3837C25.8563 32.1308 26.3574 31.864 26.6368 31.644C26.7118 31.5848 26.758 31.5402 26.7851 31.5104C26.8579 30.7132 27.5282 30.0889 28.3444 30.0889C29.2092 30.0889 29.9102 30.7899 29.9102 31.6548C29.9102 32.7727 29.2292 33.5883 28.5753 34.1036C27.9037 34.6329 27.029 35.041 26.0878 35.3548C24.1889 35.9877 21.665 36.3524 18.9491 36.3524C16.2333 36.3524 13.7095 35.9877 11.8105 35.3548C10.8692 35.041 9.99454 34.6329 9.323 34.1036C8.66911 33.5883 7.98804 32.7727 7.98804 31.6548C7.98804 30.7899 8.68911 30.0889 9.55391 30.0889Z" fill="#C8FF7D"/>
                </g>
            </svg>
        </div>`,
        className: 'icon-container', // Remove default Leaflet styles 
        iconSize: [100, 40], // Width and height of the label area
    });
};


export default function Map({ records }: { records: any })
{
    const isMobile = window.innerWidth < 768;
    const [locationData, setLocationData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>
    {
        if (records) {
            setIsLoading(true);
            const newRecords: any[] = [];
            const data = records.list.forEach((record: any) =>
            {
                const district = DISTRICT.find((d) => d.name === record.District);
                if (!district) return;

                // check if district exists in the newRecords array
                const index = newRecords.findIndex((r) => r.name === record.District);
                if (index === -1) {
                    newRecords.push({
                        name: record.District,
                        lat: district?.latitude,
                        lon: district?.longitude,
                        division: district?.division,
                        count: 1,
                    });
                } else {
                    newRecords[index].count += 1;
                }
            });
            console.log(newRecords);
            setLocationData(newRecords);
            setIsLoading(false);
        }
    }, [records]);

    // Example user locations
    const userLocations = [
        { lat: 23.8103, lon: 90.2125, count: 250 }, // Dhaka
        { lat: 24.8998, lon: 91.8710, count: 180 }, // Sylhet
        { lat: 22.7010, lon: 90.3535, count: 220 }, // Barisal
        { lat: 22.3350, lon: 92.1325, count: 275 }, // Chittagong (Corrected)
        { lat: 24.7636, lon: 89.0241, count: 195 }, // Rajshahi (Corrected)
        { lat: 22.8456, lon: 89.3403, count: 230 }, // Khulna
        { lat: 25.7439, lon: 89.2752, count: 160 }, // Rangpur
        { lat: 24.9471, lon: 90.4203, count: 210 }, // Mymensingh
    ];

    if (locationData.length === 0 && !isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <MapContainer
                center={[23.6943, 90.3444]}
                zoom={isMobile ? 6.5 : 7.4}
                zoomSnap={0.1}
                zoomDelta={0.1}
                maxBounds={[[20.5906, 88.0086], [26.6345, 92.6803]]}
                minZoom={6}
                maxZoom={10}
                style={{ height: isMobile ? '450px' : '800px', width: isMobile ? '100%' : '60%', background: '#e5f5e0' }}
            >
                {/* TileLayer with reduced opacity and black-and-white filter via CSS */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | Lobon'
                />
                {/* Country GeoJSON */}
                <GeoJSON
                    data={bangladeshGeoJSON}
                    style={{
                        color: '#90D434', // Bright green stroke
                        weight: 2,
                        fillColor: '#1d3200', // Dark green fill
                        fillOpacity: 1, // Solid fill
                    }}
                />
                {/* Divisions GeoJSON */}
                <GeoJSON
                    data={divisionsGeoJSON}
                    style={{
                        color: '#90D434', // Bright green stroke for divisions
                        weight: 1,
                        fillOpacity: 0, // No fill, just stroke
                    }}
                />
                {/* Districts GeoJSON */}
                <GeoJSON
                    data={districtsGeoJSON}
                    style={{
                        color: '#90D434', // Bright green stroke for divisions
                        weight: 0.10,
                        fillOpacity: 0, // No fill, just stroke
                    }}
                />
                {/* User Markers with Custom Labels */}
                {locationData?.map((location, index) => (
                    <Marker
                        key={index}
                        position={[location.lat || 0, location.lon || 0]}
                        icon={createCustomIcon(location.count)} // Custom label
                        eventHandlers={{
                            click: () => console.log(`Total users: ${location.count}`)
                        }}
                        zIndexOffset={1000} // Ensure labels are above GeoJSON
                    />
                ))}
            </MapContainer>
        </>
    );
}
