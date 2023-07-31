import React from "react";
import NavbarContainer from "../Navbar/NavbarContainer";

const Layout = ({ children }) => {
    return (
        <>
            <NavbarContainer />
            {children}
        </>
    );
};
export default Layout;
