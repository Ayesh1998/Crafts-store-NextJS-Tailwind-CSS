import Image from "next/image";

//login page background component
const LoginBackground = () => {
  return (
    <>
      <Image
        src="/loginBackground.jpg"
        fill
        className="-z-10 !hidden opacity-60 sm:!inline"
        style={{ objectFit: "cover" }}
        alt=""
      />
      <img
        src="/logo.png"
        className="login-logo h-18"
      />
    </>
  );
};

export default LoginBackground;
