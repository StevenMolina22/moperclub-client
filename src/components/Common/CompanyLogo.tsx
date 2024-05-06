// Logo.tsx
import logo from '../../assets/img/logotipo.png';

const Logo = () => {
  return (
    <a className="text-3xl font-bold leading-none" href="/">
      <img style={{ height: '32px' }} src={logo} alt="Logo" />
    </a>
  );
};

export default Logo;