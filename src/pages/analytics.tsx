import AnalyticsPage from "../components/templates/analytics/AnalyticsPage";
import Footer from "../components/organisms/footer/Footer";
import Header from "../components/organisms/header/Header";
import { login } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

//Analytics component
const Analytics = () => {
  const dispatch = useDispatch();
  const { status, data } = useSession();

  //dispatch login if user is authenticated
  useEffect(() => {
    if (status === "authenticated")
      dispatch(login({ role: data?.user?.role, id: data?.user?.id }));
  }, [status]);
  return (
    <>
      <Header />
      <AnalyticsPage />
      <Footer />
    </>
  );
};

export default Analytics;
