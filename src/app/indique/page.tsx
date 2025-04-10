"use client";

import Button from "@/components/Button";
import Icon, { IconName } from "@/components/Icon";
import ContainerWithSimpleQuotes from "@/containers/ContainerWithSimpleQuotes";
import Layout from "@/containers/Layout";
import Image from "next/image";
import { useMemo } from "react";
import ModelInticate from "@/assets/images/indicate.png";
import Link from "next/link";
import TopRightArrow from "@/assets/illustrations/indicate/top-right-arrow.svg";
import BottomArrow from "@/assets/illustrations/indicate/bottom-arrow.svg";

type MachineAdvantageItem = {
  key: string;
  label: string;
  description: string;
  icon: IconName;
};

const machinesAdvantages: Array<MachineAdvantageItem> = [
  {
    key: "service",
    label: "Comece sem experiência",
    description: "Qualquer um pode participar e lucrar muito!",
    icon: "heart",
  },
  {
    key: "guarantee",
    label: "Comece sem investimento",
    description: "Inicie seu novo negócio sem precisar investir nada!",
    icon: "outlined-clock",
  },
  {
    key: "no-rent",
    label: "CPF ou CNPJ",
    description: "Sem burocracia! Aceitamos CPF e CNPJ.",
    icon: "machine",
  },
  {
    key: "complain",
    label: "Indique que cuidamos do resto",
    description:
      "Sem trabalho operacional: você foca nas vendas, e nós cuidamos do resto!",
    icon: "star",
  },
  {
    key: "taxes",
    label: "Materiais de divulgação",
    description:
      "Receba todas as artes prontas para você divulgar com facilidade!",
    icon: "percentage",
  },
  {
    key: "taxes",
    label: "Acompanhe suas indicações em tempo real",
    description:
      "Transparência total! Acompanhe suas vendas no seu portal exclusivo.",
    icon: "percentage",
  },
];

type HowToParticipateItem = {
  icon: IconName;
  label: string;
};

const howToParticipateItems: Array<HowToParticipateItem> = [
  {
    icon: "facility-letter",
    label: "Preencha o formulário",
  },
  {
    icon: "facility-letter",
    label: "Aguarde nossa equipe entrar em contato",
  },
  {
    icon: "facility-letter",
    label: "Venda através do seu link individual",
  },
];

type Rule = {
  title: string;
  description: string;
};

const rules: Array<Rule> = [
  {
    title: "Redes sociais",
    description:
      "É proibida a criação de perfis em redes sociais que utilizem o nome ou se façam passar pela FacilityPay.",
  },
  {
    title: "Vestimenta",
    description:
      "É proibida a produção de camisetas, bonés ou qualquer outro item utilizando a marca FacilityPay sem autorização prévia.",
  },
  {
    title: "Divulgação",
    description:
      "A divulgação deve ser realizada exclusivamente com as artes fornecidas pela FacilityPay. Qualquer arte de produção própria que contenha a marca FacilityPay não é permitida.",
  },
  {
    title: "Relação de afiliado",
    description:
      "Deixe sempre claro que sua relação com a FacilityPay é uma parceria. É proibido se passar por funcionário da empresa em qualquer circunstância.",
  },
  {
    title: "Suporte",
    description:
      "É proibido se passar pelo suporte oficial da FacilityPay em qualquer situação.",
  },
];

