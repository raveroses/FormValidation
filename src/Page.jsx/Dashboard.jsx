import DashboardHeader from "../Components/DashBoardHeader";
import CardSection from "../Components/CardSection";
import UserContext from "../Context.jsx/UserContext";
import { useContext } from "react";
export default function Dashboard({ handleEndPointChanger }) {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-black pb-30">
      <DashboardHeader user={user} />
      <CardSection handleEndPointChanger={handleEndPointChanger} />
    </div>
  );
}
