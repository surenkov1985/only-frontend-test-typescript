

import * as React from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { CheckInput, CheckLabel, FalseCheck, FalseCheckBack, LabelText, Submit, InputEl, InputError, Label, FormContainer } from "../styledComponents";
import { FormError } from "../FormError";
import { setChecked, setName } from "../../stores/actions";
import { useEffect } from "react";
import { json, response } from "express";
import axios from "axios"

type login = string;
type password = string;

// This type will be used later in the form.
type User = {
    login: login;
    password: password;
}

type InputPropsTypes = {
    text: string,
    type: string,
    name: string,
    required: string,
    message: string,
    placeholder: string,
    pattern: any
}

export const Auth:React.FC = () => {

    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm<User>({
        mode: "onBlur"
    });

    const [error, setError] = useState<string>(""); 
    const [valid, setValid] = useState<boolean>(isValid)

    useEffect(() => {setValid(isValid)},[isValid])

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setChecked(localStorage.hasOwnProperty("jwt_token")));
        dispatch(setName(localStorage.getItem("login")));
    }, [])

    // Пользователя test.user@example.com не существует
    const loginInput:InputPropsTypes = {
        text: "Логин",
        type: "text",
        name: "login",
        required: "Обязательное поле",
        message: "Логин должен быть в формате test@test.io",
        placeholder: "Введите логин",
        pattern: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u
    };

    const passwordInput:InputPropsTypes = {
        text: "Пароль",
        type: "password",
        name: "password",
        required: "Обязательное поле",
        message: "Пароль дожен содержать минимум 5 символов",
        placeholder: "Введите пароль",
        pattern: /\w{5,}/
    };

    async function submitHandler(data) {
     
        try {
            await axios.post("/api/auth/register", {...data},
                { headers: {
                        "Content-Type": "application/json",
                        "mode": "no-cors",
                        
                    }
                }
            
            )
            .then(response => console.log(response))
        } catch (error) {
            console.log(error);
        }
        
    }

    const onSubmit: SubmitHandler<User> = (data) => {

        submitHandler(data)

        // fetch("users.json")
        //     .then(res => res.json())
        //     .then(json => {
        //         setValid(true)
        //         setTimeout(():void=>{

        //             if (json.login === data.login && json.password === data.password ) {

        //                 dispatch(setName(data.login));
        //                 dispatch(setChecked(true));
        //                 setError("")
        //                 localStorage.setItem("jwt_token", json.jwt_token) 
        //                 localStorage.setItem("login", json.login)  
        //                 reset()
                        
        //             } else if (json.login !== data.login){

        //                 setError(`Пользователя ${data.login} не существует`)
        //             }else if (json.password !== data.password){

        //                 setError(`Неверный логин или пароль`)
        //             }
        //             setValid(true)
        //         }, 500)
                
        //     })
        //     .catch(err => console.log(err));
    }

    return (
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                {error && <FormError error={error}/>}
                <Label>
                    <LabelText>{loginInput.text}</LabelText>
                    <InputEl
                        type={loginInput.type}
                        placeholder={loginInput.placeholder}
                        autoFocus={true}
                        {...register("login", {required: "Обязательное поле", pattern: {value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u, message: "Логин должен быть в формате test@test.io"}})}
                    />
                    <InputError>
                        {errors?.login && <span>{errors?.login?.message || "Error!"}</span>}
                    </InputError>
                </Label>
                <Label>
                    <LabelText>{passwordInput.text}</LabelText>
                    <InputEl
                        type={passwordInput.type}
                        placeholder={passwordInput.placeholder}
                        {...register("password", {required: passwordInput.required, pattern: {value: passwordInput.pattern, message: passwordInput.message}})}
                    />
                    <InputError>
                        {errors?.password && <span>{errors?.password?.message || "Error!"}</span>}
                    </InputError>
                </Label>
                <CheckLabel>
                    <CheckInput type="checkbox"/>
                    <FalseCheck className="form__false-check" >
                        <FalseCheckBack className="form__false-bg"/>
                    </FalseCheck>
                    <span>Запомнить пароль</span>
                </CheckLabel>
                <Submit type="submit" disabled={!valid} value="Войти"/>
            </FormContainer>
        
    )
}

