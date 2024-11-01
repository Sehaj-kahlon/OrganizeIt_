import React, { useEffect, useState, useRef } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import "./components.css";
import img from "../assets/logo.png";
import Homepage from "./homepage";
function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        {userDetails ? (
          <div className="d-flex justify-content-between w-100 align-items-center">
            <div className="navbar-brand mb-0">
              <img src={img} alt="Logo" className="logo" />
              <h3 className="title">OrganizeIt</h3>
            </div>
            <div className="user-data">
              <button className="btn" onClick={toggleMenu}>
                <i class="fa-regular fa-user icon-large"></i>
              </button>
              {showMenu && (
                <div
                  ref={dropdownRef}
                  className="dropdown-menu dropdown-menu-right show user-data-menu"
                >
                  <p className="dropdown-item disabled">
                    Welcome, {userDetails.firstName}
                  </p>
                  <p className="dropdown-item">{userDetails.email}</p>
                  {/* <p className="dropdown-item">
                    Name - {userDetails.firstName}
                  </p> */}
                  <button
                    className="dropdown-item logout"
                    onClick={handleLogout}
                  >
                    Logout&nbsp;
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
      <Homepage />
    </div>
  );
}

export default Profile;
