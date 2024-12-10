import FacilityLogo from "@/assets/logos/facility.png";
import Image from "next/image";
import Icon from "./Icon";
import Link from "next/link";
import Button from "./Button";

type NavOption = {
  label: string;
  href: string;
};

const options: NavOption[] = [
  {
    label: "Maquininhas",
    href: "/maquininhas",
  },
  {
    label: "Planos",
    href: "/planos",
  },
  // {
  //   label: "Blog",
  //   href: "/blog",
  // },
  {
    label: "Sobre nós",
    href: "/sobre",
  },
];

const Header = () => {
  return (
    <header className="relative z-50 max-w-full mx-auto py-6">
      <div className="min-w-full flex flex-row items-center justify-evenly">
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <Image
              className="border-r border-grey-divider pr-4 desktop:pr-8 cursor-pointer"
              alt="facility-logo"
              src={FacilityLogo}
            />
          </Link>
          <div className="relative hidden desktop:block pl-4 desktop:pl-8">
            <span className="group relative font-semibold text-base text-gray-dark">
              Atendimento
              <div className="absolute top-[100%] left-[40%] pt-1">
                <Icon iconName="chevron-down" />
              </div>
              <div className="border border-description-15 m-0 hidden group-hover:block z-50 group-hover:absolute min-w-[calc(100%-32px)] desktop:w-[230px] desktop:px-2.5 mt-8 top-[100%] left-4 bg-white items-start drop-shadow-[4px_12px_50px_rgba(0,0,0,0.3)] py-6 before:content-[''] before:absolute before:top-[-20px] before:left-[20px] before:border-[10px] before:border-transparent before:border-b-description-15 after:content-[''] after:absolute after:top-[-20px] after:left-[20px] after:border-[10px] after:border-transparent after:border-b-white">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2.5">
                    <span className="font-bold text-sm text-description">
                      Sou cliente
                    </span>
                    <Link
                      href="http://wa.me/5527998159001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/support flex flex-row items-center gap-4 border hover:bg-whatsapp border-whatsapp p-4 rounded-lg"
                    >
                      <Icon
                        iconName="true-whatsapp"
                        color="#3DBE64"
                        className="block group-hover/support:hidden"
                      />
                      <Icon
                        iconName="true-whatsapp"
                        className="group-hover/support:text-white group-hover/support:block hidden"
                      />
                      <span className="font-semibold text-whatsapp group-hover/support:text-white">
                        Suporte
                      </span>
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <span className="font-bold text-sm text-description">
                      Não sou cliente
                    </span>
                    <Link
                      href="http://wa.me/5527998126432"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/comercial flex flex-row items-center gap-4 border hover:bg-whatsapp border-whatsapp p-4 rounded-lg"
                    >
                      <Icon
                        iconName="true-whatsapp"
                        color="#3DBE64"
                        className="block group-hover/comercial:hidden"
                      />
                      <Icon
                        iconName="true-whatsapp"
                        className="group-hover/comercial:text-white group-hover/comercial:block hidden"
                      />
                      <span className="font-semibold text-whatsapp group-hover/comercial:text-white">
                        Comercial
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>

        <div className="hidden desktop:block">
          <nav className="mt-0 min-w-fit relative bg-transparent flex flex-row items-center py-0">
            {options.map(({ href, label }, index) => {
              const isLast = index === options.length - 1;

              return (
                <div
                  key={href}
                  className={[
                    "group/option min-w-full desktop:min-w-fit flex flex-row gap-4 items-center rounded transition-all px-8 desktop:px-2 py-2 desktop:py-1 mx-2",
                    isLast ? "desktop:pb-1 pb-10" : "",
                  ].join(" ")}
                >
                  <Icon
                    iconName="chevron-right"
                    className="block desktop:hidden text-secondary"
                  />
                  <Link
                    href={href}
                    className="font-semibold text-base text-gray-dark group-hover/option:text-secondary group-hover/option:underline"
                  >
                    {label}
                  </Link>
                </div>
              );
            })}

            <div className="min-w-full flex flex-col desktop:flex-row items-center gap-4 border-t desktop:border-t-0 px-8 desktop:px-0 pt-8 desktop:pt-0">
              <Button
                className="min-w-full desktop:min-w-[180px]"
                type="primary"
                href="https://afiliados.facilitypay.com.br/checkout/e9e55358-6155-4e06-992c-4d85dc26cc8c"
              >
                Pedir agora
              </Button>
              <Button
                className="min-w-full desktop:min-w-[100px]"
                type="secondary"
                href="https://portal.facilitypay.com.br/login"
              >
                Entrar
              </Button>
            </div>
          </nav>
        </div>

        <div className="flex flex-row items-center desktop:hidden group/phone">
          <Icon
            iconName="context"
            className="block text-gray-dark group-hover/phone:text-secondary"
          />

          <nav className="border border-description-15 m-0 hidden group-hover/phone:block z-50 group-hover/phone:absolute min-w-[calc(100%-32px)] mt-5 top-[100%] left-4 bg-white flex-col items-start drop-shadow-[4px_12px_50px_rgba(0,0,0,0.3)] py-6 before:content-[''] before:absolute before:top-[-20px] before:right-[25px] before:border-[10px] before:border-transparent before:border-b-description-15 after:content-[''] after:absolute after:top-[-20px] after:right-[25px] after:border-[10px] after:border-transparent after:border-b-white">
            <div
              key="services"
              className="group/services min-w-full desktop:min-w-fit rounded transition-all px-8 desktop:px-2 py-2 desktop:py-1 mx-2"
            >
              <div className="flex flex-row gap-4 items-center ">
                <Icon
                  iconName="chevron-right"
                  className="block group-hover/services:hidden desktop:hidden text-secondary"
                />
                <Icon
                  iconName="chevron-down"
                  className="hidden group-hover/services:block desktop:hidden text-secondary"
                />
                <span className="font-semibold text-base text-gray-dark">
                  Atendimentos
                </span>
              </div>

              <div className="hidden group-hover/services:block mt-4">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2.5">
                    <span className="font-bold text-sm text-description">
                      Sou cliente
                    </span>
                    <Link
                      href="http://wa.me/5527998159001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/support flex flex-row items-center gap-4 border hover:bg-whatsapp border-whatsapp p-4 rounded-lg"
                    >
                      <Icon
                        iconName="true-whatsapp"
                        color="#3DBE64"
                        className="block group-hover/support:hidden"
                      />
                      <Icon
                        iconName="true-whatsapp"
                        className="group-hover/support:text-white group-hover/support:block hidden"
                      />
                      <span className="font-semibold text-whatsapp group-hover/support:text-white">
                        Suporte
                      </span>
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <span className="font-bold text-sm text-description">
                      Não sou cliente
                    </span>
                    <Link
                      href="http://wa.me/5527998126432"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/comercial flex flex-row items-center gap-4 border hover:bg-whatsapp border-whatsapp p-4 rounded-lg"
                    >
                      <Icon
                        iconName="true-whatsapp"
                        color="#3DBE64"
                        className="block group-hover/comercial:hidden"
                      />
                      <Icon
                        iconName="true-whatsapp"
                        className="group-hover/comercial:text-white group-hover/comercial:block hidden"
                      />
                      <span className="font-semibold text-whatsapp group-hover/comercial:text-white">
                        Comercial
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {options.map(({ href, label }, index) => {
              const isLast = index === options.length - 1;

              return (
                <div
                  key={href}
                  className={[
                    "group/option min-w-full desktop:min-w-fit flex flex-row gap-4 items-center rounded transition-all px-8 desktop:px-2 py-2 desktop:py-1 mx-2",
                    isLast ? "desktop:pb-1 pb-10" : "",
                  ].join(" ")}
                >
                  <Icon
                    iconName="chevron-right"
                    className="block desktop:hidden text-secondary"
                  />
                  <Link
                    href={href}
                    className="font-semibold text-base text-gray-dark group-hover/option:text-secondary"
                  >
                    {label}
                  </Link>
                </div>
              );
            })}

            <div className="min-w-full flex flex-col desktop:flex-row items-center gap-4 border-t desktop:border-t-0 px-8 desktop:px-0 pt-8 desktop:pt-0">
              <Button
                className="min-w-full desktop:min-w-[180px]"
                type="primary"
                href="https://afiliados.facilitypay.com.br/checkout/e9e55358-6155-4e06-992c-4d85dc26cc8c"
              >
                Pedir agora
              </Button>
              <Button
                className="min-w-full desktop:min-w-[100px]"
                type="secondary"
                href="https://portal.facilitypay.com.br/login"
              >
                Entrar
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
