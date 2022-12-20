import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/pikachuutoken",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/officialpikachucoin",
      },
      
    ],
  },
   {
    label: "Medium",
    icon: MediumIcon,
    href: "https://medium.com/@pikachu.supp",
  },
   {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/cyberscope-io/audits/blob/main/1-pikachu/audit.pdf",
  },

  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/solidproof/projects/tree/main/Pikachu%20Token",
  },
  
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
