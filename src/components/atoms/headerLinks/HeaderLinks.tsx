import Link from "next/link";

//header links component
const HeaderLinks = () => {
  return (
    <>
      <a className="headerLink">Product</a>
      <Link href="/" className="headerLink">
        Explore
      </Link>
      <Link href="/analytics" className="headerLink">
        Analytics
      </Link>
      <a className="headerLink">Support</a>
    </>
  );
};

export default HeaderLinks;
