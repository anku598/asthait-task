import Image from "next/image";
import { FC } from "react";

interface CardProps {
  icon: string;
  title: string;
  text: string;
  className?: string;
}

const Card: FC<CardProps> = ({ icon, title, text, className = "" }) => {
  return (
    <div className={`card card-hover-effect ${className}`}>
      <div className="bg-card-pattern bg-[url(/assets/img/card-pattern.svg)] bg-cover"></div>
      <div className="card-icon flex flex-col gap-4">
        <div className="rounded-full w-[50px] h-[50px] p-3 bg-[#F0F2FF]">
          <Image src={icon} alt="Icon One" className="mb-6" />
        </div>
        <div className="card-title">{title}</div>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
