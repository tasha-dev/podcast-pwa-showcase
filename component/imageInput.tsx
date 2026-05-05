// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { ImageInputProps } from "@/type/component";
import { Camera } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { cn, convertBytesToMB, fileToDataURL } from "@/lib/util";

// Creating and exporting ImageInput component as default
export default function ImageInput({
  className,
  onValueChange,
  value,
}: ImageInputProps) {
  // Defining hooks
  const [image, setImage] = useState<string | undefined>(value);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Defining variables
  const input = inputRef.current;

  // Returning JSX
  return (
    <div
      onClick={() => input?.click()}
      tabIndex={0}
      className={cn(
        "size-40 relative rounded-lg overflow-hidden bg-base-light transition-all duration-500 cursor-pointer z-0 outline-0  ring-0 ring-base/40",
        "hover:scale-110 focus-visible:ring-4 focus:ring-4",
        className,
      )}
    >
      {image && (
        <Image
          className="-z-10 w-full h-full object-cover absolute left-0 top-0 !m-0"
          alt={"Your Profile Image"}
          src={image}
          width={160}
          height={160}
        />
      )}
      <input
        hidden
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={async (e) => {
          const file = e.target.files?.[0];

          if (file) {
            const fileSize = convertBytesToMB(file.size); // MB

            if (fileSize > 5) {
              toast.error(
                "The file is too big to upload. Please make sure the file size is under 5 MB.",
              );
            } else {
              const dataURL = await fileToDataURL(file);

              setImage(dataURL);
              onValueChange?.(dataURL);
            }
          }
        }}
      />
      <div className="size-10 absolute right-3 bottom-3 flex items-center justify-center rounded-full bg-base z-10">
        <Camera className="size-5 text-white" />
      </div>
    </div>
  );
}
