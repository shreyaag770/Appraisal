import React from "react";
import { Link } from "react-router-dom";




const Praise = () => {


  
  return (
    <div>
<div>Do you want to praise ?</div>
<Link to="/">
        <button>
          Yes
        </button>
        </Link>
        <Link to="/">
       <button>
           No
        </button>
        </Link>

    </div>
  



    
  );
};

export default Praise;
