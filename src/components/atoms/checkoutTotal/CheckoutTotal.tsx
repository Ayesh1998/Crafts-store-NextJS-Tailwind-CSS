interface Props {
  basketTotal: number;
}

//checkout total component
const CheckoutTotal = ({ basketTotal }: Props) => {
  return (
    <div className="divide-y divide-gray-300">
      <div className="pb-4">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>Rs.{basketTotal}.00</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>FREE</p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-x-1 lg:flex-row">Estimated tax</div>
          <p>Rs. -</p>
        </div>
      </div>

      <div className="flex justify-between divide-none pt-4 text-xl font-semibold">
        <h4>Total</h4>
        <h4>Rs.{basketTotal}.00</h4>
      </div>
    </div>
  );
};

export default CheckoutTotal;
