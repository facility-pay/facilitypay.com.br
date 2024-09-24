import Image from "next/image";
import Icon from "../Icon";
import { useState } from "react";

const groupItemsByThree = (arr: Array<unknown>) => {
  return Array(Math.ceil(arr.length / 3))
    .fill({})
    .map((_, index) => arr.slice(index * 3, index * 3 + 3)).length;
};

export type TestimonialItem = {
  imageUrl: string;
  title: string;
  description: string;
  name: string;
  rate: number;
};

type TestimonialProps = TestimonialItem;

const Testimonial = ({
  imageUrl,
  title,
  description,
  name,
}: TestimonialProps) => {
  return (
    <li className="flex flex-col gap-6 tablet:w-[300px] desktop:w-[300px] rounded-2xl py-10 px-6 bg-white drop-shadow-[2px_8px_50px_rgba(0,0,0,0.10)]">
      <Image
        alt="testimonial-avatar"
        src={imageUrl}
        width={80}
        height={80}
        className="w-[80px] h-[80px] rounded-full bg-grey-light"
      />
      <span className="font-semibold text-base text-black">{title}</span>
      <span className="text-sm text-description">{description}</span>
      <div className="flex flex-row justify-between">
        <span className="text-base text-grey-light-text font-semibold">
          {name}
        </span>
        <div className="flex flex-row items-center">
          {[...new Array(5)].map((_, index) => (
            <Icon key={index} iconName="rate-star" />
          ))}
        </div>
      </div>
    </li>
  );
};

type TestimonialCarouselProps = {
  testimonials: Array<TestimonialItem>;
};

const TestimonialCarousel = ({
  testimonials = [],
}: TestimonialCarouselProps) => {
  const [selectedIndex] = useState<number>(0);

  return (
    <div>
      <div className="relative flex flex-row items-center justify-center gap-10 pt-8 tablet:pt-[60px] desktop:pt-[60px]">
        <button className="absolute left-[-10px] z-10 flex rounded-xl items-center justify-center w-[60px] h-[60px] bg-[#ADADAD] opacity-50">
          <Icon iconName="arrow-left" color="white" />
        </button>
        <ul className="flex flex-row items-center gap-10 px-8">
          {testimonials
            .map((testimonial) => (
              <Testimonial key={testimonial.name} {...testimonial} />
            ))
            .filter((_, index) => index < 1)}
        </ul>
        <button className="absolute right-[-10px] z-10 flex rounded-xl items-center justify-center w-[60px] h-[60px] bg-secondary">
          <Icon iconName="arrow-right" color="black" />
        </button>
      </div>
      <div className="flex flex-row justify-center items-center gap-5 px-8 pt-6 tablet:pt-16 desktop:pt-16">
        {[...new Array(groupItemsByThree(testimonials))].map((_, index) => (
          <button
            key={index}
            className={"flex w-full tablet:w-[110px] desktop:w-[110px] h-[6px] rounded-lg ".concat(
              index === selectedIndex
                ? "bg-secondary"
                : "bg-[#D9D9D9] opacity-60"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
