'use client';
import L from 'leaflet'; // For custom icons
import 'leaflet/dist/leaflet.css';
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
        <svg class="size-6" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.4485 2.86209C14.6713 2.86209 10.1341 5.76667 8.23859 10.3246C6.47395 14.5679 7.43328 18.1841 9.41481 21.2647C11.032 23.7788 13.3917 26.023 15.4969 28.0253C15.8969 28.4058 16.2878 28.7776 16.6627 29.1409L16.6652 29.1434C17.4126 29.8632 18.4107 30.2648 19.4485 30.2648C20.4864 30.2648 21.4846 29.8632 22.232 29.1432C22.5861 28.8022 22.9541 28.4534 23.3303 28.0969L23.3321 28.0953C25.4598 26.0791 27.8518 23.8122 29.4859 21.2661C31.465 18.1826 32.421 14.5627 30.6586 10.3246C28.7631 5.76667 24.2259 2.86209 19.4485 2.86209ZM19.4478 10.3C16.8533 10.3 14.7501 12.4032 14.7501 14.9976C14.7501 17.5921 16.8533 19.6952 19.4478 19.6952C22.0422 19.6952 24.1454 17.5921 24.1454 14.9976C24.1454 12.4032 22.0422 10.3 19.4478 10.3Z" fill="#C8FF7D"/>
<path d="M10.0524 30.2648C10.8686 30.2648 11.5389 30.8891 11.6118 31.6863C11.6388 31.7161 11.685 31.7607 11.76 31.8199C12.0393 32.0399 12.5405 32.3067 13.2994 32.5596C14.8009 33.0602 16.9747 33.3966 19.4477 33.3966C21.9207 33.3966 24.0944 33.0602 25.5959 32.5596C26.3549 32.3067 26.856 32.0399 27.1353 31.8199C27.2103 31.7607 27.2565 31.7161 27.2836 31.6863C27.3564 30.8891 28.0268 30.2648 28.8429 30.2648C29.7077 30.2648 30.4088 30.9659 30.4088 31.8307C30.4088 32.9486 29.7278 33.7642 29.0739 34.2796C28.4023 34.8088 27.5276 35.2169 26.5863 35.5307C24.6874 36.1636 22.1635 36.5283 19.4477 36.5283C16.7318 36.5283 14.208 36.1636 12.3091 35.5307C11.3678 35.2169 10.4931 34.8088 9.82154 34.2796C9.16765 33.7642 8.48657 32.9486 8.48657 31.8307C8.48657 30.9659 9.18764 30.2648 10.0524 30.2648Z" fill="#C8FF7D"/>
</svg>
        </div>`,
        className: 'icon-container', // Remove default Leaflet styles 
        iconSize: [100, 40], // Width and height of the label area
    });
};


export default function Map()
{
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

    return (
        <>
            <MapContainer
                center={[23.6943, 90.3444]}
                zoom={7}
                maxBounds={[[20.5906, 88.0086], [26.6345, 92.6803]]}
                minZoom={5}
                maxZoom={10}
                style={{ height: '600px', width: '100%', background: '#e5f5e0' }}
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
                {/* Divisions GeoJSON */}
                <GeoJSON
                    data={districtsGeoJSON}
                    style={{
                        color: '#90D434', // Bright green stroke for divisions
                        weight: 0.05,
                        fillOpacity: 0, // No fill, just stroke
                    }}
                />
                {/* User Markers with Custom Labels */}
                {userLocations.map((location, index) => (
                    <Marker
                        key={index}
                        position={[location.lat, location.lon]}
                        icon={createCustomIcon(location.count)} // Custom label
                        zIndexOffset={1000} // Ensure labels are above GeoJSON
                    />
                ))}
            </MapContainer>
        </>
    );
}
