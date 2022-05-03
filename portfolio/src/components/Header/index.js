import React, { useState } from "react";
import Nav from "../Nav";

function Header() {
    const [pages] = useState([
        {
            name: "about me"
        },
        { name: "portfolio" },
        { name: "contact" },
        {
            name: "resume"
        }
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);

    return (
        <header>
            <h1 className='name'>Jesse Alvarez</h1>
            <Nav
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            ></Nav>
        </header>
    );
}

export default Header;