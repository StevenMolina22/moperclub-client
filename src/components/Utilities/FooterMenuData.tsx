// utils.ts
import { FaFacebookF, FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

export const menuData = [
  {
    title: 'Resources',
    items: [
      { label: 'Moperclub', link: 'https://flowbite.com/' },
      { label: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
    ],
  },
  {
    title: 'Follow us',
    items: [
      { label: 'Github', link: 'https://github.com/themesberg/flowbite' },
      { label: 'Discord', link: 'https://discord.gg/4eeurUVvTy' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Privacy Policy', link: '#' },
      { label: 'Terms & Conditions', link: '#' },
    ],
  },
];

export const socialIconsData = [
  {
    icon: <FaFacebookF />,
    link: '#',
    label: 'Facebook page',
  },
  {
    icon: <FaDiscord />,
    link: '#',
    label: 'Discord community',
  },
  {
    icon: <FaTwitter />,
    link: '#',
    label: 'Twitter page',
  },
  {
    icon: <FaGithub />,
    link: '#',
    label: 'GitHub account',
  },
  {
    icon: <TbWorldWww />,
    link: '#',
    label: 'Dribbble account',
  },
];