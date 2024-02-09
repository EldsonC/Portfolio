import { SignInStyle } from "../signin/style";
import illu from "../../assets/img/login_illu.png";
import { LogoSignIcon } from "../../assets/icons/logo-sign";
import { GoogleIcon } from "../../assets/icons/google";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodSchema } from "../../services/zod";

import arrow from "../../assets/img/arrowWhite.png";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";
import { Load } from "../../components/load";

export function SignUp() {
    const navigation = useNavigate();
    const [ loadState, setLoadState ] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(zodSchema)
    });

    const ApiSubmit: SubmitHandler<FieldValues> = async (data) => {
        setLoadState(true);
        const nameString = data.name;
        const name = nameString.replace(/ /g, "_");

        const dataUser = {
            name: name,
            email: data.email,
            password: data.password
        }

        localStorage.setItem("@MRY:register", JSON.stringify(dataUser));

        await api.post("/code", {
            email: data.email
        })
        .then(() => {
            navigation("/sign-up/code");
        }).catch(() => {
            setLoadState(false);
        })
        .finally(() => {
            setLoadState(false);
        })
    }

    return (
        <>
            {loadState ? <Load/> : null}
            <SignInStyle>
                <div className="login_container">
                    <div  onClick={() => navigation("/")} style={{cursor: "pointer"}}>
                        <LogoSignIcon />
                    </div>

                    <div className="first_text">
                        <h1>Get started</h1>
                        <p>Create your account now</p>
                    </div>

                    <form onSubmit={handleSubmit(ApiSubmit)}>
                        <button className="google_btn">
                            <GoogleIcon />
                            <p>Continue with google</p>
                        </button>

                        <div className="divider">
                            <div className="line"></div>
                            <span>or</span>
                            <div className="line"></div>
                        </div>

                        <div className="input_">
                            <label htmlFor="">Username</label>
                            <input 
                                type="text" 
                                placeholder="example: John_doe" 
                                {...register("name")}
                            />
                        </div>
                        {errors.name ? <p className="error_label">{typeof errors.name.message === "string" ? (
                            <span>{errors.name.message}</span>
                        ) : null}</p> : null}

                        <div className="input_">
                            <label htmlFor="">Email</label>
                            <input 
                                type="email" 
                                placeholder="you@example.com" 
                                {...register("email")}
                            />
                        </div>
                        {errors.email ? <p className="error_label">{typeof errors.email.message === "string" ? (
                            <span>{errors.email.message}</span>
                        ) : null}</p> : null}

                        <div className="input_">
                            <label htmlFor="">Password</label>
                            <input 
                                type="password" 
                                placeholder="*******" 
                                {...register("password")}
                            />
                        </div>
                        {errors.password ? <p className="error_label">{typeof errors.password.message === "string" ? (
                            <span>{errors.password.message}</span>
                        ) : null}</p> : null}

                        <button className="sign_in">
                            <p>Continue</p>
                            <img src={arrow}/>
                        </button>
                    </form>

                    <div className="signup_link">
                        <span>Have an account? <a href="/sign-in">Sign in</a></span>
                    </div>
                </div>

                <div className="illu_container">
                    <img src={illu} alt="illustration" />
                </div>
            </SignInStyle>
        </>
    );
}