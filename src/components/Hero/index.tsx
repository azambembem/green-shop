import { Carousel } from "antd";
import type { FC } from "react";
import HeroItem from "./HeroItem";
import { hero_mock } from "../../utils";

const Hero: FC = () => {
  return (
    <div className="h-[450px] w-full bg-[#F5F5F580] mt-[12px]">
      <Carousel autoplay>
        {hero_mock.map((value) => {
          return <HeroItem key={value.id} {...value} />;
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
