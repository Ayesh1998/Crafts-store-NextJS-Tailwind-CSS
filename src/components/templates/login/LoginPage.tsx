import LoginBackground from "../../atoms/loginBackground/LoginBackground";
import LoginForm from "../../organisms/loginForm/LoginForm";
import PageHead from "../../atoms/pageHead/PageHead";

//login component
const LoginPage = () => {
  return (
    <div className="bg-[#141414] bg-opacity-60">
      <div className="login-page-wrapper">
        <PageHead icon="/logo.png" title="Login" />
        <LoginBackground />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
