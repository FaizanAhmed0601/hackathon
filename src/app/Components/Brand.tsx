import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { LuSprout } from 'react-icons/lu';
import { MdOutlinePriceChange } from 'react-icons/md';

const Brand = () => {
  return (
    <>
      <section>
        <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
          {/* Heading */}
          <h1 className="text-center text-xl md:text-2xl font-semibold">
            What sets our brand apart
          </h1>

          {/* Features Section */}
          <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
            {/* Feature 1 */}
            <div className="flex flex-col md:w-[25%] p-4 rounded-lg">
              <TbTruckDelivery size={30} className="text-[#2A254B]" />
              <p className="py-4 font-semibold">Next-day delivery</p>
              <p>Place an order before 3pm and receive it the following day, no extra charge.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:w-[25%] p-4 rounded-lg">
              <IoIosCheckmarkCircleOutline size={30} className="text-[#2A254B]" />
              <p className="py-4 font-semibold">Crafted by artisans</p>
              <p>Each product is meticulously handmade by skilled artisans with passion and care.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:w-[25%] p-4 rounded-lg">
              <MdOutlinePriceChange size={30} className="text-[#2A254B]" />
              <p className="py-4 font-semibold">Incredible value</p>
              <p>We offer unbeatable prices without compromising on quality or materials.</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col md:w-[25%] p-4 rounded-lg">
              <LuSprout size={30} className="text-[#2A254B]" />
              <p className="py-4 font-semibold">Eco-friendly packaging</p>
              <p>All our packaging is 100% recycled to minimize environmental impact.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
