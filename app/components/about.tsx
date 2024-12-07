import React from "react";
import Image from "next/image";
import "@/app/Style/about.css"

export default function About() {
    return (
        <div id="About" >
            <section className="AbtMain-div">
                <div className="AbtDiv1">
                    <div className="AbtDiv2">
                        <h1 className="AbtH1">
                            About Me
                        </h1>
                        <p className="AbtP1">
                            I’m Shifa Siddiqui, a web developer and graphic designer with a strong academic background. I completed my matriculation from The Ideal Grammar School, Karachi, and my FSc from the Sindh Board. I specialize in creating user-friendly websites and engaging graphic designs.

                            Currently, I’m learning Artificial Intelligence through the Governors IT Initiative to enhance my technical skills. I’m passionate about staying on top of emerging trends and continuously improving my craft.

                            Feel free to explore my portfolio, and let’s connect for potential opportunities!
                        </p>
                        <div className="AbtDiv3">
                            <a href="@/app/public/assists/Shifa.pdf"><button className="AbtBut">
                                View CV
                            </button>
                            </a>
                        </div>
                    </div>
                    <div className=" AbtDiv4">
                        <Image
                            className="AbtImg"
                            width={300}
                            height={300}
                            alt="hero"
                            src={require("@/public/assists/Pictures stuff/pexels-cottonbro-4254255.jpg")}
                        />
                    </div>
                </div>
            </section></div>
    )
}