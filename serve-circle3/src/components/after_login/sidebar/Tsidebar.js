import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaUser, FaGooglePlay, FaRegUser, FaDatabase } from 'react-icons/fa';
import { IoExtensionPuzzle, IoSpeedometer } from 'react-icons/io5';
import { BiCog } from 'react-icons/bi';
import { AiFillHeart, AiOutlineBranches } from 'react-icons/ai';
import { MdOutlineVideoSettings, MdHelpCenter } from 'react-icons/md';
import { BsCartCheck } from 'react-icons/bs';
import { CiShoppingTag, CiLogout } from 'react-icons/ci';
import { PiUsersThree } from 'react-icons/pi';
import { FaNoteSticky } from 'react-icons/fa6';
import { GrLicense } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import TsidebarMenu from './TsidebarMenu';

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <IoSpeedometer />
  },
  {
    path: "/branches",
    name: "Branches",
    icon: <AiOutlineBranches />,
    subRoutes: [
      { path: "/services", name: "Services" },
      { path: "/sales", name: "Sales" },
      { path: "/inventory", name: "Inventory" },
      { path: "/distribution", name: "Distribution" },
      { path: "/purchases", name: "Purchases" },
      { path: "/shipments", name: "Shipments" },
      { path: "/receivables", name: "Receivables" },
      { path: "/returns_and_credits", name: "Returns & Credits" },
      { path: "/claims", name: "Claims" },
      { path: "/escalation", name: "Escalation" }
    ]
  },
  {
    path: "/pricing",
    name: "Pricing",
    icon: <FaDatabase />
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
    name: "Refer and Earn",
    icon: <AiFillHeart />
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Manage Profile",
        icon: <FaRegUser />
      },
      {
        path: "/settings/taxes",
        name: "Taxes",
        icon: <CiShoppingTag />
      },
      {
        path: "/settings/users",
        name: "Users",
        icon: <PiUsersThree />
      },
      {
        path: "/settings/channels",
        name: "Channels",
        icon: <PiUsersThree />
      },
      {
        path: "/settings/distributors",
        name: "Distributors",
        icon: <PiUsersThree />
      },
      {
        path: "/settings/claim_types",
        name: "Claim Types",
        icon: <FaNoteSticky />
      },
      {
        path: "/settings/licenses",
        name: "Licenses",
        icon: <GrLicense />
      },
    ]
  },
  {
    path: "/mobile_app",
    name: "Mobile App",
    icon: <FaGooglePlay />
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />
  },
  {
    path: "/logout",
    name: "Log Out",
    icon: <CiLogout />
  }
];

const Tsidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
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
              return <TsidebarMenu showAnimation={showAnimation} isOpen={isOpen} route={route} key={route.name} />;
            }
            return (
              <NavLink
                activeClassName="active_sidebar"
                to={route.path}
                key={index}
                className="Link"
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
      <main className="main_content_sidebar">{children}</main>
    </div>
  );
};

export default Tsidebar;