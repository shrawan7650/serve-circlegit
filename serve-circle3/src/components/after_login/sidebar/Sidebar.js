import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaUser } from "react-icons/fa";
import { IoExtensionPuzzle } from "react-icons/io5";
import { BiCog } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineVideoSettings } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineBranches } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import "./Sidebar.css";
import SidebarMenu from './SidebarMenu';
import { MdHelpCenter } from "react-icons/md";
import { FaGooglePlay } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";
import { PiUsersThree } from "react-icons/pi";
import { FaNoteSticky } from "react-icons/fa6";
import { GrLicense } from "react-icons/gr";
import { IoSpeedometer } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <IoSpeedometer />
  },
  {
    path: "/branches",
    name: "Branches",
    icon: <AiOutlineBranches />
  },
  {
    path: "/pricing",
    name: "Pricing",
    icon:<FaDatabase />
  },
  {
    path: "/add_ons",
    name: "Add Ons",
    icon: <IoExtensionPuzzle />
  },
  {
    path: "/reports",
    name: "Reports",
    icon: <BsCartCheck />
  },
  {
    path: "/refer_and_earn",
    name: "Refer and earn",
    icon: <AiFillHeart />
  },
  {
    path: "/setting",
    name: "Setting",
    icon: <BiCog />,
    subRoutes: [
      {
        path: "/settings/manage_profile",
        name: "Manage Profile",
        icon: <FaRegUser />
      },
      {
        path: "/settings/Taxes",
        name: "Taxes",
        icon: <CiShoppingTag />
      },
      {
        path: "/settings/users",
        name: "Users",
        icon: <PiUsersThree />
      },
      {
        path:"/settings/channels",
        name:"Channels",
        icon:<PiUsersThree />
      },
      {
        path:"/settings/distributors",
        name:"Disributors",
        icon:<PiUsersThree />
      },
      {
        path: "/settings/claim_types",
        name:"Claim Types",
        icon:<FaNoteSticky />
      },
      {
      path:"/settings/licences",
      name:"Licences",
      icon:<GrLicense />
      }
    ]
  },
  {
    path:"/help_videos",
    name:"Help Videos",
    icon:<MdOutlineVideoSettings />
  },
  {
    path:"/help_center",
    name:"Help center",
    icon:<MdHelpCenter />
  },
  {
    path:"/mobile_app",
    name:"Mobile App",
    icon:<FaGooglePlay />
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />
  },
  {
    path:"/logout",
    name:"Log Out",
    icon: <CiLogout />
  }
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();  // Add this line for navigation

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Clear user session data here (e.g., localStorage, cookies)
    localStorage.removeItem('userToken'); // Example, adjust as necessary

    // Redirect to login page
    navigate('/login');
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="main-container_sidebar">
      <motion.div
        animate={{
          width: isOpen ? "200px" : "35px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 11,
          },
        }}
        className="sidebar_main"
      >
        <div className="top_section_sidebar">
          {isOpen && (
            <motion.h1
              variants={showAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="logo_sidebar"
            >
              <img src="https://s3.ap-south-1.amazonaws.com/servecirclesource/img/sc-new-logo.png" alt="serve_log" />
            </motion.h1>
          )}
          <div className="bars_sidebar">
            <FaBars onClick={toggle} />
          </div>
        </div>
        
        <section className="routes_sidebar">
          {routes.map((route, index) => {
            if (route.subRoutes) {
              return (
                <SidebarMenu
                  showAnimation={showAnimation}
                  isOpen={isOpen}
                  route={route}
                  key={route.name}
                />
              );
            }
            return (
              <NavLink
                activeClassName="active_sidebar"
                to={route.path}
                key={index}
                className="Link"
                onClick={route.path === "/logout" ? handleLogout : undefined}  // Add onClick handler here
              >
                <div className="icon_sidebar">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
