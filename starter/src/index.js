import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import "./index.css";
//import StarRating from "./starRating";
//import React, { useState } from "react";

// function Test() {
//   const [moviesRating, setMoviesRating] = useState(0);

//
// }
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRatings={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    
    <Test /> */}
  </React.StrictMode>
);
