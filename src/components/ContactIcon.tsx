import githubIcon from "../icons/github.svg";
import linkedinIcon from "../icons/linkedin.svg";
import instagramIcon from "../icons/instagram.svg";

interface ContactIconProps {
  name: "github" | "linkedin" | "instagram";
  size: number;
}

const icons: Record<string, string> = {
  github: githubIcon,
  linkedin: linkedinIcon,
  instagram: instagramIcon,
};

function ContactIcon({ name, size }: ContactIconProps) {
  const Icon: string = icons[name];
  return <img src={Icon} alt={name} width={size} height={size} />;
}

export default ContactIcon;
