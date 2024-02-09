import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import arrow from "../../assets/img/arrowWhite.png";

import { useAuth } from "../../context/context";
import { CodeStyle } from "./style";

interface Data {
    name: string;
    email: string;
    password: string;
}

export function Code() {
    const navigation = useNavigate();
    const { userRegister, signIn } = useAuth();
    const [dataRegister, setDataRegister] = useState<Data>();

    const [code, setCode] = useState<string>("");

    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const handleInputChange = (index: number, value: string) => {
        if (value.length === 1 && index < inputRefs.length - 1) {
            inputRefs[index + 1].current?.focus();
        }

        // Update the code in the state
        const updatedCode = `${code}${value}`;
        setCode(updatedCode);
    };

    const {
        
        handleSubmit,
        
    } = useForm()

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("@MRY:register") || "{}")
        data ? setDataRegister(data) : null
    }, [])

    const ApiSubmit: SubmitHandler<FieldValues> = async () => {
        await userRegister({
            name: dataRegister?.name,
            email: dataRegister?.email,
            password: dataRegister?.password,
            code: parseInt(code.substring(0, 4))
        })
            .then(() => {
                signIn({
                    email: dataRegister?.email,
                    password: dataRegister?.password
                })
                .then(() => {
                    navigation(`/port/dashboard/${dataRegister?.name}`)

                    localStorage.setItem("@MRY:register", "");
                })
            })
            .catch(() => {
                
            });
    };

    return (
        <CodeStyle>
            <div className="content_main">
                <div className="left_container">
                    <section className="hiro">
                        <h1>Verify Code</h1>
                        <p>Enviamos um codigo para seu email {dataRegister?.email}</p>

                        <form onSubmit={handleSubmit(ApiSubmit)}>
                            <div className="code-form">
                                {[0, 1, 2, 3].map((index) => (
                                    <div className="input_container code" key={index}>
                                        <input
                                            
                                            type="text"
                                            onChange={(e) => handleInputChange(index, e.target.value)}
                                            ref={inputRefs[index]}
                                        />
                                    </div>
                                ))}
                            </div>

                            <button type="submit" className="btn_login">
                                <p>Get started</p>
                                <img src={arrow}/>
                            </button>
                        </form>
                    </section>
                </div>
            </div>
        </CodeStyle>
    );
}