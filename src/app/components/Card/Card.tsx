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
    <div className={`card ${className}`}>
      <div className="bg-card-pattern bg-[url(/assets/img/card-pattern.svg)] bg-cover"></div>
      <div className="card-icon flex flex-col gap-4">
        <Image src={icon} alt="Icon One" className="mb-6" />
        <div className="card-title">{title}</div>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
