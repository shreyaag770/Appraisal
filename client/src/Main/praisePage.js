import React from "react";
import { Link } from "react-router-dom";

const Praise = () => {
  console.log("ndjenjrnfrnijfrnjrfnrffnjifrnjirfnjif")
  let hash = window.location.hash;
  console.log(hash)
  return (
    <div>
      <div>Do you want to praise ?</div>
      <Link to="/">
        <button>Yes</button>
      </Link>
      <Link to="/">
        <button>No</button>
      </Link>
    </div>
  );
};

export default Praise;
