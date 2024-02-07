"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronCircleUp,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isActive ? "text-gray-500" : "text-gray-900 underline"}`}
    >
      {children}
    </Link>
  );
};

const SocialIcon = ({
  icon,
  href,
}: {
  icon: FontAwesomeIconProps["icon"];
  href: string;
}) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon
      icon={icon}
      className="w-4 h-4 text-gray-300 hover:text-gray-400"
    />
  </Link>
);

export const NavBar = () => {
  return (
    <div className="mb-8 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link href="/">Florent Tavernier</Link>
        <div className="flex gap-2">
          <SocialIcon
            href="https://twitter.com/turboblitzzz"
            icon={faTwitter}
          />
          <SocialIcon href="https://github.com/0xturboblitz" icon={faGithub} />
          <SocialIcon
            href="https://www.instagram.com/florent_tavernier/"
            icon={faInstagram}
          />
          <SocialIcon href="mailto:florent.tavernier@gmail.com" icon={faEnvelope} />
        </div>
      </div>
      <nav>
        <div className="flex gap-4">
          <NavLink href="/">About</NavLink>
          <NavLink href="/posts">Blog</NavLink>
        </div>
      </nav>
    </div>
  );
};
