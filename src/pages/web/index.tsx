import { LandPageStyle } from "./style";

import logo from "../../assets/img/logoweb.png";
import github from "../../assets/img/github.png";
import illustration_1 from "../../assets/img/illustration_1.png";
import illustration_2 from "../../assets/img/illustration_2.png";
import illustration_3 from "../../assets/img/illustration_3.png";
import lock from "../../assets/img/lock.png";
import arrowRight from "../../assets/img/arrowRight.png";
import arrowWhite from "../../assets/img/arrowWhite.png";

import book from "../../assets/img/book.png";
import assets from "../../assets/img/assets.png";
import report from "../../assets/img/report.png";

import company1 from "../../assets/img/company1.png";
import company2 from "../../assets/img/company2.png";
import company3 from "../../assets/img/company3.png";
import company4 from "../../assets/img/company4.png";
import company5 from "../../assets/img/company5.png";
import company6 from "../../assets/img/company6.png";

// import video from "../../assets/videos/video-intro-template.mp4";

import { NavLink } from "react-router-dom";

export function LandPage() {
    return (
        <LandPageStyle>
            <header>
                <div className="left mob-size">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul>
                        <li className="hide-mob">
                            <a href="#features">
                                <p>Features</p>
                            </a>
                        </li>
                        <li className="hide-mob">
                            <a href="#trusted">
                                <p>Developers</p>
                            </a>
                        </li>
                        {/* <li>
                            <p>Pricing</p>
                        </li> */}
                    </ul>
                </div>

                <div className="right mob-size">
                    <img src={github} alt="" className="hide-mob"/>
                    <NavLink to={"/sign-in"}>
                        <button className="mob-small-hide">
                            <p>Sign in</p>
                        </button>
                    </NavLink>
                    <NavLink to={"/sign-up"}>
                        <button className="get_started">
                            <p>Get started</p>
                        </button>
                    </NavLink>
                </div>
            </header>
            <section className="hiro mob-size">
                <h1>Show Your Work To The World With <span>Powtfolio</span></h1>
                <p className="p-hiro">Create your portfolio quickly and easily with Powtfolio, share your work with the world, and build your network.</p>

                <div className="btns_hiro">
                    <button>
                        <p>Learning more</p>
                    </button>
                    <button className="get_started">
                        <p>Get started</p>
                    </button>
                </div>

                <div className="lock_beta">
                    <img src={lock} alt="" />
                    <p>Currently in close beta</p>
                </div>

                <div className="illustration">
                    <img src={illustration_1} alt="" />
                    <button>
                        <p>Explore more</p>
                        <img src={arrowRight} alt="" />
                    </button>
                </div>
            </section>

            <section className="features" id="features">
                <div className="card">
                    <img src={book} alt="" />
                    <h4>VisitAlert</h4>
                    <p>Receive instant alerts for portfolio visits, stay connected effortlessly.</p>
                </div>

                <div className="card">
                    <img src={assets} alt="" />
                    <h4>ProfileLinkShare</h4>
                    <p>Easily share your public portfolio link, expand your online presence effortlessly.</p>
                </div>

                <div className="card">
                    <img src={report} alt="" />
                    <h4>EasyProjectAdd</h4>
                    <p>Add and manage your projects with simplicity and ease.</p>
                </div>
            </section>

            <section className="hiro mob-size">
                <h1>Add your projects</h1>
                <p className="p-hiro">Simplify project presentation with 'Add Your Projects.' Effortlessly showcase your work and achievements, focusing on what matters most – your creative contributions.</p>

                <div className="illustration">
                    <img src={illustration_2} alt="" />
                </div>
            </section>

            {/* <section className="video_container">
            <iframe className="video" width="100%" height="723px" src="https://www.youtube.com/embed/k2Ln-k0H7hk" title="Powtfy" allow="autoplay; loop;"></iframe>
            </section> */}

            <section className="trusted" id="trusted">
                <p>Trusted by teams at</p>
                <div className="companies">
                    <img src={company1} alt="" />
                    <img src={company2} alt="" />
                    <img src={company3} alt="" />
                    <img src={company4} alt="" />
                    <img src={company5} alt="" />
                    <img src={company6} alt="" />
                </div>
            </section>
            <section className="profile">
                <div className="card">
                    <div className="profile_picture">

                    </div>

                    <h4>EldsonC</h4>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>

                    <button>
                        <p>See profile</p>
                        <img src={arrowWhite} />
                    </button>
                </div>
                <div className="card">
                    <div className="profile_picture">

                    </div>

                    <h4>EldsonC</h4>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>

                    <button>
                        <p>See profile</p>
                        <img src={arrowWhite} />
                    </button>
                </div>
                <div className="card">
                    <div className="profile_picture">

                    </div>

                    <h4>EldsonC</h4>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>

                    <button>
                        <p>See profile</p>
                        <img src={arrowWhite} />
                    </button>
                </div>
                <div className="card">
                    <div className="profile_picture">

                    </div>

                    <h4>EldsonC</h4>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>

                    <button>
                        <p>See profile</p>
                        <img src={arrowWhite} />
                    </button>
                </div>
                <div className="card">
                    <div className="profile_picture">

                    </div>

                    <h4>EldsonC</h4>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>

                    <button>
                        <p>See profile</p>
                        <img src={arrowWhite} />
                    </button>
                </div>
            </section>

            <section className="hiro mob-size" style={{paddingBottom: "100px"}}>
                <h1>Show your skills</h1>
                <p className="p-hiro">Highlight your expertise effortlessly with 'Show Your Skills.' Showcase your talents, achievements, and capabilities seamlessly, allowing your skills to shine and make a lasting impression.</p>

                <div className="illustration">
                    <img src={illustration_3} alt="" />
                </div>
            </section>
        </LandPageStyle>
    );
}