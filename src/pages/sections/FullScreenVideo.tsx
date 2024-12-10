import Icon from "@/components/Icon";
import YoutubeModal from "@/components/YoutubeModal";
import { useCallback, useState } from "react";

const LoopBanner = () => {
  return (
    <div className="overflow-x-hidden absolute z-20 bg-secondary">
      <div className="w-max animate-[scroll-right_10s_linear_infinite] py-1.5">
        <ul className="flex gap-6">
          {[...new Array(6)].map((_, index) => {
            return (
              <div
                key={index}
                className="w-full tablet:w-[50vw] desktop:w-[33vw] flex flex-row items-center gap-4"
              >
                <Icon iconName="machine" />
                <span className="font-bold text-base desktop:text-lg text-black">
                  FacilityPay PRO{" "}
                  <span className="font-normal">por 12x de R$ 35,81</span>
                </span>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const FullScreenVideo = () => {
  const [isVideoOpened, setIsVideoOpened] = useState<boolean>(false);

  const onOpenVideo = useCallback(() => {
    setIsVideoOpened(true);
  }, []);

  const onCloseVideo = useCallback(() => {
    setIsVideoOpened(false);
  }, []);

  return (
    <section className="relative overflow-x-hidden h-[70vh] tablet:h-[100vh]">
      <LoopBanner />
      <div
        className="absolute flex flex-col max-w-[100vw] overflow-x-hidden justify-center items-center gap-8 inset-0 bg-local bg-no-repeat bg-mobile-full-video-screen desktop:bg-full-video-screen bg-[length:80%]"
        style={{
          backgroundPosition: "0 0, 0%",
          backgroundSize: "auto, cover",
          backgroundAttachment: "scroll, fixed",
        }}
      >
        <div className="flex items-center justify-center border-2 border-secondary w-[56px] h-[56px] tablet:w-[80px] tablet:h-[80px] rounded-full">
          <Icon iconName="profit" />
        </div>
        <span className="text-2xl tablet:text-3xl desktop:text-4xl text-white text-center font-bold">
          Lucre muito mais com a<br />
          FacilityPay
        </span>
        <button
          onClick={onOpenVideo}
          className="flex flex-row items-center gap-2"
        >
          <Icon iconName="play" color="white" />
          <a className="underline text-sm tablet:text-base font-medium text-white">
            Assistir o video
          </a>
        </button>
      </div>

      <YoutubeModal
        isOpened={isVideoOpened}
        onClose={onCloseVideo}
        videoId="kREuZ3Xr-8Q"
      />
    </section>
  );
};

export default FullScreenVideo;
