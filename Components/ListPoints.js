import Button from "../Components/Button";
import React from "react";
import dot from "../assets/svg/dot.svg";
import yellowdot from "../assets/svg/yellowdot.svg";
import Image from "next/image";
// import "./styles.scss"

export default function ListPoints({
  heading,
  subheading,
  list1 = [],
  list2 = [],
}) {
  return (
    <div className="paragraph">
      <h3 className="heading1">
        <div className="yellowDot">
          <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
        </div>
        {heading}
      </h3>
      <h5 className="subheading1">{subheading}</h5>
      <hr />
      {list1.length > 0 &&
        list1.map((item, index) => (
          <p className="list-item" key={index}>
            {item}
          </p>
        ))}
      {list2.length > 0 &&
        list2.map((item, index) => (
          <p className="list-item" key={index}>
            <Image src={dot} alt="dot" className="dotSize mr-2" />
            {item}
          </p>
        ))}
      <Button text="Learn More" className="border-green bg-white text-green" />
    </div>
  );
}
