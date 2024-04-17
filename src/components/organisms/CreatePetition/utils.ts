import { ChangeEvent } from "react";

export const handleUploadImages = (
  event: ChangeEvent<HTMLInputElement>,
  images: string[]
) => {
  if (event.target.files) {
    const newFiles = Array.from(event.target.files).map((file) =>
      URL.createObjectURL(file)
    );

    const updatedImages = [...images, ...newFiles];
    while (updatedImages.length > 5) {
      const removedUrl = updatedImages.shift();
      if (removedUrl) {
        URL.revokeObjectURL(removedUrl);
      }
    }
    return updatedImages;
  } else {
    return [];
  }
};
