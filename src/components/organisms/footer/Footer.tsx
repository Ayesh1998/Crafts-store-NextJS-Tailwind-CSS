import FooterContact from "../../atoms/footerContact/FooterContact";
import FooterOptionList from "../../molecules/footerOptionList/FooterOptionList";
import { footerOptions } from "../../../constants/footerOptions";

//footer component
const Footer = () => {
  return (
    <footer>
      <div className="mx-10 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {footerOptions.map((option, index) => (
            <FooterOptionList key={index} header={option.header} options={option.options} />
          ))}
          <FooterContact />
        </div>
      </div>
      <div className="bg-[#1B1B1B] p-6 text-center text-secondary-text">
        <span>© 2023 Copyright: </span>
        <a className="font-semibold text-secondary-text" href="">
          Ayesh Web Arts
        </a>
      </div>
    </footer>
  );
};

export default Footer;
