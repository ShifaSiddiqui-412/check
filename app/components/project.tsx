import Link from "next/link";
import Image from "next/image";
import "@/app/Style/project.css";

export default function Project() {
    return (
        <div id="Projects">
            <section className=" Psec">
                <div className="PD1">
                    <div className="PD2">
                        <h1 className="PD2h1">
                            My Projects
                        </h1>
                    </div>
                    <div className="PD3">
                        {/* ---------------------------PROJECT 1----------------------- */}
                        <div className="PD4">
                            <div className="PD5">
                                <Image
                                    alt="resturant website "
                                    className="PD5Img"
                                    src={require("@/public/assists/Pictures stuff/Resturant web.jpg")}
                                />
                                <div className="PD6">
                                    <h2 className="PD6h2">
                                        Resturant Website
                                    </h2>
                                    <h1 className="PD6h1">
                                        Resturant Website
                                    </h1>
                                    <p className="PD6p1 ">
                                        The multi pages resturant website is created by using Html and Custom Css.
                                    </p>
                                    <Link href="https://resturant-website-tan.vercel.app" target="_blank">
                                        <p className="PD6p2">View Project.. </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* --------------------------------PROJECT 2-------------------------- */}
                        <div className="PD4">
                            <div className="PD5">
                                <Image
                                    alt="marks calculator"
                                    className="PD5Img"
                                    src={require("@/public/assists/Pictures stuff/Marks.Calculator.jpg")}
                                />
                                <div className="PD6">
                                    <h2 className="PD6h2">
                                        Marks Calculator
                                    </h2>
                                    <h1 className="PD6h1">
                                        Marks Calculator
                                    </h1>
                                    <p className="PD6p1">
                                        The calcualtor is created for calculating marks with percentage. It is created by using html , css and javascript.
                                    </p>
                                    <Link href="https://marks-calculator-eta.vercel.app" target="_blank">
                                        <p className="PD6p2">View Project.. </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* -------------------------------PROJECT 3----------------------------- */}
                        <div className="PD4">
                            <div className="PD5">
                                <Image
                                    alt="mathematical calculator"
                                    className="PD5Img"
                                    src={require("@/public/assists/Pictures stuff/Simple.Calculator.jpg")}
                                />
                                <div className="PD6">
                                    <h2 className="PD6h2">
                                        Calculator
                                    </h2>
                                    <h1 className="PD6h1">
                                        Mathematical Calcuator
                                    </h1>
                                    <p className="PD6p1">
                                        The calculator is created by using html , css and javascript. It can solve mathematical operations.
                                    </p>
                                    <Link href="https://calculator-html-css-js-xi.vercel.app" target="_blank">
                                        <p className="PD6p2">View Project.. </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* --------------------------------PROJECT 4-------------------------- */}
                        <div className="PD4">
                            <div className="PD5">
                                <Image
                                    alt="marks calculator"
                                    className="PD5Img"
                                    src={require("@/public/assists/Pictures stuff/Resume.jpg")}
                                />
                                <div className="PD6">
                                    <h2 className="PD6h2">
                                        Dynamic Resume Builder
                                    </h2>
                                    <h1 className="PD6h1">
                                        Resume Builder
                                    </h1>
                                    <p className="PD6p1">
                                        Dynamic resume builder with Editable, Shareable and Download as a Pdf features.
                                    </p>
                                    <Link href="https://dynamic-resume-psi-ten.vercel.app" target="_blank">
                                        <p className="PD6p2">View Project.. </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}