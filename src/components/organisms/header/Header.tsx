import HeaderIcons from "../../molecules/headerIcons/HeaderIcons";
import HeaderLinks from "../../atoms/headerLinks/HeaderLinks";
import Image from "next/image";
import Link from "next/link";

//header component
const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="header-logo">
            <Image
              src="/logo.png"
              fill
              style={{ objectFit: "contain" }}
              alt="logo"
            />
          </div>
        </Link>
      </div>
      <div className="header-links">
        <HeaderLinks />
      </div>
      <HeaderIcons />
    </header>
  );
};

export default Header;
