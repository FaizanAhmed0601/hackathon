import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <>
      <section>
        <div className="px-8 py-12">
          <div className="flex flex-col md:flex-row">
            {/* Box for the left content */}
            <div className="w-full md:w-[60%] h-[600px] border border-black bg-[#2A254B] text-white px-4 md:px-12 py-6 md:py-12 flex flex-col justify-between">
              <div>
                <h1 className="text-xl md:text-3xl md:text-left">
                  A furniture brand for the future, featuring <br /> timeless designs
                </h1>
                <div className="flex justify-center md:justify-start">
                  <button className="w-[140px] h-[56px] bg-transparent text-white border border-gray-600 font-bold mt-12">
                    Explore Collection
                  </button>
                </div>
              </div>

              <div className="my-4 md:my-0">
                <p className="text-sm md:text-base md:text-left">
                  Avion brings a new era of eco-friendly luxury furniture with French design. <br />
                  Sleek, vibrant colors, and modern web technologies make displaying beauty easy.
                </p>
              </div>
            </div>

            {/* Box for the image */}
            <div className="w-full md:w-[40%] h-[600px] bg-white flex justify-center items-center">
              <Image 
                src="/images/chair.png" 
                width={600}    // Adjusted the width to match the reduced height
                height={600}   // Adjusted the height to match the reduced height
                alt="right" 
                objectFit="contain" // Ensures the image scales correctly within the box
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
