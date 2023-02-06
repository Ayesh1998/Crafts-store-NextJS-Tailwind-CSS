interface Props {
  name: string;
  price: string;
}

//single craft name and price components
const CraftNamePrice = ({ name, price }: Props) => {
  return (
    <div className="space-y-2 text-xl text-secondary-text md:text-2xl">
      <p>{name}</p>
      <p>Rs.{price}.00</p>
    </div>
  );
};

export default CraftNamePrice;