const Indique = () => {
  const section1ClassName = useMemo(() => {
    const defaultClass =
      "min-h-[60vh] min-w-full tablet:min-h-[100vh] bg-no-repeat bg-[url('../assets/shapes/section1-shape.svg')] bg-right-top";
    const classWidth = `bg-[length:100vw] tablet:bg-[length:100vh]`;

    return [defaultClass, classWidth].join(" ");
  }, []);

  return (
    <Layout>
      <section className="bg-section1 pb-[9rem] tablet:pb-0">
        <div className="flex flex-col tablet:hidden max-w-[70vw] desktop:max-w-[80vw] gap-4 px-5 py-10">
          <p className="text-[2rem] desktop:text-[2.75rem] leading-[2.75rem] font-bold text-dark-blue-heading">
            Ganhe por máquina indicada
          </p>
          <p className="text-sm desktop:text-lg text-description">
            Garanta sua renda extra sem investimento inicial e conquiste sua
            independência financeira
          </p>
        </div>
        <div className={section1ClassName}>
          <div className="flex tablet:items-center z-10 min-h-inherit bg-no-repeat bg-[url('../assets/shapes/indicate/section1-mobile.svg')] desktop:bg-[url('../assets/shapes/indicate/section1.svg')] bg-[length:110%] tablet:bg-[length:45%] bg-[top_5rem_right_0rem] tablet:bg-[top_8rem_right_15rem]">
            <div className="relative flex max-w-[50vw] tablet:pb-[10vh] desktop:pb-[10vh] tablet:pl-[15vw] desktop:pl-[15vw] tablet:pr-[10vw] desktop:pr-[10vw] flex-col items-start gap-5 justify-start bg-no-repeat bg-[url('../assets/illustrations/dots.svg')] bg-[top_3rem_left_5rem]">
              <div className="hidden tablet:flex flex-col gap-6">
                <p className="text-[2rem] desktop:text-[2.75rem] leading-[2.75rem] font-bold text-dark-blue-heading">
                  Ganhe por máquina indicada
                </p>
                <p className="text-sm desktop:text-lg text-description">
                  Garanta sua renda extra sem investimento inicial e conquiste
                  sua independência financeira
                </p>
              </div>
              <Button
                className="w-[100vw] absolute left-[2.25rem] bottom-[-2.5rem] tablet:left-0 tablet:bottom-0 tablet:relative tablet:flex"
                type="primary"
                href="#afilliate"
              >
                Quero ser afiliado
                <Icon
                  iconName="chevron-right"
                  className="text-black group-hover:text-secondary"
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContainerWithSimpleQuotes
        id="how-it-works"
        shouldRenderBackgroundColorOnDesktop
      >
        <div className="max-w-7xl mx-auto">
          <div className="my-[75px] flex flex-col items-center gap-[20px] py-[35px] desktop:py-[110px] min-h-[100vh] px-[30px] desktop:px-0">
            <div className="flex items-center justify-center h-[80px] w-[80px] rounded-full bg-secondary">
              <Icon iconName="flag" />
            </div>

            <p className="text-[2rem] desktop:text-[2.75rem] leading-[2.75rem] font-bold text-dark-blue-heading">
              Como funciona
            </p>
            <p className="text-sm desktop:text-lg text-description">
              Entenda como fazer uma renda extra
            </p>

            <div className="block desktop:hidden">
              <Image alt="model-with-machine" src={ModelInticate} />
            </div>

            <div className="max-w-full flex flex-col desktop:flex-row desktop:justify-between gap-[30px] desktop:gap-[100px] pt-[40px]">
              <div className="flex-1 flex flex-col gap-10">
                <span className="flex-1 text-description">
                  O programa de afiliados da FacilityPay é uma oportunidade
                  simples e lucrativa para quem quer aumentar a renda. Ao vender
                  nossas maquininhas de cartão, você recebe comissões que podem
                  chegar a R$ 110 por unidade vendida, sem precisar investir
                  nada para começar.<br></br>
                  <br></br>Nós cuidamos de toda a parte operacional, como
                  suporte, envio e pós-venda, enquanto você foca no que
                  realmente importa: a parte comercial. Tudo de forma prática e
                  eficiente, para que você tenha mais tempo para vender.
                  <br></br>
                  <br></br>Além disso, você acompanha suas vendas em tempo real
                  através de um painel exclusivo. É a chance perfeita de ajudar
                  empreendedores a economizarem com as melhores taxas do
                  mercado, enquanto você também ganha!
                </span>

                <div className="flex flex-col gap-4 desktop:gap-0 desktop:flex-row justify-between items-center">
                  <Button
                    className="min-w-full tablet:left-0 tablet:bottom-0 tablet:relative tablet:flex"
                    type="primary"
                  >
                    Quero ser afiliado
                    <Icon
                      iconName="chevron-right"
                      className="text-black group-hover:text-secondary"
                    />
                  </Button>
                  <Link
                    className="group/option flex flex-row items-center gap-4 underline text-sm text-gray-dark hover:text-secondary"
                    href="#advantages"
                  >
                    Veja as vantagens
                    <Icon
                      iconName="chevron-right"
                      className="font-semibold text-base text-gray-dark group-hover/option:text-secondary group-hover:underline"
                    />
                  </Link>
                </div>
              </div>
              <div className="hidden desktop:block flex-1 flex justify-end">
                <Image alt="model-with-machine" src={ModelInticate} />
              </div>
            </div>
          </div>
        </div>
      </ContainerWithSimpleQuotes>

      <ContainerWithSimpleQuotes id="advantages">
        <div className="max-w-7xl mx-auto z-50 relative px-[32px] desktop:px-0 py-[50px] desktop:py-[100px]">
          <div className="flex flex-col items-center justify-center gap-6 pb-14">
            <div className="flex justify-center items-center self-center bg-secondary rounded-full w-[56px] h-[56px] tablet:w-[80px] tablet:h-[80px]">
              <Icon iconName="rocket" />
            </div>
            <span className="font-bold text-center text-2xl tablet:text-2xl desktop:text-3xl text-dark-blue-heading">
              Confira as vantagens de ser um afiliado FacilityPay
            </span>
          </div>
          <div className="my-auto grid grid-cols-1 justify-items-center tablet:grid-cols-2 desktop:grid-cols-3 gap-10">
            {machinesAdvantages.map(({ key, icon, label, description }) => (
              <div
                key={key}
                className="flex flex-col w-full tablet:w-[373px] desktop:w-[373px] bg-white rounded-2xl py-10 px-[32px] desktop:px-6 gap-4"
              >
                <div className="flex desktop:flex-col flex-row items-center desktop:items-start gap-4">
                  <div className="flex justify-center items-center w-[48px] desktop:w-[60px] h-[48px] desktop:h-[60px] bg-[#FFBB00] bg-opacity-20 rounded-full">
                    <Icon iconName={icon} />
                  </div>
                  <p className="flex-1 break-words text-base desktop:text-xl font-extrabold text-black">
                    {label}
                  </p>
                </div>
                <p className="text-black text-sm desktop:text-base">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col tablet:flex-row gap-4 items-center justify-between pt-0 tablet:pt-20 w-full">
            <span className="opacity-0">Saiba mais</span>
            <Button type="primary" width="100%" href="#afilliate">
              Quero ser afiliado
              <Icon
                iconName="chevron-right"
                className="text-black group-hover:text-secondary"
              />
            </Button>
            <Link
              className="group/option flex flex-row items-center gap-4 underline text-sm text-gray-dark hover:text-secondary"
              href="#how-to-participate"
            >
              Como participar
              <Icon
                iconName="chevron-right"
                className="font-semibold text-base text-gray-dark group-hover/option:text-secondary group-hover:underline"
              />
            </Link>
          </div>
        </div>
      </ContainerWithSimpleQuotes>

      <ContainerWithSimpleQuotes
        id="how-to-participate"
        className="bg-indicate-participate"
        shouldRenderBackgroundColorOnDesktop={false}
        shouldRenderBackgroundColorOnMobile={false}
        isDark
      >
        <div className="max-w-7xl mx-auto z-50 relative px-[32px] desktop:px-0 pt-[40px] desktop:pt-[100px] pb-[40px] desktop:pb-[75px] my-[75px]">
          <div className="flex flex-col justify-center items-center gap-[12px] desktop:gap-[20px] pb-[30px] desktop:pb-[60px]">
            <div className="flex items-center justify-center h-[56px] w-[56px] desktop:h-[80px] desktop:w-[80px] rounded-full bg-secondary">
              <Icon iconName="flag" />
            </div>

            <p className="text-center text-[2rem] desktop:text-[2.75rem] leading-[2.75rem] font-bold text-white">
              Como participar?
            </p>
            <p className="text-center text-sm desktop:text-lg text-white">
              Para se tornar um afiliado da FacilityPay é simples, veja o passo
              a passo abaixo:
            </p>
          </div>

          <div className="my-auto grid grid-cols-1 justify-items-center tablet:grid-cols-2 desktop:grid-cols-3 gap-4 desktop:gap-10">
            {howToParticipateItems.map(({ icon, label }, index) => {
              const isLast = index === howToParticipateItems.length - 1;
              return (
                <div
                  key={label}
                  className="relative flex flex-col w-full tablet:w-[400px] desktop:w-[400px] bg-white rounded-2xl py-10 px-6 gap-4"
                >
                  <div className="flex desktop:flex-col flex-row items-center desktop:items-start gap-4">
                    <div className="flex justify-center items-center w-[48px] h-[48px] desktop:w-[60px] desktop:h-[60px] bg-secondary bg-opacity-20 rounded-full">
                      <Icon iconName={icon} />
                    </div>
                    <p className="flex-1 break-words text-lg desktop:text-xl font-extrabold text-black">
                      {label}
                    </p>
                  </div>
                  {!isLast && (
                    <div className="hidden desktop:absolute left-[95%] z-30 top-[30%]">
                      <TopRightArrow />
                    </div>
                  )}
                  {!isLast && (
                    <div className="absolute desktop:hidden right-[2rem] z-30 top-[80%]">
                      <BottomArrow />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex flex-row justify-center items-center pt-[32px] desktop:py-[40px]">
            <Button
              className="w-[100vw] tablet:left-0 tablet:bottom-0 tablet:relative tablet:flex"
              type="primary"
              href="#afilliate"
            >
              Quero ser afiliado
              <Icon
                iconName="chevron-right"
                className="text-black group-hover:text-secondary"
              />
            </Button>
          </div>
        </div>
      </ContainerWithSimpleQuotes>

      <ContainerWithSimpleQuotes
        id="afilliate"
        shouldRenderBackgroundColorOnDesktop={false}
        shouldRenderBackgroundColorOnMobile={false}
        isDark
      >
        <div className="max-w-7xl mx-auto z-50 relative px-[32px] desktop:px-0 py-[40px] desktop:py-[100px]">
          <div className="flex flex-col items-center justify-center gap-6 pb-14">
            <div className="flex justify-center items-center self-center bg-secondary rounded-full w-[56px] h-[56px] tablet:w-[80px] tablet:h-[80px]">
              <Icon iconName="rocket" />
            </div>
            <span className="font-bold text-center text-2xl tablet:text-2xl desktop:text-3xl text-white">
              Quero ser um afiliado
            </span>

            <span>
              Preencha o formulário abaixo e o nosso time entrará em contato:
            </span>
          </div>

          <div className="flex flex-col desktop:flex-row items-center gap-[40px]">
            <div className="min-w-full flex-1 flex flex-col gap-[40px]">
              <div className="flex-1 flex flex-col gap-2">
                <label className="px-6 text-sm text-white font-bold">
                  Nome completo:
                </label>
                <div className="max-h-[60px] items-center border border-gray-dark rounded-xl rounded-br-[30px] py-4 px-8">
                  <input
                    type="text"
                    className="w-full text-base text-white outline-0 outline-none bg-transparent"
                    placeholder="Digite seu nome completo..."
                    value=""
                    onChange={() => {}}
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="px-6 text-sm text-white font-bold">
                  E-mail:
                </label>
                <div className="max-h-[60px] items-center border border-gray-dark rounded-xl rounded-br-[30px] py-4 px-8">
                  <input
                    type="text"
                    className="w-full text-base text-white outline-0 outline-none bg-transparent"
                    placeholder="Digite seu melhor e-mail..."
                    value=""
                    onChange={() => {}}
                  />
                </div>
              </div>
            </div>
            <div className="min-w-full flex-1 flex flex-col gap-[40px]">
              <div className="flex-1 flex flex-col gap-2">
                <label className="px-6 text-sm text-white font-bold">
                  Contato WhatsApp:
                </label>
                <div className="max-h-[60px] items-center border border-gray-dark rounded-xl rounded-br-[30px] py-4 px-8">
                  <input
                    type="text"
                    className="w-full text-base text-white outline-0 outline-none bg-transparent"
                    placeholder="(99) 99999-9999"
                    value=""
                    onChange={() => {}}
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="px-6 text-sm text-white font-bold">
                  CPF/CNPJ:
                </label>
                <div className="max-h-[60px] items-center border border-gray-dark rounded-xl rounded-br-[30px] py-4 px-8">
                  <input
                    type="text"
                    className="w-full text-base text-white outline-0 outline-none bg-transparent"
                    placeholder="Digite seu CPF ou CNPJ..."
                    value=""
                    onChange={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>

          <Button className="min-w-full mt-[48px]" type="primary">
            Enviar
          </Button>
        </div>
      </ContainerWithSimpleQuotes>

      <ContainerWithSimpleQuotes
        id="rules"
        shouldRenderBackgroundColorOnDesktop={false}
        shouldRenderBackgroundColorOnMobile={false}
        isGolden
        isDark
      >
        <div className="max-w-7xl mx-auto z-50 relative pt-[40px] desktop:pt-[100px] px-[32px] desktop:px-0 pb-[40px] desktop:pb-[75px] my-[75px]">
          <div className="flex flex-col items-center gap-[20px] pb-[60px]">
            <div className="flex items-center justify-center h-[80px] w-[80px] rounded-full bg-secondary">
              <Icon iconName="flag" />
            </div>

            <p className="text-center text-[2rem] desktop:text-[2.75rem] leading-[2.75rem] font-bold text-secondary">
              Regras e condições para os afiliados
            </p>
          </div>

          <div className="max-w-5xl flex flex-col desktop:flex-row mx-auto gap-[40px] desktop:gap-[100px]">
            <div className="flex-1">
              <p>
                Assim como em toda boa parceria, precisamos combinar algumas
                regrinhas básicas para garantir uma convivência tranquila e
                produtiva. Tudo certo?<br></br>
                <br></br>Nosso objetivo é crescer juntos com cada afiliado da
                FacilityPay. Para isso, estabelecemos algumas diretrizes que vão
                facilitar nossa colaboração e potencializar os resultados.
                <br></br>
                <br></br> É importante lembrar que o não cumprimento dessas
                regras pode levar ao descredenciamento do programa. Contamos com
                você para que nossa parceria seja um sucesso!
              </p>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-[20px]">
                <span className="font-bold">
                  Vamos para algumas regrinhas básicas?
                </span>

                {rules.map((rule) => (
                  <div key={rule.title} className="flex flex-col gap-4">
                    <div className="flex flex-row items-center gap-3">
                      <Icon
                        iconName="chevron-right"
                        className="text-secondary"
                      />
                      <p className="text-base text-white font-extrabold">
                        {rule.title}
                      </p>
                    </div>
                    <p className="text-base text-white">{rule.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContainerWithSimpleQuotes>
    </Layout>
  );
};

export default Indique;
