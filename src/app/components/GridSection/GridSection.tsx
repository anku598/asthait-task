import Image from "next/image";
import Card from "../Card/Card";
import star from "/public/assets/img/star.png";

import IconFour from "/public/assets/img/card-icon-four.svg";
import IconOne from "/public/assets/img/card-icon-one.svg";
import IconThree from "/public/assets/img/card-icon-three.svg";
import IconTwo from "/public/assets/img/card-icon-two.svg";

const cardsData = [
  {
    icon: IconOne,
    title: "15% Profit Sharing from Challenge Phase",
    text: "FundedNext is the only prop firm to offer a 15% profit sharing from the profit you make",
  },
  {
    icon: IconTwo,
    title: "Competitive Low Commission Rates",
    text: "Daily drawdown uses balance, not equity, for utmost prop firm reliability.",
  },
  {
    icon: IconThree,
    title: "Balance Drawdown Performance Overview",
    text: "FundedNext offers raw spread with Swap Free: World's best prop trading conditions.",
  },

  {
    icon: IconFour,
    title: "No Time Limit on Challenge Phase",
    text: "Daily drawdown uses balance, not equity, for utmost prop firm reliability.",
  },
];

export const GridSection = () => {
  return (
    <div className="bg-[#F0F2FF] min-h-[50vh] relative grid-section-cotainer w-full flex flex-col  xl:flex-row justify-between items-center gap-10 px-10 py-10 md:px-40 md:py-40">
      <div className="bg-[url(/assets/img/union-one.svg)] bg-cover absolute bottom-20 left-40 w-[100px] h-[100px]"></div>
      <div className="left-column flex-1">
        <div className="title text-primary font-clash-display-semibold md:text-3xl md:leading-3xl text-[24px] leading-[30px] mb-3">
          What Makes FundedNext Different?
        </div>
        <p className="sub-text">
          FundedNext offers no time limits in its funding challenges.
        </p>

        <div className="mt-3 flex items-center -space-x-2 overflow-hidden">
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />

          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white font-bold">
            +3k
          </div>
          <div class="mt-3 lg:pl-4  text-sm pl-6 md:pl-0">
            <h4>Our Happy Customer</h4>
            <div className="flex gap-2">
              {/* <img src={star} alt="Star Icon" /> */}
              <Image src={star} alt="Star Icon" />
              <p>(1.5k Reviews)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-column flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="flex gap-6 flex-col">
          {cardsData.slice(0, 2).map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
        <div className="flex gap-6 flex-col lg:mt-10">
          {cardsData.slice(2).map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
