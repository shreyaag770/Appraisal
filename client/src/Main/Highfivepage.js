import React from "react";

import { Link } from "react-router-dom";

const Highfive = () => {
  return (
    <div>
      <div>Do you want to send Highfive ?</div>
      <Link to="/">
        <button>Yes</button>
      </Link>
      <Link to="/">
        <button>No</button>
      </Link>
    </div>
  );
};

export default Highfive;
