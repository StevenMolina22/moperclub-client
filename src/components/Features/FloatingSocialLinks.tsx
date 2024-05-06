import "../../scss/IconCompanyMenu.scss";

import {
  ArrowUpOnSquareStackIcon,
  EllipsisVerticalIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/solid";

export const FloatingSocialLinks = () => {
  const lowerLinksInfo = [
    // based on current scss, there can only be 3 apps
    {
      name: "Youtube",
      class: "company-menu__app1",
      icon: <ArrowUpOnSquareStackIcon className="" />,
      url: "https://www.youtube.com",
    },
    {
      name: "Instagram",
      class: "company-menu__app2",
      icon: <CursorArrowRaysIcon className="" />,
      url: "https://www.instagram.com",
    },
    {
      name: "Linkedin",
      class: "company-menu__app3",
      icon: <ArrowUpOnSquareStackIcon className="" />,
      url: "https://www.linkedin.com",
    },
  ];
  return (
    <div className="company-menu ">
      {lowerLinksInfo.map((lowerLink, index) => (
        <a
          className={`bg_links company-menu__social ${lowerLink.class}`}
          href={lowerLink.url}
          target="_blank"
          key={index}
        >
          <span className="info-icon p-2">{lowerLink.icon}</span>
        </a>
      ))}

      {/* Main lower link (show/hide) */}
      <a className="bg_links company-menu__logo p-2">
        <EllipsisVerticalIcon className=" text-white" />
      </a>
    </div>
  );
};
