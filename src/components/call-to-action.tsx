import React from "react";

interface CallToActionProps {
  className?: string;
}

function CallToAction({ className }: CallToActionProps) {
  return (
    <div className={className}>
      <div className="w-full md:h-auto">
        <div className="relative md:static">
          <div>
            <div className="flex flex-col w-full">
              <div>
                <div className="flex items-center justify-between md:flex-col md:items-start">
                  <div className="md:mb-3">
                    <div className="inline-block text-2xl font-semibold">
                      ৳3850
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2"></div>
              </div>
              <button className=" bg-green whitespace-nowrap w-full rounded-md px-8 py-1 md:py-2 text-center md:w-full flex justify-center items-center flex-wrap border-b-4 text-white border-[rgba(0,0,0,.3)] hover:bg-[#15803d] hover:border-[#15803d] transition-all duration-500 ease-in-out">
                Enroll
              </button>
            </div>
          </div>
          <div className="absolute md:static top-[-45px] left-0">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
