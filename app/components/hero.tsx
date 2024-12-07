import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/Style/hero.css";

export default function Hero() {
    return (
        <div>
            <section className=" heroDiv">
                <div className="HD1">
                    <Image
                        className="HImg"
                        alt="hero"
                        width="100"
                        height="100"
                        src={require('@/public/assists/Pictures stuff/pexels-shvetsa-3987111.jpg')}
                    />
                    <div className="HD2">
                        <h1 className="HD2h1">
                            I am a Web Developer, UI/UX Designer , Graphic Designer and Learning AI.
                        </h1>
                        <p className="HD2p">
                        </p>
                        <div className="HD3">
                            <Link href="#Contact">
                                <button className="HD3b">
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}