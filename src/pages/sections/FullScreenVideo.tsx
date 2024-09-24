import Icon from "@/components/Icon";
import YoutubeModal from "@/components/YoutubeModal";
import { useCallback, useState } from "react";

const LoopBanner = () => {
  return (
    <div className="overflow-x-hidden absolute z-20 bg-secondary">
      <div className="w-max animate-[scroll_10s_linear_infinite] py-1.5">
        <ul className="flex flex-row gap-6">
          {[...new Array(6)].map((_, index) => {
            return (
              <div
                key={index}
                className="w-[100vw] tablet:w-[50vw] desktop:w-[33vw] flex flex-row items-center gap-4"
              >
                <Icon iconName="machine" />
                <span className="font-bold text-base text-black">
                  FacilityPay PRO{" "}
                  <span className="font-normal">por 12x de R$ 38,81</span>
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
    <section className="relative overflow-x-hidden h-[100vh]">
      <LoopBanner />
      <div
        className="absolute flex flex-col justify-center items-center gap-8 inset-0 bg-local bg-no-repeat bg-full-video-screen bg-[length:100%]"
        style={{
          backgroundPosition: "0 0, 50%",
          backgroundSize: "auto, cover",
          backgroundAttachment: "scroll, fixed",
        }}
      >
        <span className="text-3xl text-white text-center font-bold">
          Lucre muito mais com a<br />
          FacilityPay
        </span>
        <button
          onClick={onOpenVideo}
          className="flex flex-row items-center gap-2"
        >
          <Icon iconName="play" color="white" />
          <a className="underline text-base font-medium text-white">
            Assistir o video
          </a>
        </button>
      </div>

      <YoutubeModal
        isOpened={isVideoOpened}
        onClose={onCloseVideo}
        videoId="lxrAjEQb5RQ"
      />
    </section>
  );
};

export default FullScreenVideo;
