// MenuItems.tsx

interface MenuItemData {
  title: string;
  items: { label: string; link: string }[];
}

const MenuItems = ({ menuData }: { menuData: MenuItemData[] }) => {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
      {menuData.map((menu, index) => (
        <div key={index}>
          <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
            {menu.title}
          </h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            {menu.items.map((item, itemIndex) => (
              <li key={itemIndex} className="mb-4">
                <a href={item.link} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;