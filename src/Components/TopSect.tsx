import { FaShoppingCart } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";

function TopSect({
  setShow,
  size,
}: {
  setShow: (value: boolean) => void;
  size: number;
}) {
  return (
    <>
      <div className="flex justify-between items-center px-8 pt-2 pb-4 sticky w-full top-0 z-50 bg-white shadow-lg border-b-[2px]">
        <div className="flex justify-center items-center relative">
          <div className="flex gap-3">
            <div className="text-3xl font-bold">
              <FaTshirt />
            </div>
            <div>
              <p className="font-semibold text-base text-black">
                Jo's Men Wears
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap text-black">
          <p
            onClick={() => setShow(true)}
            className="text-xl mt-5 mr-4 hover:text-brandColor hover:underline cursor-pointer"
          >
            Store
          </p>
          <span
            className="text-brandColor text-xl cursor-pointer"
            onClick={() => setShow(false)}
          >
            <FaShoppingCart className="text-2xl mt-6" />
          </span>
          <p className="mt-4 ml-1 text-sm">{size}</p>
        </div>
      </div>
    </>
  );
}

export default TopSect;
