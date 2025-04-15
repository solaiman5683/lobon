"use client";

import { Button } from "@/components/ui/button";
import
{
    FileUpload,
    FileUploadDropzone,
    FileUploadItem,
    FileUploadItemDelete,
    FileUploadItemMetadata,
    FileUploadItemPreview,
    FileUploadList,
    FileUploadTrigger,
} from "@/components/ui/file-upload";
import { Upload, X } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

export function NidUploader({ files, setFiles }: { files: File[]; setFiles: (files: File[]) => void })
{

    const onFileValidate = React.useCallback(
        (file: File): string | null =>
        {
            // Validate file type (only images)
            if (!file.type.startsWith("image/") && file.type !== "application/pdf") {
                return "Only image files (JPG, PNG) and PDF files are allowed";
            }

            // Validate file size (max 2MB)
            const MAX_SIZE = 2 * 1024 * 1024; // 2MB
            if (file.size > MAX_SIZE) {
                return `File size must be less than ${MAX_SIZE / (1024 * 1024)}MB`;
            }

            return null;
        },
        [],
    );

    const onFileReject = React.useCallback((file: File, message: string) =>
    {
        toast(message, {
            description: `"${file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name}" has been rejected`,
        });
    }, []);

    return (
        <FileUpload
            value={files}
            onValueChange={setFiles}
            onFileValidate={onFileValidate}
            onFileReject={onFileReject}
            accept="image/*, application/pdf"
            maxFiles={1}
            className="w-full bg-[#edf4e3]/10 rounded-[10px] outline outline-offset-[-1px] outline-[#86cd58] focus:outline-4 text-lg group"
        >
            <FileUploadDropzone>
                <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center justify-center rounded-full border border-gray-300 group-hover:border-white p-2.5">
                        <Upload className="size-6 text-gray-300 group-hover:text-white" />
                    </div>
                    <p className="font-medium text-sm">
                        আপনার পরিচয় নিশ্চিত করতে অনুগ্রহ করে আপনার জাতীয় পরিচয়পত্র (NID) আপলোড করুন।
                    </p>
                    <p className="text-gray-200 text-xs">
                        সমর্থিত ফরম্যাট: JPG, PNG, PDF (সর্বোচ্চ ফাইল সাইজ: ২MB)
                    </p>
                </div>
                <FileUploadTrigger asChild>
                    <Button className="mt-2 w-fit bg-[#c7ff7d] rounded-[10px] text-[#1d3200]">
                        <span className="text-sm font-medium">ফাইল নির্বাচন করুন</span>
                    </Button>
                </FileUploadTrigger>
            </FileUploadDropzone>
            <FileUploadList>
                {files.map((file) => (
                    <FileUploadItem key={file.name} value={file}>
                        <FileUploadItemPreview />
                        <FileUploadItemMetadata />
                        <FileUploadItemDelete asChild>
                            <Button variant="ghost" size="icon" className="size-7">
                                <X />
                            </Button>
                        </FileUploadItemDelete>
                    </FileUploadItem>
                ))}
            </FileUploadList>
        </FileUpload>
    );
}