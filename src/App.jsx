import "./index.css";
import First from "./Page.jsx/First";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import auth from "./Components/FirebaseConfig/FirebaseConfig";
import SignUp from "./Page.jsx/SignUp";
import Dashboard from "./Page.jsx/Dashboard";
import FacebookSign from "./Components/FirebaseConfig/Facebook";
import Login from "./Page.jsx/Login";
import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "./Context.jsx/UserContext";
import DisplayVideo from "./Page.jsx/DisplayVideo";
import MovieTrailer from "./Page.jsx/MovieTrailer";
import MovieSearchPage from "./Page.jsx/MovieSearchPage";
function App() {
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();
  // NAME SIGN UP save
  const [nameSignUp, setNameSignUp] = useState(() => {
    const getter = localStorage.getItem("NameSignUp");
    try {
      return getter ? JSON.parse(getter) : { name: "", password: "" };
    } catch (e) {
      console.error("Error parsing localStorage NameSignUp:", e);
      localStorage.removeItem("NameSignUp");
      return {};
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
  const googleSignUp = async () => {
    try {
      const signn = await signInWithPopup(auth, provider);
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
      console.log(user2);
      await updateProfile(userCredential.user, {
        displayName: userDetail.profileName, // make sure you have this value
      });

      setNameSignUp((prev) => {
        try {
          const setter = {
            ...prev,
            name: auth.currentUser.displayName,
            password: userDetail.password,
          };
          localStorage.setItem("NameSignUp", setter);

          return setter;
        } catch (e) {
          console.log(e);
          return { name: "", password: "" };
        }
      });
      localStorage.removeItem("userDETAILS");
      navigate("/login");

      // const emptyDetails = {
      //   profileName: "",
      //   phoneNumber: "",
      //   email: "",
      //   password: "",
      //   day: "",
      //   month: "",
      //   year: "",
      // };
      // setUserDetail(emptyDetails);
      // localStorage.setItem("details", JSON.stringify(emptyDetails));
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage);
    }
  };
  console.log(user);

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

  useEffect(() => {
    setNameSignUp((prev) => {
      try {
        const saver = {
          ...prev,
          name: userDetail.profileName,
          password: userDetail.password,
        };
        localStorage.setItem("NameSignUp", JSON.stringify(saver));
        return saver;
      } catch (e) {
        localStorage.removeItem("NameSignUp");
        console.log(e.message);
        return {};
      }
    });
  }, [userDetail.password, userDetail.profileName]);
  console.log(nameSignUp);

  // IMPORTED FROM DASHBOARD HEADER

  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(() => {
    try {
      const userImageSaver = localStorage.getItem("userImage");
      return userImageSaver ? JSON.parse(userImageSaver) : "";
    } catch (e) {
      localStorage.removeItem("userImage");
      return "";
    }
  });
  const [loading, setLoading] = useState(false);
  const ImageUploader = async () => {
    console.log("clicked");
    const file = inputRef.current?.files?.[0];
    console.log(file);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("api_key", 611141645977692);
      formData.append("upload_preset", "profile");
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/diptafc1s/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        setPreviewUrl(() => {
          const userImageSaver = data.secure_url;
          localStorage.setItem("userImage", JSON.stringify(userImageSaver));
          return userImageSaver;
        });
        toast.success("Image Uploaded successfully");
      } catch (e) {
        toast.error("Image Uploaded failed");
      } finally {
        setLoading(false);
      }
    }
  };

  const [openUserDetail, setOpenUserDetail] = useState(false);

  const handleOpenUserDetail = () => {
    setOpenUserDetail((prev) => !prev);
  };
  console.log(openUserDetail);

  // ENDING OF DASHBOARDHEADER
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
        inputRef,
        previewUrl,
        loading,
        ImageUploader,
        openUserDetail,
        handleOpenUserDetail,
      }}
    >
      <Routes>
        <Route
          path="/"
          index
          element={
            <First GoogleSignUp={googleSignUp} FacebookSign={FacebookSign} />
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
