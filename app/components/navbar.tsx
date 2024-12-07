import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaDownload } from 'react-icons/fa6';
import "@/app/Style/navbar.css";

export default function Navbar() {
    return (
        <div className="main-div">
            <header className="navHead">
                <div className="NHd1">
                    <p className="NHAnc">
                        <Image height={100}
                            width={100}
                            alt={"ProPic"}
                            src={require("@/public/assists/Pictures stuff/animated me.jpg")}
                            className="NHImg"
                        />
                        <span className="NHSpan">Shifa Siddiqui</span>
                    </p>
                    <nav className="NHNav">
                        <Link href={"/"} className="NHLin NHLin1">Home</Link>
                        <Link href={"#About"} className=" NHLin">About</Link>
                        <Link href={"#Skills"} className=" NHLin">Skills</Link>
                        <Link href={"#Projects"} className=" NHLin">Projects</Link>
                        <Link href={"#Contact"} className=" NHLin">Contact</Link>
                    </nav>
                    <a href="@/app/public/assists/Shifa.pdf" >
                        <button className="NHBut">
                            Download CV
                            <FaDownload className="NHFa" />
                        </button>
                    </a>

                </div>
            </header>
        </div>

    )
}