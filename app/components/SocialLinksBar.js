import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faThreads,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "http://facebook.com/61582886146977#",
    icon: faFacebookF,
    className: "text-[#1877f2]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/velon-book-publishing/",
    icon: faLinkedinIn,
    className: "text-[#0a66c2]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/velonbookpublishing/",
    icon: faInstagram,
    className: "text-[#e4405f]",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@VelonBookPublishing",
    icon: faYoutube,
    className: "text-[#ff0000]",
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@velonbookpublishing",
    icon: faThreads,
    className: "text-[#111111]",
  },
];

export default function SocialLinksBar() {
  return (
    <aside className="social-links-bar" aria-label="Social media links">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="social-links-bar__item"
        >
          <FontAwesomeIcon icon={link.icon} className={link.className} />
        </a>
      ))}
    </aside>
  );
}
