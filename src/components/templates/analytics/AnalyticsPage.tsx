import AdminAnalytics from "../../organisms/adminAnalytics/AdminAnalytics";
import PageHead from "../../atoms/pageHead/PageHead";
import { Roles } from "../../../constants/enums";
import UserAnalytics from "../../organisms/userAnalytics/UserAnalytics";
import { selectRole } from "../../../redux/selectors/authSelector";
import { useSelector } from "react-redux";

//Analytics Page component
const AnalyticsPage = () => {
  const role = useSelector(selectRole);

  return (
    <div className="min-h-screen bg-primary-background px-4 pb-10 pt-10 lg:px-10">
      <PageHead icon="/logo.png" title="Analytics" />
      {role === Roles.ADMIN ? <AdminAnalytics /> : <UserAnalytics />}
    </div>
  );
};

export default AnalyticsPage;
