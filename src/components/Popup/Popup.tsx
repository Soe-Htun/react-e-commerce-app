import React from "react";
import { IoCloseOutline as CloseIcon } from "react-icons/io5";

const IoCloseOutline = CloseIcon as React.FC<React.SVGProps<SVGSVGElement>>;

type PopupProps = {
  orderPopup: boolean;
  setOrderPopup: React.Dispatch<React.SetStateAction<boolean>>;
};
const Popup: React.FC<PopupProps> = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              {/* header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1>Order Now</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer "
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* form section */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Name"
                  className=" input-class mb-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className=" input-class mb-4"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className=" input-class mb-4"
                />
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
