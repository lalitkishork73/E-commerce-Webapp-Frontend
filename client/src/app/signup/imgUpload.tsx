'use client';

import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';

function ImgUpload() {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [yourImage, setYourImage] = useState<any>(null);
  const [croppedImage, setCroppedImage] = useState<any>(null);
  const [rotation, setRotation] = useState(0);

  const onCropComplete = useCallback(
    async (croppedArea: any, croppedAreaPixels: any) => {
      try {
        // Get the cropped image data
        const croppedImageData = await getCroppedImage(
          yourImage,
          croppedAreaPixels
        );
        setCroppedImage(croppedImageData);
        console.log(croppedImage);
      } catch (error) {
        console.error('Error cropping image:', error);
      }
    },
    [yourImage]
  );

  const handleImageChange = (e: any) => {
    if (e.target.files.length > 0) {
      const selectedImage = URL.createObjectURL(e.target.files[0]);
      setYourImage(selectedImage);
    }
  };

  const handleUploadCroppedImage = () => {
    if (croppedImage) {
      // Create a FormData object to send the image to the server
      const formData = new FormData();
      formData.append('croppedImage', croppedImage);

      // Send the image data to the server
      fetch(
        'https://freeimage.host/api/1/upload/?key=6d207e02198a847aa98d0a2a901485a5&source=http://somewebsite/someimage.jpg&format=json',
        {
          method: 'POST',
          body: formData
        }
      )
        .then((response) => {
          if (response.ok) {
            console.log('Cropped image uploaded successfully.');
            // You can handle success here
          } else {
            console.error('Failed to upload cropped image.');
            // You can handle errors here
          }
        })
        .catch((error) => {
          console.error('Error uploading cropped image:', error);
          // You can handle errors here
        });
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center font-semibold">Update Image</h1>
      </div>
      <div className=" h-16 w-[250px] flex justify-center items-center ">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border file:bg-black file:text-white file:font-semibold border-gray-300 rounded-md focus:outline-none file:rounded-md flie:shadow-none "
        />
      </div>
      <div className="w-full h-[300px]">
        {yourImage && (
          <div className="relative w-[290px] h-[290px] bg-white">
            <Cropper
              image={yourImage}
              crop={crop}
              zoom={zoom}
              rotation={rotation}
              aspect={1}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
        )}
      </div>
      <div className="text-sm ">
        <div className="w-[100%]">
          <label htmlFor="">Zoom</label>
          <input
            type="range"
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e) => {
              setZoom(Number(e.target.value));
            }}
            className="w-[70%] "
          />
        </div>
        <div>
          <label htmlFor="">Rotation</label>
          <input
            type="range"
            value={rotation}
            min={0}
            max={360}
            step={1}
            aria-labelledby="Rotation"
            onChange={(e) => {
              setRotation(Number(e.target.value));
            }}
            className="w-[60%] "
          />
        </div>
      </div>
      <div className="flex justify-center items-center border-2 w-[290px] h-[200px]">
        {croppedImage ? (
          <img
            src={URL.createObjectURL(croppedImage)}
            alt="cropped image"
            className="w-[200px] h-[200px] rounded-full border-2 border-black/10 text-center"
          />
        ) : (
          <div className="w-[200px] h-[200px] border-2 border-black/10 text-center flex items-center justify-center">
            Cropped Image Preview
          </div>
        )}
      </div>
      <button
        className="bg-black  px-5 rounded-lg"
        onClick={handleUploadCroppedImage}
      >
        Next
      </button>
    </>
  );
}

export default ImgUpload;

// Function to crop the image
async function getCroppedImage(imageSrc: any, pixelCrop: any) {
  const image = new Image();
  image.src = imageSrc;

  const canvas = document.createElement('canvas');
  const context: any = canvas.getContext('2d');

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  context.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Failed to crop image'));
        return;
      }
      resolve(blob);
    }, 'image/jpeg');
  });
}
