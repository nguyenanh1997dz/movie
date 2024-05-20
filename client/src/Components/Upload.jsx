import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import { uploadService } from "../Redux/API/uploadImage";
import BarLoader from "react-spinners/BarLoader";
import { IoCloudUploadSharp } from "react-icons/io5";
const Upload = ({ setUrlImg }) => {
  const [loading, setLoading] = useState(false);
  const onDrop = useCallback(
    async (acceptedFiles) => {
      const file = acceptedFiles[0];
      const acceptFileTypes = [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/webp",
      ];

      if (!acceptFileTypes.includes(file?.type)) {
        toast.error("Only .jpg, .jpeg, .png, and .webp files are accepted.");
        return;
      }

      setLoading(true);
      const formData = new FormData();
      formData.append("file", acceptedFiles[0]);
      try {
        const data = await uploadService(formData);
        setUrlImg(data);
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      } finally {
        toast.success("Image uploaded successfully");
        setLoading(false);
      }
    },
    [setUrlImg]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    onDrop: onDrop,
    disabled: loading,
  });

  return (
    <div className="w-full text-center flex-colo gap-6">
      <div
        className="px-6 w-full py-8 border-2 border-border border-dashed bg-main rounded-md cursor-pointer"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {loading ? (
          <>
           <span className="mx-auto flex-colo text-subMain text-3xl">
              <IoCloudUploadSharp />
            </span>
            <p className="text-sm mt-2">Uploading...</p>
            <BarLoader
              className="mt-2"
              width="100%"
              color="#0000FF"
            ></BarLoader>
          </>
        ) : (
          <>
            <span className="mx-auto flex-colo text-subMain text-3xl">
              <IoCloudUploadSharp />
            </span>
            <p className="text-sm mt-2">
              {isDragActive ? "Drop the image here" : "Drag your image here"}
            </p>
            <em className="text-xs text-border">
              (only .jpg and .png files will be accepted)
            </em>
          </>
        )}
      </div>
    </div>
  );
};

export default Upload;
