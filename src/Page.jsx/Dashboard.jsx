import DashboardHeader from "../Components/DashBoardHeader";
import CardSection from "../Components/CardSection";
export default function Dashboard({ handleEndPointChanger }) {
  return (
    <div className="bg-black pb-30">
      <DashboardHeader />
      <CardSection handleEndPointChanger={handleEndPointChanger} />
    </div>
  );
}
