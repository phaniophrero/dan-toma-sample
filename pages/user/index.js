import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaMinus } from "react-icons/fa6";
import { LuSettings } from "react-icons/lu";
import { MdVideoLibrary } from "react-icons/md";
import { GoSignOut } from "react-icons/go";

import UserSettings from "../../components/UserSettings/UserSettings";

const dataCoursesContinueWatching = [
  {
    id: 1,
    tag: "#3",
    title: "Course Stock",
    // image:
  },
  {
    id: 2,
    tag: "#22",
    title: "Course Crypto",
    // image:
  },
  {
    id: 3,
    tag: "#6",
    title: "Course Stock",
    // image:
  },
];
const dataCourses = [
  {
    id: 1,
    title: "Course Stock",
    // image:
  },
  {
    id: 2,
    title: "Course Crypto",
    // image:
  },
  {
    id: 3,
    title: "Course Stock",
    // image:
  },
];

const dropdown = [
  {
    id: 1,
    name: "My Courses",
    path: "",
    icon: <MdVideoLibrary />,
  },
  {
    id: 2,
    name: "Settings",
    path: "",
    icon: <LuSettings />,
  },
  {
    id: 3,
    name: "Sign out",
    path: "",
    icon: <GoSignOut />,
  },
];

const UserPage = () => {
  const [activeTab, setActiveTab] = useState("MyCourses");
  const [activeDropdown, setActiveDropdown] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleDropDown = () => {
    setActiveDropdown(!activeDropdown);
  };

  const handleTabActive = (tab) => {
    if (tab !== "MyCourses") {
      setActiveTab("Settings");
    } else {
      setActiveTab("MyCourses");
    }
  };

  return (
    <div className="user-profile-page">
      <nav className="user-profile-page-nav">
        <div className="user-profile-page-logo-wrapper">
          <img
            className="user-profile-page-logo"
            src="/images/logo-dan-stock.png"
            alt="logo"
          />
        </div>
        <div className="user-profile-username-menu">
          <div
            className="user-profile-username-wrapper"
            onClick={() => setActiveDropdown(!activeDropdown)}
          >
            <h3 className="user-profile-username">Robert</h3>
            <div className="user-profile-img-wrapper">
              <span className="user-profile-img"></span>
            </div>
            <span className="user-profile-icon">
              {!activeDropdown ? <FaChevronDown /> : <FaMinus />}
            </span>
          </div>
          {/* {activeDropdown && ( */}
          <div
            ref={dropdownRef}
            className={`dropdown ${activeDropdown ? "active" : "inactive"}`}
          >
            <ul className="dropdown-list">
              {dropdown.map((item) => (
                <li key={item.id} className="dropdown-item">
                  <span>{item.icon}</span> {item.name}
                </li>
              ))}
            </ul>
          </div>
          {/* )} */}
        </div>
      </nav>
      <div className="user-profile-page-nav-2">
        <div className="user-profile-page-nav-2-item">
          <button
            onClick={() => handleTabActive("MyCourses")}
            className={`user-profile-page-nav-2-btn ${
              activeTab === "MyCourses" ? "active" : ""
            }`}
          >
            My Courses
          </button>
        </div>
        <div className="user-profile-page-nav-2-item">
          <button
            onClick={() => handleTabActive("Settings")}
            className={`user-profile-page-nav-2-btn ${
              activeTab === "Settings" ? "active" : ""
            }`}
          >
            Settings
          </button>
        </div>
      </div>

      {/*Content  */}
      {activeTab === "MyCourses" && (
        <div className="user-profile-page-content">
          <div className="user-profile-page-content-section">
            <div className="user-profile-page-content-section-title-wrapper">
              <h2 className="user-profile-page-content-section-title">
                CONTINUE WATCHING
              </h2>
            </div>
            <div className="user-profile-page-content-card-wrapper">
              {dataCoursesContinueWatching.map((item) => (
                <div className="user-profile-page-content-card" key={item.id}>
                  <span className="user-profile-page-content-card-video"></span>
                  <h3 className="user-profile-page-content-card-video-title">
                    <span>{item.tag} </span>
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div className="user-profile-page-content-section">
            <div className="user-profile-page-content-section-title-wrapper">
              <h2 className="user-profile-page-content-section-title">
                COURSES
              </h2>
            </div>
            <div className="user-profile-page-content-card-wrapper">
              {dataCourses.map((item, index) => (
                <div className="user-profile-page-content-card" key={index}>
                  <span className="user-profile-page-content-card-video"></span>
                  <h3 className="user-profile-page-content-card-video-title">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {activeTab === "Settings" && <UserSettings />}
    </div>
  );
};

export default UserPage;
