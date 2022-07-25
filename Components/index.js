import { Nav } from "./Nav";
import Button from "../Components/Button";
import React, { useEffect, useState } from "react";
import { dummyData } from "../utilities/constants";
import Image from 'next/image'
import LandingPage1 from "../assets/images/landing1.png";
import Icon1 from "../assets/svg/Icon1.svg";
import Icon2 from "../assets/svg/Icon2.svg";
import Icon3 from "../assets/svg/Icon3.svg";
import Icon4 from "../assets/svg/Icon4.svg";
import Icon5 from "../assets/svg/Icon5.svg";
import Icon6 from "../assets/svg/Icon6.svg";
import Card from "../Components/Card";
// import "./styles.scss";
import RequestDemoPopup from "./requestDemoPopup";
import { requestDemo } from "../Components/action/UploadAct";
import { useDispatch } from "react-redux";
export default function Navigation(props) {
  const [orderModalShow, setOrderModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const dispatch = useDispatch();
  const handleClick = () => {
    setOrderModalShow(true);
  };
  const handleCallback = (childData) => {
    setLoading(true);
    let response = dispatch(requestDemo(childData.data));
    response.then(({ success, message }) => {
      if (success) {
        setLoading(false);
        setOrderModalShow(false);
        setError("");
      } else {
        setLoading(false);
        setError(message);
      }
    });
  };
  useEffect(() => {
    if (props.showPopup) {
      setOrderModalShow(!orderModalShow)
    }
    if (!orderModalShow) {
      props.setShowPopup(false);
    }
  }, [props, orderModalShow])
  return (
    <div>
      <div className="container">
        <Nav dummyData={dummyData} handleClick={handleClick} />
        <div className="d-flex flex-wrap justify-content-center align-items-center bannerHeight pb-5 mb-5">
          <div className="col-lg-6">
            <h1 className="text-green pb-4">
              One Platform for all your employee performance review, reward and
              recognition needs driven by AI
            </h1>
            <Button
              className="border-0 bg-green text-white"
              text="How it works?"
            />
            <Button
              className="border-0 bg-white"
              handleClick={handleClick}
              text="Request Demo"
            />
          </div>

          <div className="col-lg-6">
            <Image src={LandingPage1} alt="landingpage" className="w-100" />
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="text-center pt-5 mt-2 mb-5">
          <p className="h5">
            Experience the world’s best iterative business execution platform
          </p>
          <p className="text-defalt h6">
            Grow your business with our suite of 6 comprehensive products
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <Card
            icon={Icon1}
            heading="OKR Management"
            subheading="Simple. Focus. Measure. Achieve."
          />
          <Card
            icon={Icon2}
            heading="Performance Reviews"
            subheading="Track Better. Do More."
          />
          <Card
            icon={Icon3}
            heading="Employee Rewards"
            subheading="Build Trust. Boost Engagement."
          />
          <Card
            icon={Icon4}
            heading="Employee Recognition"
            subheading="Leverage OKRs. Ignite Performance."
          />
          <Card
            icon={Icon5}
            heading="Task Management"
            subheading="Build Trust. Boost Engagement."
          />
          <Card
            icon={Icon6}
            heading="Employee SWOT"
            subheading="Build Trust. Boost Engagement."
          />
        </div>
        {error.length > 0 && <h2>{error}</h2>}
        <RequestDemoPopup
          show={orderModalShow}
          onHide={() => setOrderModalShow(false)}
          handlecallback={handleCallback}
          loading={loading}
        />
      </div>
    </div>
  );
}
