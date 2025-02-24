// import { useState } from "react";
// import { toast } from "react-toastify";

// export default function useFetch(url) {
//   //   console.log(import.meta.env.VITE_API_KEY);
//   const key = import.meta.env.VITE_API_KEY;
//   console.log(key);
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       //   Authorization:
//       // "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjNjYWI1NGIwMWVjMDYzNGFhZTBkNmZjOTA1NDExYiIsIm5iZiI6MTc0MDIyNDc4MS4xNDUsInN1YiI6IjY3YjliOTBkYmQ0OGU4OTI0Y2JlYWFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nHt_QIQVawWnfSC-EAxHJCrJhjh64q8U4hOqE_4G4X8",
//       Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
//     },
//   };

//   const [dataSetter, setDataSetter] = useState([]);

//   const [loading, setLoading] = useState(false);
//   const fetchMovie = async () => {
//     setLoading(true);
//     console.log("working...");
//     try {
//       const response = await fetch(url, options);
//       if (!response.ok)
//         throw new Error(`Error ${response.status}: ${response.statusText}`);

//       const data = await response.json();
//       console.log(data);
//       setDataSetter(data);
//     } catch (err) {
//       toast.error(err);
//       console.log(err.message);
//     }
//   };
//   return { dataSetter, loading, fetchMovie };
// }
