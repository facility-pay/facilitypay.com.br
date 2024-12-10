import { useEffect } from "react";

type YoutubeModalProps = {
  videoId: string;
  isOpened?: boolean;
  onClose: () => void;
};

const YoutubeModal = ({ isOpened, onClose, videoId }: YoutubeModalProps) => {
  const handleBackdropClick = (e: unknown) => {
    if ((e as { target: { id: string } }).target.id === "backdrop") {
      onClose();
    }
  };

  if (!isOpened) return null;

  return (
    <div
      id="backdrop"
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-gray-dark rounded-lg overflow-hidden w-[90%] max-w-3xl">
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YoutubeModal;
