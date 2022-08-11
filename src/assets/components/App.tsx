import * as React from "react"
import {Container} from "./styledComponents";

import { Routes, Route } from "react-router-dom"
import TitleContainer from "./Title";
import {RequireAuth} from "./hoc/RequireAuth";
import {Profile} from "./pages/Profile";



const ProfileRequire:React.FC = () => {

    return (
        <RequireAuth>
            <Profile></Profile>
        </RequireAuth>
    )
};

export const App:React.FC = ()=> {



    return (
        <Container>
            <TitleContainer/>
            <Routes>
                <Route path="/" element={<ProfileRequire/>}/>
            </Routes>
        </Container>
    )
}