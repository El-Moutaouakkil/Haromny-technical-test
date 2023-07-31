import React from "react";
import Navbar from "./Navbar";

const navItems = [`Products`, "Templates", "Pricing", "Blog", "Sign in"];

function NavbarContainer() {
    return (
        <div className='flex mt-5'>
            <h1 className='text-lg font-bold w-2/5  ml-40'>Slite</h1>{" "}
            {/* logo */}
            <Navbar className='w-3/5 space-x-2' items={navItems} />
        </div>
    );
}

export default NavbarContainer;
