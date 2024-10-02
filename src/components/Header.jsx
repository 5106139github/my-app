import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/contents";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [btnnameReact, setbtnReact] = useState("Login");

  let chuckstatus = useOnlineStatus()

  return (
    <div className="headerfixed">
      <div className="m-5 bg-red-50 " >
      <div className="flex">
        <img className="h-20 w-20 "
          src={LOGO_URL}
          alt=""
        />
        <h1 style={{margin:'auto',marginLeft:'20px'}}>Restaurents at <span  style={{color:'red'}}>NAGAVARA</span></h1>
        <ul className="flex items-center">
          <li>Status : {chuckstatus ? '🟢' : '🔴'}</li>
          <li className="px-5">
            <Link to="/" className="li_links">
              Home
            </Link>
          </li>

          <li className="px-5">
            <Link to="/about" className="li_links">About</Link>
          </li>
          <li className="px-5">
            <Link to="/contact" className="li_links">Contact</Link>
          </li>
          <li className="px-5">
            <Link to="/glosory" className="li_links">Glosory</Link>
          </li>
          <li className="px-5">
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
          <li className="px-5">
            <button
              className="bg-white px-4"
              onClick={() => {
                btnnameReact === "Login"
                  ? setbtnReact("Logout")
                  : setbtnReact("Login");
              }}
            >
              {btnnameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Header;
