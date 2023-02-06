interface Props {
  option: string;
}

//footer option component
const FooterOption = ({ option }: Props) => {
  return (
    <p className="mb-4">
      <a href="#!" className="text-primary-text-500">
        {option}
      </a>
    </p>
  );
};

export default FooterOption;
