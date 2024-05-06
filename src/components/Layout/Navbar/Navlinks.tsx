// NavLinks.tsx
import React from 'react';
import { FaEllipsisVertical } from 'react-icons/fa6';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Nosotros', href: '/about' },
  { label: 'Recomendaciones', href: '/recommended' },
  { label: 'Productos', href: '/store' },
  { label: 'Blog', href: '/blog' },
];

const NavLinks = () => {
  return (
    <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform lg:mx-auto lg:flex lg:w-auto lg:items-center lg:space-x-6">
      {navLinks.map((link, index) => (
        <React.Fragment key={index}>
          <li>
            <a
              className={`text-sm ${
                index === 0
                  ? 'font-bold text-red-600 hover:text-red-700'
                  : 'text-gray-400 hover:text-gray-500'
              }`}
              href={link.href}
            >
              {link.label}
            </a>
          </li>
          {index !== navLinks.length - 1 && (
            <li className="text-gray-300">
              <FaEllipsisVertical className="text-sm" />
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default NavLinks;