import { FaShoppingCart, FaTshirt } from "react-icons/fa";

function TopSect({
  setShow,
  size,
}: {
  setShow: (value: boolean) => void;
  size: number;
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 sticky w-full top-0 z-50 bg-white shadow-lg border-b-2">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <FaTshirt className="text-3xl text-brandColor" />
        <p className="font-semibold text-lg md:text-xl text-black">
          Jo's Men Wears
        </p>
      </div>

      {/* Navigation Section */}
      <div className="flex items-center gap-6 mt-3 md:mt-0">
        <p
          onClick={() => setShow(true)}
          className="text-lg md:text-xl font-medium hover:text-brandColor hover:underline cursor-pointer"
        >
          Store
        </p>

        {/* Cart Icon & Counter */}
        <div className="relative cursor-pointer" onClick={() => setShow(false)}>
          <FaShoppingCart className="text-2xl text-brandColor" />
          {size > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {size}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopSect;
