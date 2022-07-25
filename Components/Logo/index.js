import React from "react";
import Link from "next/link";
import appLogo1 from "../../assets/images/appLogo.jpg";
import logo2 from "../../assets/images/logo2.png";
import Image from "next/image";

export default function Logo({ logoImg = "1" }) {
  return (
    <Link href="/">
      <a className="text-decoration-none">
        <div className="d-flex">
          <Image
            src={logoImg === "2" ? logo2 : appLogo1}
            className="appLogo"
            alt="applogo"
          />
          &nbsp;&nbsp;
          <p className="text-dark logoText mt-3">
            <span className="talent">TALENT</span>
            <span className="spotify">SPOTIFY</span>
          </p>
        </div>
      </a>
    </Link>
  );
}
