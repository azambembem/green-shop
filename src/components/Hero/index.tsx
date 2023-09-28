import { Carousel } from "antd";
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="h-[450px] w-full bg-[#F5F5F580] mt-[12px]">
      <Carousel autoplay></Carousel>
    </div>
  );
};

export default Hero;
