import InfoPanel from "../../components/InfoPanel";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";

export default function Inspiration() {
  const image =
    "https://images.unsplash.com/photo-1536698658763-878a02695d1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const body =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.";
  const messages = [
    {
      title: "Todo de moper para ti",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione",
      icon: <CloudArrowUpIcon className="absolute left-1 top-1 h-5 w-5 text-red-600" />,
    },
    {
      title: "Donde la aventura encuentra el bienestar",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione",
      icon: <LockClosedIcon className="absolute left-1 top-1 h-5 w-5 text-orange-600"/>,
    },
    {
      title: "Solo hazlo",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione",
      icon: <ServerIcon className="absolute left-1 top-1 h-5 w-5 text-red-600" />,
      
    },
  ];
  return (
    <InfoPanel
      caption="Sigue tus metas"
      title="Encuentra tu verdadero yo"
      body={body}
      image={image}
      messages = {messages}
    />
  );
}
