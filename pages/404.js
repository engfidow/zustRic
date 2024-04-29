import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import "../app/globals.css";
const Notfound = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center">
        <div className="mx-auto h-[300px] w-[300px] relative mb-6">
          <Image
            src="/notfound.png" // The path to your image file in the public directory
            alt="404 Not Found"
            layout="fill" // This makes the image fill the container
            objectFit="contain" // This keeps the image's aspect ratio
          />
        </div>
        <h1 className="text-6xl font-bold mb-4">OOPS... 404</h1>
        <p className="text-xl mb-8">Something went wrong. Sorry, we can't find the page you're looking for.</p>
        <button
          className="bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded hover:bg-blue-700 transition-colors"
          onClick={() => router.push('/')} // This redirects the user to the homepage
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Notfound;
