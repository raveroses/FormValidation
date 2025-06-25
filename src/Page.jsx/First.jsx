import Header from "../Components/Header";
import Body from "../Components/Body";
export default function First({ googleSignUp, FacebookSign }) {
  return (
    <>
      <Header />
      <Body GoogleSignUp={googleSignUp} FacebookSign={FacebookSign} />
    </>
  );
}
