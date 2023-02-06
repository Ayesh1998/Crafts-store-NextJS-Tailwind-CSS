import FooterOption from "../../atoms/footerOption/FooterOption";

interface Props {
  header: string;
  options: string[];
}

//footer options list component
const FooterOptionList = ({ header, options }: Props) => {
  return (
    <div className="">
      <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
        {header}
      </h6>
      {options.map((option, index) => (
        <FooterOption option={option} key={index} />
      ))}
    </div>
  );
};

export default FooterOptionList;
