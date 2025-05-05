import "./index.css";
import First from "./Page.jsx/First";
import { Routes, Route, useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "./Components/FirebaseConfig/FirebaseConfig";
import SignUp from "./Page.jsx/SignUp";
import Dashboard from "./Page.jsx/Dashboard";
import FacebookSign from "./Components/FirebaseConfig/Facebook";
import Login from "./Page.jsx/Login";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "./Context.jsx/UserContext";
import DisplayVideo from "./Page.jsx/DisplayVideo";
import MovieTrailer from "./Page.jsx/MovieTrailer";
import MovieSearchPage from "./Page.jsx/MovieSearchPage";
function App() {
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  const navigate = useNavigate();
  // NAME SIGN UP save
  const [nameSignUp, setNameSignUp] = useState(() => {
    const getter = localStorage.getItem("NameSignUp");
    try {
      return getter ? JSON.parse(getter) : { name: "" };
    } catch (e) {
      console.error("Error parsing localStorage NameSignUp:", e);
      localStorage.removeItem("NameSignUp");
      return { name: "" };
    }
  });

  // THE POP UP DETAILS localStorage
  const [user, setUser] = useState(() => {
    try {
      const getter = localStorage.getItem("userDETAILS");
      // console.log(JSON.parse(getter));
      return getter ? JSON.parse(getter) : {};
    } catch (e) {
      console.error("Failed to parse userDETAILS:", e);
      localStorage.removeItem("userDETAILS"); // clean up
      return {};
    }
  });

  // THE SIGNUP PAGE DETAILS PASTE

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
  // console.log(user);
  const GoogleSignUp = async () => {
    try {
      const signn = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(signn);
      const token = credential.accessToken;
      const user = signn.user;
      navigate("/dashboard");
      setUser((prev) => {
        const setter = { ...prev, user };
        localStorage.setItem("userDETAILS", JSON.stringify(setter));
        return setter;
      });
    } catch (error) {
      localStorage.removeItem("userDETAILS");
      toast.error(error.message);
      return {};
    }
  };

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

  const handleSubmission = async (e) => {
    e.preventDefault();
    if (!handleValidation()) return;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userDetail.email.trim(),
        userDetail.password.trim()
      );
      const user2 = userCredential.user;

      navigate("/login");

      const emptyDetails = {
        profileName: "",
        phoneNumber: "",
        email: "",
        password: "",
        day: "",
        month: "",
        year: "",
      };
      setUserDetail(emptyDetails);
      localStorage.setItem("details", JSON.stringify(emptyDetails));
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage);
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
  console.log(userDetail);
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
  const [endpointChanger, setEndPointChanger] = useState("");
  // console.log(endpointChanger);
  const handleEndPointChanger = () => {
    console.log("...working");
    setEndPointChanger("tv");
  };
  const [searchInput, setSearchInput] = useState("");

  const handleInput = (e) => {
    setSearchInput(e.target.value.trim().toLowerCase());
  };

  // SAVING THE USERDETAILS

  useEffect(() => {
    setNameSignUp((prev) => {
      try {
        const saver = { ...prev, name: userDetail.profileName };
        localStorage.setItem("NameSignUp", JSON.stringify(saver));
        return saver;
      } catch (e) {
        localStorage.removeItem("NameSignUp");
        console.log(e.message);
        return {};
      }
    });
  }, []);

  console.log(nameSignUp);
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
        endpointChanger,
        handleEndPointChanger,
        searchInput,
        handleInput,
        user,
        nameSignUp,
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
        <Route path="/video/:videoId" element={<DisplayVideo />} />
        <Route path="/trailer" element={<MovieTrailer />} />
        <Route path="/search" element={<MovieSearchPage />} />
      </Routes>
    </UserContext.Provider>
  );
}
export default App;
