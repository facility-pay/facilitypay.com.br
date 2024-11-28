import Icon from "../Icon";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import { usePrevNextButtons } from "@/hooks/usePrevNextButtons";
import { useDotButton } from "@/hooks/useDotButton";

export type TestimonialItem = {
  imageUrl: string;
  title: string;
  description: string;
  name: string;
  rate: number;
};

type TestimonialProps = TestimonialItem;

const Testimonial = ({ description }: TestimonialProps) => {
  return (
    <div className="embla__slide drop-shadow-[2px_8px_20px_rgba(0,0,0,0.03)]">
      <li className="flex flex-col gap-6 h-[360px] tablet:h-[440px] desktop:h-[440px] rounded-2xl py-10 px-6 bg-white">
        <div className="flex flex-row items-center gap-2 desktop:gap-4">
          <div className="w-[48px] h-[48px] desktop:w-[60px] desktop:h-[60px] flex bg-grey-light rounded-full items-center justify-center">
            <Icon iconName="instagram-radial" />
          </div>
          <span className="font-semibold text-sm desktop:text-base text-black">
            @bruno_frigeri
          </span>
        </div>
        <span className="text-sm desktop:text-base text-description">
          {description}
        </span>
      </li>
    </div>
  );
};

type TestimonialCarouselProps = {
  testimonials: Array<TestimonialItem>;
};

const TestimonialCarousel = ({
  testimonials = [],
}: TestimonialCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: "auto" });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative flex flex-row items-center justify-center gap-10 pt-8 tablet:pt-[60px] desktop:pt-[60px]">
      <button
        className={[
          "absolute left-[-24px] z-10 flex rounded-xl items-center justify-center w-[60px] h-[60px] bg-secondary",
          prevBtnDisabled ? "!bg-[#ADADAD] opacity-50" : "",
        ].join(" ")}
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      >
        <Icon
          iconName="arrow-left"
          color={prevBtnDisabled ? "white" : "black"}
        />
      </button>

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-5 pt-6 tablet:pt-16 desktop:pt-16">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={"flex min-w-[6px] tablet:w-[110px] desktop:w-[110px] h-[6px] rounded-lg ".concat(
                index === selectedIndex ? "bg-secondary" : "bg-[#D9D9D9]"
              )}
              onClick={() => onDotButtonClick(index)}
            />
          ))}
        </div>
      </div>
      <button
        className={[
          "absolute right-[-24px] z-10 flex rounded-xl items-center justify-center w-[60px] h-[60px] bg-secondary",
          nextBtnDisabled ? "!bg-[#ADADAD] opacity-50" : "",
        ].join(" ")}
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      >
        <Icon
          iconName="arrow-right"
          color={nextBtnDisabled ? "white" : "black"}
        />
      </button>
    </div>
  );
};

export default TestimonialCarousel;
