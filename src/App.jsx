import "./index.css";
import First from "./Page.jsx/First";
import { Routes, Route, useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "./Components/FirebaseConfig/FirebaseConfig";
import SignUp from "./Page.jsx/SignUp";
import Dashboard from "./Page.jsx/Dashboard";
import FacebookSign from "./Components/FirebaseConfig/Facebook";
import Login from "./Page.jsx/Login";
import { useState, useEffect, useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import UserContext from "./Components/UserContext";
function App() {
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  const navigate = useNavigate();
  const GoogleSignUp = async () => {
    try {
      const signn = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(signn);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = signn.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      navigate("/dashboard");
      console.log(user);
      console.log(token);
    } catch (error) {
      // // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.customData.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...

      console.log(error.message);
    }
  };

  // THE SIGNUP PAGE PASTE

  const [userDetail, setUserDetail] = useState(() => {
    const user = localStorage.getItem("details");
    return user
      ? JSON.parse(user)
      : {
          profileName: "",
          phoneNumber: "",
          email: "",
          password: "",
          day: "",
          month: "",
          year: "",
        };
  });

  const [errorMessages, setErrorMessages] = useState([]);

  const [checko, setChecko] = useState("");
  const handleCheck = (e) => {
    setChecko(e.target.value);
  };
  const handleValidation = () => {
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

    if (
      !userDetail.profileName.trim() ||
      !userDetail.phoneNumber.trim() ||
      !emailRegex.test(userDetail.email.trim()) ||
      !userDetail.password.trim() ||
      !userDetail.day ||
      !userDetail.month ||
      !userDetail.year
    ) {
      alert("Please fill all the required field");
      return false;
    }
    if (!checko) {
      alert("Agree to the term and Condition");
      return false;
    }
    return true;
  };

  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);
  const [countdown, setCountDown] = useState(300);
  const intervalRef = useRef(null);
  const [cancel, setCancel] = useState(false);
  const handleCancel = () => {
    setCancel(true);
  };
  // const [errorMessages, setErrorMessages] = useState({});

  const handleSubmission = async (e) => {
    e.preventDefault();
    if (!handleValidation()) return;

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userDetail.email.trim(),
        userDetail.password.trim()
      );
      const user = userCredential.user;
      navigate("/login");

      console.log(user);
      setUserDetail({
        profileName: "",
        phoneNumber: "",
        email: "",
        password: "",
        day: "",
        month: "",
        year: "",
      });
      localStorage.removeItem("details");
    } catch (error) {
      setErrorLoading(true);
      setErrorMessages((prev) => [...prev, error.message]);
    }
  };

  const [passwordToggling, setPasswordToggling] = useState(false);
  const passwordToggle = () => {
    setPasswordToggling((prev) => !prev);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prev) => {
      const userSaved = { ...prev, [name]: value };
      localStorage.setItem("details", JSON.stringify(userSaved));
      return userSaved;
    });
  };

  const [gender, setGender] = useState(() => {
    const save = localStorage.getItem("gender");
    return save ? JSON.parse(save) : "";
  });
  const handleToggling = (e) => {
    setGender(() => {
      const save = e.target.value;
      localStorage.setItem("gender", JSON.stringify(save));
      return save;
    });
  };

  const monthsListing = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleDate = (i) => {
    setUserDetail((prev) => {
      const saver = { ...prev, day: i };
      localStorage.setItem("details", JSON.stringify(saver));
      return saver;
    });
  };
  const handleMonth = (i) => {
    setUserDetail((prev) => {
      const saver = { ...prev, month: i };
      localStorage.setItem("details", JSON.stringify(saver));
      return saver;
    });
  };

  const handleYear = (i) => {
    setUserDetail((prev) => {
      const saver = { ...prev, year: i };
      localStorage.setItem("details", JSON.stringify(saver));
      return saver;
    });
  };

  const date = Array.from({ length: 31 }, (_, i) => {
    return (
      <li
        key={i + 1}
        className="hover:bg-gray-500"
        onClick={() => handleDate(i + 1)}
      >
        {i + 1}
      </li>
    );
  });
  const years = Array.from({ length: 2025 + 1 }, (_, i) => {
    return (
      <li key={i} className="hover:bg-gray-500" onClick={() => handleYear(i)}>
        {i}
      </li>
    );
  });
  const month = monthsListing.map((item, i) => {
    return (
      <li
        key={i}
        className="hover:bg-gray-500 mb-[2px]"
        onClick={() => handleMonth(item)}
      >
        {item}
      </li>
    );
  });

  return (
    <UserContext.Provider
      value={{
        month,
        date,
        years,
        handleMonth,
        handleDate,
        handleYear,
        handleToggling,
        gender,
        onChange,
        passwordToggle,
        passwordToggling,
        checko,
        handleCheck,
        handleSubmission,
        userDetail,
        loading,
        errorLoading,
        errorMessages,
      }}
    >
      <Routes>
        <Route
          path="/"
          index
          element={
            <First GoogleSignUp={GoogleSignUp} FacebookSign={FacebookSign} />
          }
        />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserContext.Provider>
  );
}
export default App;
