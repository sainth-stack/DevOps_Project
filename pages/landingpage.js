/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Navigation from '../Components';
import { Content } from '../Components/Content';
import Footer from '../Components/Footer';
import image1 from '../assets/svg/image1.svg'
import image2 from '../assets/svg/image2.svg'
import image3 from '../assets/svg/image3.svg'
import image4 from '../assets/svg/image4.svg'
import image5 from '../assets/svg/image5.svg'
import { list1, list11, list2, list21, list31, list32, list41, list42, list51, list52 } from '../utilities'
// import { history } from '../Components/service/helpers';

export default function LandingPage() {
  const [showPopup, setShowPopup] = useState(false);
  // const user = localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")) : null;

  // useEffect(() => {
  //   if (user !== null) {
  //     history.replace("/admin/dashboard/me")
  //   }
  // }, [])
  return (
    <div className='bg-white rounded vh-100 bgImg'>
      <Navigation showPopup={showPopup} setShowPopup={() => setShowPopup(false)} />
      <Content image1={image1} list1={list1} list2={list2} list11={list11} list21={list21} image2={image2} image3={image3} list31={list31} list32={list32} list41={list41} list42={list42} image4={image4} image5={image5} list51={list51} list52={list52} showPopup={() => setShowPopup(true)} />
      <Footer />
    </div >
  );
}
