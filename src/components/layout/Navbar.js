import React from "react";
import { Link } from "react-router-dom";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import { useStateValue } from "../../context/GlobalState";
import { motion } from "framer-motion";
import { projectAuth } from "../../config/firebase";

const Navbar = () => {
  const [{ cart, user }] = useStateValue();

  const login = () => {
    if (user) {
      projectAuth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/" className="header__logo">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/brown-sandbox.appspot.com/o/Brown_Commerce%2FLogo%20Light.svg?alt=media&token=a781ccc7-8262-4cb2-a7a4-0199d5c1e331"
          alt="brown commerce logo"
        />
        <div>
          <strong>Brown</strong>
          <span>Commerce</span>
        </div>
      </Link>

      <div className="header__search">
        {/* <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" /> */}
      </div>

      {/* 3 links */}
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello, {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        {/* <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& Order</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link> */}
      </div>

      <Link to="/checkout" className="header__link header__cart">
        <div className="header__optionBasket">
          <LocalGroceryStoreIcon style={{ fontSize: 30 }} />
          {cart.length > 0 && (
            <motion.span
              initial={{ scale: 30, opacity: 0.1 }}
              animate={{ rotate: 360, scale: 1, opacity: 1 }}
              transition={{
                ease: "easeOut",
                duration: 0.1,
                type: "spring",
                stiffness: 80,
              }}
              className="header__basketCount"
            >
              {cart?.length}
            </motion.span>
          )}
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
