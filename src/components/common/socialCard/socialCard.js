import React from "react";
import "./socialCard.scss";
import images from "../../../config/images";

const socials = [
  {
    name: "github",
    link: "https://github.com/saugatrimal",
    icon: "github"
  },
  {
    name: "linkedIn",
    link: "https://www.linkedin.com/in/saugatrimal/",
    icon: "linkedin"
  },
  {
    name: "codePen",
    link: "https://codepen.io/saugatrimal/",
    icon: "codepen"
  },
  { name: "dev", link: "https://dev.to/saugatrimal", icon: "dev" }
];

function SocialCard() {
  return (
    <div className="socials">
      {socials.map(social => {
        return (
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
          >
            <img src={images.socialIcons[social.icon]} alt={social.icon} />
          </a>
        );
      })}
    </div>
  );
}

SocialCard.propTypes = {};
SocialCard.defaultProps = {};
export default SocialCard;
