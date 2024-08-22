import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; 

const SidebarMenu = ({ showAnimation, route, isOpen }) => {
  const menuAnimation = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.5,
      },
    },
  };

  const menuItemAnimation = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.5,
      },
    },
  };

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div>
      <div className="menu_sidebar" onClick={toggleSubMenu}>
        <div className="menu_item_sidebar">
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
        </div>
        <div className="menu_arrow">
          {isSubMenuOpen ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>
      <AnimatePresence>
        {isSubMenuOpen && isOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="menu-container_sidebar"
          >
            {route.subRoutes.map((subRoute, i) => (
              <NavLink
                activeClassName="active"
                to={subRoute.path}
                key={i}
                className="link"
              >
                <div className="icon_sidebar">{subRoute.icon}</div>
                <motion.div
                  variants={menuItemAnimation} 
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="link_text"
                >
                  {subRoute.name}
                </motion.div>
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarMenu;