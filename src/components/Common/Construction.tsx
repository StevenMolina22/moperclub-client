import { GiThorHammer } from "react-icons/gi";

const UnderConstructionPage = () => {
  return (
    <div className="flex h-screen flex-col items-center">
      <div className="my-8 text-4xl font-bold">Under Construction</div>
      <div className="flex h-48 w-48 justify-center">
        <div className="animate-hammer">
          <GiThorHammer className="text-9xl" style={{ fontSize: "16rem" }} />
        </div>
      </div>
      <style>
        {`
          @keyframes hammer {
            0% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(20deg);
            }
            50% {
              transform: rotate(0deg);
            }
            75% {
              transform: rotate(-20deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }

          .animate-hammer {
            animation: hammer 1.5s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default UnderConstructionPage;
