import { LandPageStyle } from "./style";

import logo from "../../assets/img/logoweb.png";
import github from "../../assets/img/github.png";
import illustration_1 from "../../assets/img/illustration_1.png";
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

import { NavLink } from "react-router-dom";

export function LandPage() {
    return (
        <LandPageStyle>
            <header>
                <div className="left">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul>
                        <li>
                            <p>Features</p>
                        </li>
                        <li>
                            <p>Developers</p>
                        </li>
                        {/* <li>
                            <p>Pricing</p>
                        </li> */}
                    </ul>
                </div>

                <div className="right">
                    <img src={github} alt="" />
                    <NavLink to={"/sign-in"}>
                        <button>
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
            <section className="hiro">
                <h1>Show Your Work To The World With <span>Powtfolio</span></h1>
                <p>Create your portfolio quickly and easily with Powtfolio, share your work with the world, and build your network.</p>
                
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
            <section className="features">
                <div className="card">
                    <img src={book} alt="" />
                    <h4>Employee Index</h4>
                    <p>Stay on top of your growing company by making it easy to search, and get to know, your teammates.</p>
                </div>

                <div className="card">
                    <img src={assets} alt="" />
                    <h4>Brand assets</h4>
                    <p>Keep your visuals consistently on-brand with easily accessible colors, icons, screenshots and more, for the whole team.</p>
                </div>

                <div className="card">
                    <img src={report} alt="" />
                    <h4>Report bugs</h4>
                    <p>Set up template bug report forms to give timely and actionable feedback on features and projects in development.</p>
                </div>
            </section>

            <section className="trusted">
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
                        <img src={arrowWhite}/>
                    </button>
                </div>
                <div className="card">
                    <div className="profile_picture">

                    </div>

                    <h4>EldsonC</h4>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>

                    <button>
                        <p>See profile</p>
                        <img src={arrowWhite}/>
                    </button>
                </div>
                <div className="card">
                    <div className="profile_picture">

                    </div>

                    <h4>EldsonC</h4>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>

                    <button>
                        <p>See profile</p>
                        <img src={arrowWhite}/>
                    </button>
                </div>
                <div className="card">
                    <div className="profile_picture">

                    </div>

                    <h4>EldsonC</h4>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>

                    <button>
                        <p>See profile</p>
                        <img src={arrowWhite}/>
                    </button>
                </div>
                <div className="card">
                    <div className="profile_picture">

                    </div>

                    <h4>EldsonC</h4>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>

                    <button>
                        <p>See profile</p>
                        <img src={arrowWhite}/>
                    </button>
                </div>
            </section>
        </LandPageStyle>
    );
}