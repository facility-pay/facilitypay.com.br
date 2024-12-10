import Icon from "@/components/Icon";
import TestimonialCarousel, {
  TestimonialItem,
} from "@/components/TestimonialCarousel";
import QuotesSVG from "@/assets/illustrations/testimonials/quotes.svg";
import ReverseQuotesSVG from "@/assets/illustrations/testimonials/reverse-quotes.svg";
import MobileQuotesSVG from "@/assets/illustrations/testimonials/mobile-quotes.svg";

const testimonials: Array<TestimonialItem> = [
  {
    imageUrl:
      "https://gravatar.com/avatar/95b7a51bb2fa2abe710b99a493feada9?s=400&d=robohash&r=x",
    title: "Melhor empresa do mercado atualmente!",
    description:
      "Tive uma dúvida em relação a uma venda e fui prontamente atendido e tive a dúvida esclarecida. Obrigado pelo suporte, como sempre um ótimo atendimento!",
    name: "@overpowerinformatica",
    rate: 5,
  },
  {
    imageUrl:
      "https://gravatar.com/avatar/4b633e9e7d56f47baa6ce0f0a25f1e27?s=400&d=robohash&r=x",
    title: "As melhores taxas no Brasil atualmente!",
    description:
      "Obrigado FacilitPay! Ótimo atendimento, muito paciente a atendente, pena que esqueci o nome dela para mencioná-la aqui, mas o meu muito obrigado é geral para todos que já me atenderam! ❤️",
    name: "@marlenemiguelda",
    rate: 3,
  },
  {
    imageUrl:
      "https://gravatar.com/avatar/c8d4463f6adc321a43a0bbb5efa222f7?s=400&d=robohash&r=x",
    title: "Melhor taxa e o melhor atendimento sem dúvida!",
    description:
      "Acabei de ser atendido por Eduardo do Suporte atendimento, bom, mas ano passado tive um problema com eles na parte do pós-venda devido a demora de responder via Whatsapp, porém isso foi resolvido já, e quando precisei foi rápido o suporte e pôs-vendas! Obrigado!",
    name: "@jgsfotografias",
    rate: 5,
  },
];

type TestimonialsProps = {
  hasBackground?: boolean;
};

const Testimonials = ({ hasBackground = true }: TestimonialsProps) => {
  return (
    <section
      className={[
        "relative max-w-full py-4 px-8 tablet:px-20 mx-8 tablet:mx-[60px] my-[48px] tablet:my-[100px] rounded-[32px]",
        hasBackground ? "desktop:bg-simulator desktop:pb-[100px]" : "",
      ].join(" ")}
    >
      <div className="absolute top-[3rem] hidden desktop:flex">
        <QuotesSVG />
      </div>
      <div className="absolute top-[3rem] hidden desktop:flex tablet:right-20 desktop:right-20">
        <ReverseQuotesSVG />
      </div>
      <div className="absolute top-0 left-0 flex tablet:flex desktop:hidden">
        <MobileQuotesSVG />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center self-center gap-7 pt-10">
          <div className="bg-primary-dark flex items-center justify-center rounded-full w-[56px] h-[56px] tablet:w-[80px] tablet:h-[80px]">
            <Icon iconName="chat" />
          </div>
          <span className="text-2xl desktop:text-4xl text-dark-blue-heading text-center font-bold">
            O que nossos clientes dizem sobre a FacilityPay
          </span>
        </div>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Testimonials;
