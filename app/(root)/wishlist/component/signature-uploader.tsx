/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { default as ReactSignatureCanvas, SignatureCanvas } from "react-signature-canvas";

const SignatureUploader = ({ signature, setSignature }: any) =>
{
    const sigCanvas = useRef<ReactSignatureCanvas>(null);


    // Clear the canvas
    const clearCanvas = () =>
    {
        sigCanvas.current?.clear();
        setSignature(null);
    };

    return (
        <div>
            <SignatureCanvas
                ref={sigCanvas}
                penColor="black"
                canvasProps={{
                    className: "bg-[#EDF4E3] rounded-lg max-w-full h-auto",
                    width: 580,
                    height: 200,
                }}
                onBegin={() => console.log("Started drawing")}
                onEnd={() =>
                {
                    console.log("Finished drawing");
                    const dataUrl = sigCanvas.current?.getTrimmedCanvas().toDataURL("image/png") || null;
                    setSignature(dataUrl);
                }}
            />
            <div>
                <button onClick={clearCanvas}>Clear</button>
            </div>
        </div>
    );
};

export default SignatureUploader;