import React from "react";
import styles from "./Navbar.module.css"
import Button from "../Button/button";
import Logo from "../Logo/Logo";
import Search from "../Search/search";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <a href="/">
                <Logo/>
            </a>
            <Search placeholder="Search a song of your choice" />
            <Button>Give Feedback</Button>
        </nav>
    )
}

export default Navbar;