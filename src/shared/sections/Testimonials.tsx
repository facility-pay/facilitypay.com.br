import Icon from "@/components/Icon";
import TestimonialCarousel, {
  TestimonialItem,
} from "@/components/TestimonialCarousel";
import QuotesSVG from "@/assets/illustrations/quotes.svg";
import ReverseQuotesSVG from "@/assets/illustrations/reverse-quotes.svg";

const testimonials: Array<TestimonialItem> = [
  {
    imageUrl:
      "https://gravatar.com/avatar/95b7a51bb2fa2abe710b99a493feada9?s=400&d=robohash&r=x",
    title: "Melhor empresa do mercado atualmente!",
    description:
      "Curabitur consequat sem augue atia consectetur curabitur, duis elit nunce convallis interdum aliquam at webin accumsan ac dictumst faucibus.",
    name: "Roberto G. R.",
    rate: 5,
  },
  {
    imageUrl:
      "https://gravatar.com/avatar/4b633e9e7d56f47baa6ce0f0a25f1e27?s=400&d=robohash&r=x",
    title: "As melhores taxas no Brasil atualmente!",
    description:
      "Curabitur consequat sem augue atia consectetur curabitur, duis elit nunce convallis interdum aliquam at webin accumsan ac dictumst faucibus.",
    name: "Maria G. R.",
    rate: 3,
  },
  {
    imageUrl:
      "https://gravatar.com/avatar/c8d4463f6adc321a43a0bbb5efa222f7?s=400&d=robohash&r=x",
    title: "Melhor taxa e o melhor atendimento sem dúvida!",
    description:
      "Curabitur consequat sem augue atia consectetur curabitur, duis elit nunce convallis interdum aliquam at webin accumsan ac dictumst faucibus.",
    name: "Ricardo G. R.",
    rate: 5,
  },
  {
    imageUrl:
      "https://gravatar.com/avatar/c8d4463f6adc321a43a0bbb5efa222f7?s=400&d=robohash&r=x",
    title: "Melhor taxa e o melhor atendimento sem dúvida!",
    description:
      "Curabitur consequat sem augue atia consectetur curabitur, duis elit nunce convallis interdum aliquam at webin accumsan ac dictumst faucibus.",
    name: "Ricardo G. R.",
    rate: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-white max-w-full px-5 tablet:px-20 desktop:px-20 pb-20">
      <div className="absolute hidden tablet:flex desktop:flex">
        <QuotesSVG />
      </div>
      <div className="absolute hidden tablet:flex desktop:flex tablet:right-20 desktop:right-20">
        <ReverseQuotesSVG />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center self-center gap-7 pt-10">
          <div className="bg-primary-dark flex items-center justify-center rounded-full w-[60px] h-[60px]">
            <Icon iconName="chat" />
          </div>
          <span className="text-3xl text-dark-blue-heading text-center font-bold">
            O que nossos clientes dizem sobre a FacilityPay
          </span>
        </div>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Testimonials;
