import Button from "../Components/Button";
import React from "react";
import ListPoints from "./ListPoints";
import Image from "next/image";
export function Content({
  image1,
  list1,
  list2,
  list11,
  list21,
  image2,
  image3,
  list31,
  list32,
  list41,
  list42,
  image4,
  image5,
  list51,
  list52,
  showPopup,
}) {
  return (
    <div className="container-fluid">
      <List1 image1={image1} list1={list1} list2={list2} />
      <List2 list11={list11} list21={list21} image2={image2} />
      <div className=" d-flex flex-wrap align-items-center justify-content-center">
      <div className="imagePic">
      <Image src={image3} alt="image1" className="imagePic" />
      </div>
        <ListPoints
          heading="Rewards and Recognition"
          subheading="Build Trust. Boost Engagement"
          list1={list31}
          list2={list32}
        />
      </div>
      <div className=" d-flex flex-wrap align-items-center justify-content-center">
        <ListPoints
          heading="Task Management"
          subheading="Track Better. Do More."
          list1={list41}
          list2={list42}
        />
<div className="imagePic">
      <Image src={image4} alt="image1" className="imagePic" />
      </div>      </div>
      <div className=" d-flex flex-wrap align-items-center justify-content-center">
      <div className="imagePic">
      <Image src={image5} alt="image1" className="imagePic" />
      </div>        <ListPoints
          heading="SWOT"
          subheading="Analysis"
          list1={list51}
          list2={list52}
        />
      </div>
      <div className="container text-center">
        <h4 className="text-green">
          Want to see how we can take your company on the growth journey?
        </h4>
        <Button
          className="border-0 bg-green text-white"
          text="Request Demo"
          handleClick={() => showPopup()}
        />
      </div>
    </div>
  );
}

function List1({ image1, list1, list2 }) {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center">
      <div className="imagePic">
        <Image src={image1} alt="image1" className="imagePic" />
      </div>
      <ListPoints
        heading="OKR Management"
        subheading="Simple. Focus. Measure. Achieve."
        list1={list1}
        list2={list2}
      />
    </div>
  );
}

function List2({ list11, list21, image2 }) {
  return (
    <div className=" d-flex flex-wrap  align-items-center justify-content-center">
      <ListPoints
        heading="Performance Reviews"
        subheading="Leverage OKRs. Ignite Performance
"
        list1={list11}
        list2={list21}
      />
      <div className="imagePic">
        <Image src={image2} alt="image1" className="imagePic" />
      </div>
    </div>
  );
}
