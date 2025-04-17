/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { default as ReactSignatureCanvas } from "react-signature-canvas";

const SignatureUploader = ({ signature, setSignature }: any) =>
{
    const sigCanvas = useRef<any>(null);
    // const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    // Clear the canvas
    const clearCanvas = () =>
    {
        if (sigCanvas.current) {
            sigCanvas.current.clear();
            setSignature(null);
        }
    };

    // Safe method to get signature data
    const saveSignature = () =>
    {
        if (!sigCanvas.current) return;

        try {
            // First try to use getTrimmedCanvas
            const trimmedCanvas = sigCanvas.current.getTrimmedCanvas();
            const dataUrl = trimmedCanvas.toDataURL("image/png");
            setSignature(dataUrl);
        } catch (error) {
            console.error("Error with trimmed canvas:", error);

            // Fallback to regular toDataURL if trimmed fails
            try {
                const dataUrl = sigCanvas.current.toDataURL();
                setSignature(dataUrl);
            } catch (fallbackError) {
                console.error("Fallback also failed:", fallbackError);
                setSignature(null);
            }
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="border border-gray-300 rounded-lg">
                <ReactSignatureCanvas
                    ref={sigCanvas}
                    penColor="black"
                    canvasProps={{
                        className: "bg-[#EDF4E3] rounded-lg mx-auto",
                        width: window.innerWidth > 580 ? 580 : (window.innerWidth - 32),
                        height: 200,
                    }}
                    onBegin={() => console.log("Started drawing")}
                    onEnd={saveSignature}
                />
            </div>
            <div className="flex justify-end">
                <button
                    onClick={clearCanvas}
                    className="px-4 py-1.5 bg-gray-200/30 text-white hover:bg-gray-300/30 rounded-md"
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default SignatureUploader;