// SocialIcons.tsx
import React from 'react';

interface SocialIconData {
  icon: React.ReactNode;
  link: string;
  label: string;
}

const SocialIcons = ({ socialIconsData }: { socialIconsData: SocialIconData[] }) => {
  return (
    <div className="mt-4 flex sm:mt-0 sm:justify-center">
      {socialIconsData.map((icon, index) => (
        <a
          key={index}
          href={icon.link}
          className={`${index > 0 ? 'ms-5' : ''} text-gray-500 hover:text-gray-900 dark:hover:text-white`}
        >
          {icon.icon}
          <span className="sr-only">{icon.label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;