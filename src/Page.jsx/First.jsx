import Header from "../Components/Header";
import Body from "../Components/Body";
export default function First({ GoogleSignUp, FacebookSign }) {
  return (
    <>
      <Header />
      <Body GoogleSignUp={GoogleSignUp} FacebookSign={FacebookSign} />
    </>
  );
}
