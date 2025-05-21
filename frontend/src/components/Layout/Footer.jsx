import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By AMAN SINHA.</div>
      <div>
        <Link to={"https://www.facebook.com/share/1HNQrRqpZv/"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://github.com/AMAN291-as"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://www.linkedin.com/in/aman-sinha-aba978309/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/i_am_aman291?igsh=MWh4aWtpbzd2MXFzaA=="} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
