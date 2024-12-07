import React from "react";
import Link from "next/link";
import { ImFacebook2 } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import "@/app/Style/footer.css";


export default function Footer() {
    return (
        <div className="FootDiv">
            <footer className="FD1">
                <div className="FD2">
                    <div className="FD3">
                        <span className="FD3S1">ShifaSid*</span>
                        <p className="FD3P ">© 2024  —
                            <Link href="https://www.google.com" target="-blank" rel="noopener noreferrer" className="FD3L1">@shifasiddiqui</Link>
                        </p>
                        <span className="FD3S2">
                            <Link href="https://www.facebook.com" target="-blank" className="FD3L2">
                                <ImFacebook2 />
                            </Link>
                            <Link href="https://www.youtube.com" target="-blank" className="FD3L3">
                                <ImYoutube />
                            </Link>
                            <Link href="https://www.linkedIn.com" target="-blank" className="FD3L4">
                                <ImLinkedin />
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}