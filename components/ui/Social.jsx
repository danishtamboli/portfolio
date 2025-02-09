// import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, url: "https://github.com/danishtamboli" },
  { icon: <FaYoutube />, url: "" },
  { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/danishashfaq" },
  { icon: <FaTwitter />, url: "" },

];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles} >
      {socials.map((item, index) => {
        return (
          <a key={index} href={item.url} target="_blank" className={iconStyles}>
            {item.icon}
          </a>
        )
      })}
    </div>
  )
}

export default Social