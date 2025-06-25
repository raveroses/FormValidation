import Header from "../Components/Header";
import Body from "../Components/Body";
export default function First({ FacebookSign }) {
  return (
    <>
      <Header />
      <Body FacebookSign={FacebookSign} />
    </>
  );
}
