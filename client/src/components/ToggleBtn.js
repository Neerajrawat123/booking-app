import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

function ToggleBtn() {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle((toggle) => !isToggle);
  };

  const getStyles = () => {
    let styles =
      "z-10 border-none rounded-full w-8 h-full bg-white absolute transition  delay-1000 duration-1000  ease-in-out text-black ";
    styles += isToggle ? "right-[-1px]" : "left-0";
    return styles;
  };
  return (
    <div className="flex items-center text-gray-500 ml-10 shadow-lg">
      <button
        className="border px-3 rounded-lg flex items-center gap-2 h-full"
        onClick={handleToggle}
      >
        <span className="py-3">Display total before tax</span>
        <div className="w-11 rounded-3xl h-7 relative overflow-hidden bg-slate-400">
          <div className={isToggle ? "bg-slate-900 h-full" : "bg-gray-600"}>
            <div className={getStyles()}>
              {isToggle && <TiTick size={25} />}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default ToggleBtn;
