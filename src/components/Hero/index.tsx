import { Carousel } from "antd";
import type { FC } from "react";
import HeroItem from "./HeroItem";

const Hero: FC = () => {
  return (
    <div className="h-[450px] w-full bg-[#F5F5F580] mt-[12px]">
      <Carousel autoplay>
        <HeroItem />
        <HeroItem />
        <HeroItem />
        <HeroItem />
      </Carousel>
    </div>
  );
};

export default Hero;
