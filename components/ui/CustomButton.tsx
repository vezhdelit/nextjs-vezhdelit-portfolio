"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  text,
  className,
  textStyles,
  btnType,
  rightIcon,
  handleClick,
}: CustomButtonProps) => {
  return (
    <>
      <button
        disabled={false}
        type={btnType || "button"}
        className={` flex flex-row relative justify-center items-center${className} `}
        onClick={handleClick}
      >
        <span className={`flex-1  ${textStyles}`}> {text}</span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image
              src={rightIcon}
              alt="right icon"
              fill
              className="object-contain"
            />
          </div>
        )}
      </button>
    </>
  );
};

export default CustomButton;
