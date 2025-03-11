import DashboardHeader from "../Components/DashBoardHeader";
import CardSection from "../Components/CardSection";
import { useState, useContext } from "react";
import UserContext from "../Context.jsx/UserContext";
export default function Dashboard({ handleEndPointChanger }) {
  const { searchInput } = useContext(UserContext);
  const [save, setSave] = useState([]);

  function handleSave(arr) {
    setSave((prev) => [prev, arr]);
  }
  // [...save].flatMap((item) => {
  //   [...item].map((item) => {
  //     // item.map((item) => {
  //     return item.results.map((data) => {
  //       console.log(data.name || data.original_title);
  //       const checkInput = searchInput.split(" ")[0];
  //       console.log(checkInput);
  //       if (
  //         data.original_name.toLowerCase() === searchInput ||
  //         data.original_name.toLowerCase().split(" ")[0] === checkInput
  //       ) {
  //         console.log(data || "no data");
  //       }
  //     });
  //     // if (!Array.from(item)) return [];

  //     return console.log(item);
  //   });
  // });
  [...save].flatMap((item) => {
    //  [...item]
    [...item].map((item) => {
      console.log(item);
      if (!Array.from(item)) return [];
    });
  });

  // const flatten = save.flat(3);
  // // console.log(flatten);
  // flatten.map((item) => {
  //   console.log(item.results);
  // });

  return (
    <div className="bg-black pb-30">
      <DashboardHeader />
      <CardSection
        handleEndPointChanger={handleEndPointChanger}
        handleSave={handleSave}
        save={save}
      />
    </div>
  );
}
