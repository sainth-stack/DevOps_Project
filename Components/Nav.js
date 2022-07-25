import Button from "../Components/Button";
import Dropdown from "../Components/Dropdown";
import Logo from "../Components/Logo";
import React from "react";
// import { Link } from "react-router-dom";
import Link from 'next/link'
import AnchorLink from "./AnchorLink";
export function Nav({
  dummyData,
  handleClick
}) {
  return <div className='d-flex flex-wrap justify-content-center align-items-center pt-3 pb-3'>
    <Logo logoImg="2" />
    <AnchorLink title="Why us?" path="/" />
    <Dropdown title="Product" options={dummyData} />
    <Dropdown title="Resources" options={dummyData} />
    <Dropdown title="Pricing" options={dummyData} />
    <Dropdown title="Company" options={dummyData} />
    <button className="nav-link border-0 bg-transparent" onClick={() => handleClick()}>Request Demo</button>
    <Link href="/auth/login">
      <a>
      <Button className='border-green bg-white' text='Login' handleClick={() => null} />
      </a>
    </Link>
  </div>;
}
