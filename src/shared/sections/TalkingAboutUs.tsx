import Icon from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";

type TalkingAboutUsItem = {
  type: "youtube";
  id: string;
  title: string;
};

const AboutUsItem = ({ id, title }: TalkingAboutUsItem) => {
  const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className="rounded-2xl p-6 items-center w-full tablet:w-[373px] desktop:w-[373px] flex flex-col gap-6 tablet:gap-10 desktop:gap-10 bg-white drop-shadow-[2px_8px_50px_rgba(0,0,0,0.10)]">
      <Image
        alt="thumbnail"
        className="rounded-2xl"
        width={373}
        height={300}
        src={thumbnail}
      />
      <Icon iconName="youtube" />
      <span className="text-base font-extrabold text-gray-dark">{title}</span>
    </div>
  );
};

const talkingAboutUsItems: Array<TalkingAboutUsItem> = [
  {
    type: "youtube",
    id: "lxrAjEQb5RQ",
    title:
      "MÁQUINA de CARTÃO FACILITYPAY é boa? Testei TODAS na prática em 2024! [ANÁLISE COMPLETO]",
  },
  {
    type: "youtube",
    id: "4DM2nkkWgvQ",
    title: "Qual a melhor mãquina FacilityPay em 2024 - É confiável?",
  },
  {
    type: "youtube",
    id: "JvehZKI-9RM",
    title:
      "Maquininha FacilityPay tem menor taxa em 2024? FacilityPay é boa? Saiba tudo aqui",
  },
];

const TalkingAboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-grey-light to-[#D5DFE7] max-w-full px-8 tablet:px-20 desktop:px-20 pb-20 mx-[24px] tablet:mx-[60px] nmy tablet:my-[48px] rounded-[32px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center self-center gap-7 pt-10 pb-6">
          <div className="bg-primary-dark flex items-center justify-center rounded-full w-[56px] h-[56px] tablet:w-[80px] tablet:h-[80px]">
            <Icon iconName="megaphone" />
          </div>
          <span className="text-xl tablet:text-3xl desktop:text-3xl text-dark-blue-heading text-center font-bold">
            O que saiu na mídia?
          </span>
        </div>

        <div className="flex flex-row justify-center items-center justify-items-center grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-10">
          {talkingAboutUsItems.map((item) => (
            <AboutUsItem key={item.id} {...item} />
          ))}
        </div>

        <Link
          className="flex flex-row items-center gap-3 justify-center underline text-base text-black font-semibold pt-14"
          href="/"
        >
          Ver mais <Icon iconName="chevron-right" />
        </Link>
      </div>
    </section>
  );
};

export default TalkingAboutUs;
