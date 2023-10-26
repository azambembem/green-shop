import type { FC } from "react";
import type { HeroItemType } from "../../../@types";

const HeroItem: FC<HeroItemType> = ({
  big_image_url,
  small_image_url,
  subTitle,
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="flex justify-between mb-[]">
      <div className="ml-[40px] flex-[2]">
        <h3 className="text-[#3D3D3D] font-medium text-[15px] mt-[68px]">
          {subTitle}
        </h3>
        <h1 className="text-[#3D3D3D font-black text-8xl mt-[7px] leading-[70px]">
          {title} <span className="text-[#46A358]">PLANET</span>
        </h1>
        <p className="font-normal text-[#727272] mt-[10px] mb-[44px] w-[60%]">
          {description}
        </p>
        <button className="text-white w-[100px] h-[35px] bg-[#46A358] flex justify-center items-center rounded-md gap-2 max-md:hidden">
          {buttonText}
        </button>
      </div>
      <div className="flex-[1] flex justify-center items-center relative">
        <img
          src={small_image_url}
          alt="small-plant"
          className="absolute bottom-1 left-[55px]"
        />
        <img className="h-[450px]" src={big_image_url} alt="big-plant" />
      </div>
    </div>
  );
};

export default HeroItem;
