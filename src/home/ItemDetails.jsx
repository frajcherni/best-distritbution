import React, { useEffect } from "react";
import { MdStar } from "react-icons/md";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { useLocation } from "react-router-dom";

export default function ItemDetails() {
  const location = useLocation();
  const { item } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <div className="p-3 max-w-7xl m-auto">
        <div className="mt-6 sm:mt-10">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
              {/* Product Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full"
                />
              </div>
              {/* Product Details */}
              <div className="flex flex-col justify-between">
                <div>
                  {/* Product Title */}
                  <h1 className="text-3xl text-green-700 font-semibold sm:text-4xl">
                    {item.title}
                  </h1>
                  {/* Product Description */}
                  <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4">
                    {item.description}
                  </p>
                  {/* Star Ratings */}
                  <span className="my-3 text-xl text-yellow-600 flex items-center gap-1 sm:my-4">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <MdStar key={index} />
                    ))}
                  </span>
                  {/* Product Price */}
                  <span className="text-xl text-green-700 font-semibold sm:text-2xl">
                    $20
                  </span>
                </div>
                {/* Quantity Input and Order Button */}
                <div className=" ">
                  <div className="text-left flex flex-col gap-2 w-full">
                    {/* Quantity Label */}
                    <label className="font-semibold">Quantity</label>
                    {/* Quantity Input */}
                    <input
                      className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-green-700"
                      type="number"
                      defaultValue="1"
                      required
                    />
                  </div>
                  {/* Order Button */}
                  <div className="w-full text-left my-4">
                    <button
                      className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-green-700 text-white text-md font-bold border border-green-700 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-green-700 lg:m-0 md:px-6"
                      title="Confirm Order"
                    >
                      <span>Confirmer</span>
                      <HiOutlineArrowCircleRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
