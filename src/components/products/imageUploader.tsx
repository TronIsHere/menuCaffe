import { useState, useRef, ChangeEvent } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

interface ImageUploaderProps {
  onImageSelect?: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect }) => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const selectedFile = files[0];
      setImage(selectedFile);

      // Create a preview URL
      const previewUrl = URL.createObjectURL(selectedFile);
      setPreview(previewUrl);

      // Call the callback if provided
      if (onImageSelect) {
        onImageSelect(selectedFile);
      }
    }
  };

  return (
    <div className="flex  justify-center w-full">
      <div
        className="border cursor-pointer hover:opacity-50 text-xs border-dashed border-stone-500 rounded-sm w-full h-[250px] flex items-center justify-center flex-col relative"
        onClick={handleClick}
      >
        {preview ? (
          <>
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="bg-black/50 absolute inset-0 flex items-center justify-center flex-col">
              <AiOutlineCloudUpload size={40} className="text-white" />
              <span className="text-white">Change image</span>
            </div>
          </>
        ) : (
          <>
            <AiOutlineCloudUpload size={40} />
            <span>انتخاب عکس</span>
          </>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ImageUploader;
