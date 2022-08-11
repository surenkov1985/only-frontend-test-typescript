import * as React from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { setChecked } from "../../stores/actions"
import { AnyAction } from "redux";
import {User, UserProfile, Button} from "../styledComponents"





export const Profile:React.FC = () => {

	const dispatch = useDispatch();

	let name = useSelector((state):string => {

		const {checkReducer}: any = state;
		return checkReducer.userName;

		
	});

	function clickHandler() {

		dispatch(setChecked(false))
		localStorage.removeItem("jwt_token")
	}

	return (
		<UserProfile>
			<User>Здравствуйте, {<b>{name}</b>}</User>
			<Button onClick={clickHandler}>Выйти</Button>
		</UserProfile>
	)
}