import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`Navbar ${show && "Navbar-Black"}`}>
            <img
                className="Navbar-Logo"
                src="https://pngimg.com/uploads/netflix/netflix_PNG22.png"
                alt="Netflix Logo"
            />

            <img
                className="Navbar-Avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Logo"
            />

        </div>
    )
}

export default Navbar
