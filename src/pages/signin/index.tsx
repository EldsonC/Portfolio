import { SignInStyle } from "./style";
import illu from "../../assets/img/login_illu.png";
import { LogoSignIcon } from "../../assets/icons/logo-sign";
import { GoogleIcon } from "../../assets/icons/google";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodSignIn } from "../../services/zod";
import { useAuth } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Load } from "../../components/load";

export function SignIn() {
    const { signIn, userLogged } = useAuth();
    const [loadState, setLoadState] = useState(false);

    const navigation = useNavigate();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("@USER:token") || "[]")

        if (userLogged()) {
            navigation(`/port/dashboard/${userData.name}`)
        }
    }, [])

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(zodSignIn)
    });

    const ApiSubmit: SubmitHandler<FieldValues> = async (data) => {
        setLoadState(true);

        await signIn({
            email: data.email,
            password: data.password
        })
            .then((result: any) => {
                navigation(`/port/dashboard/${result.name}`);
            })
            .catch(() => {
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
                    <div onClick={() => navigation("/")} style={{ cursor: "pointer" }}>
                        <LogoSignIcon />
                    </div>

                    <div className="first_text">
                        <h1>Sign In</h1>
                        <p>Wellcome back</p>
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
                            Sign In
                        </button>
                    </form>

                    <div className="signup_link">
                        <span>Don't have an account? <a href="/sign-up">Get started</a></span>
                    </div>
                </div>

                <div className="illu_container">
                    <img src={illu} alt="illustration" />
                </div>
            </SignInStyle>
        </>
    );
}