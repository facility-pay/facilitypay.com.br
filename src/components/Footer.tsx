"use client";

import FacilityVerticalLogo from "@/assets/logos/facility-vertical.png";
import Image from "next/image";
import Link from "next/link";
import Icon, { IconName } from "./Icon";
import { usePathname } from "next/navigation";

type FooterSection = Array<{
  name: string;
  subSections: Array<{
    name: string;
    href?: string;
  }>;
}>;

const sections: FooterSection = [
  {
    name: "FacilityPay",
    subSections: [
      {
        name: "Planos e Taxas",
        href: "/planos",
      },
      {
        name: "Sobre nós",
        href: "/sobre",
      },
      // {
      //   name: "Blog",
      //   href: "/blog",
      // },
      // {
      //   name: "Indique e ganhe",
      //   href: "/indique",
      // },
    ],
  },
  {
    name: "Nossas Maquininhas",
    subSections: [
      {
        name: "Facility Mini",
        href: "/maquininhas#mini",
      },
      {
        name: "Facility Pro",
        href: "/maquininhas#pro",
      },
      {
        name: "Facility Smart",
        href: "/maquininhas#smart",
      },
    ],
  },
];

type SocialMedia = {
  iconName: IconName;
  url: string;
};

const socialMedias: Array<SocialMedia> = [
  {
    iconName: "facebook",
    url: "https://www.facebook.com/profile.php?id=100095252897063",
  },
  {
    iconName: "instagram",
    url: "https://www.instagram.com/sejafacility/",
  },
  {
    iconName: "ytb",
    url: "https://www.youtube.com/@sejafacility",
  },
];

const Footer = () => {
  const pathname = usePathname();

  // Detect if we're in the affiliate route
  const routePrefix = pathname.startsWith('/afiliados-facility') ? '/afiliados-facility' : '';

  return (
    <footer className="mt-[60px] desktop:mt-[100px]">
      <div className="h-[1px] w-full bg-grey-lightest mb-20 px-6 desktop:px-[300px]">
        <div className="h-[6px] bg-secondary" />
      </div>
      <div className="mx-10 desktop:mx-auto desktop:max-w-6xl flex flex-col desktop:flex-row mb-10 items-center desktop:justify-center desktop:pb-8 gap-8 mt-10">
        <div className="flex flex-col gap-8 items-center desktop:pr-20">
          <Image alt="facility-vertical-logo" src={FacilityVerticalLogo} />

          <div className="flex gap-6">
            {socialMedias.map(({ iconName, url }) => (
              <Link
                href={url}
                key={iconName}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon iconName={iconName} className="text-secondary" />
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col desktop:flex-row gap-10">
          {sections.map(({ name, subSections = [] }) => (
            <div className="flex-initial desktop:flex-1" key={name}>
              <div className="border-b border-grey-lightest pb-4">
                <span className="text-gray-dark font-bold text-lg">{name}</span>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                {subSections.map(({ name: subSectionName, href }) => (
                  <div
                    className="group/option flex flex-row items-center gap-4 self-start"
                    key={subSectionName}
                  >
                    <Icon iconName="chevron-right" className="text-secondary" />
                    <Link
                      href={href ? `${routePrefix}${href}` : ""}
                      className="text-sm text-gray-dark group-hover/option:text-secondary group-hover/option:underline"
                    >
                      {subSectionName}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="desktop:flex-1">
            <div className="border-b border-grey-lightest pb-4">
              <span className="text-dark-blue-heading font-bold text-lg">
                Atendimento
              </span>
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="http://wa.me/5527998159001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2"
              >
                <Icon iconName="true-whatsapp" color="#3DBE64" />
                <span className="text-dark-blue-heading text-sm">
                  Suporte: <strong>(27) 9 9815-9001</strong>
                </span>
              </Link>
              <Link
                href="http://wa.me/5527998126432"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2"
              >
                <Icon iconName="true-whatsapp" color="#3DBE64" />
                <span className="text-dark-blue-heading text-sm">
                  Comercial: <strong>(27) 9 9812-6432</strong>
                </span>
              </Link>
              <div className="flex flex-row items-center gap-2">
                <Icon iconName="mail" />
                <span className="text-dark-blue-heading text-sm">
                  contato@facilitypay.com.br
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-full flex flex-col items-center desktop:items-start desktop:flex-row justify-evenly bg-footer py-4">
        <div className="" />
        <span className="text-black text-sm desktop:text-base">
          <strong>FacilityPay</strong> © {new Date().getFullYear()}. Todos os
          Direitos Reservados.
        </span>
        <span className="text-black text-sm desktop:text-base">
          CNPJ: 38.030.873/0001-10
        </span>
      </div>
    </footer>
  );
};

export default Footer;
