
import styled from "styled-components";



export const Label = styled.label`
	display: flex;
	flex-direction: column;
    row-gap: 10px;
    margin-top: 10px;
`;

export const LabelText = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: #1F1F1F;
`;

export const InputError = styled.div`
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #E26F6F;
`;

export const InputEl = styled.input`
	width: 100%;
	height: 60px;
	padding: 20px;
	background: #F5F5F5;
	border-radius: 8px;
	font-size: 16px;
`;

export const CheckLabel = styled.label`
	display: flex;
		align-items: center;
		cursor: pointer;
		position: relative;
		margin-top: 12px;
`;

export const Submit = styled.input`
	width: 640px;
		height: 60px;
		left: 640px;
		top: 649px;
		background: #4A67FF;
		border-radius: 8px;
		color: #FFFFFF;
		cursor: pointer;
		margin-top: 41px;
		display: flex;
		align-items: center;
		justify-content: center;

		&:disabled {
			cursor: default;
			opacity: 0.5;
		}
`;

export const CheckInput = styled.input`
	margin-right: 20px;
		opacity: 0;
		position: relative;
		cursor: pointer;
		background: #f5f5f5;

		&:checked {
				& ~ .form__false-check > .form__false-bg{

				background: #4A67FF;
			}
		}	
`;

export const FalseCheck = styled.span`
	position: absolute;
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	border-radius: 4px;
`;

export const FalseCheckBack = styled.span`
	display: block;
	width: 14px;
	height: 14px;
	border-radius: 2px;
`;


export const Container = styled.div.attrs({
    className: "container"
})`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Header = styled.div`
	position: absolute;
	top: 40px;
`;

export const Title = styled.h2`
 	font-weight: 700;
	font-size: 64px;
	line-height: 78px;
	color: #000000;
`;

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 95px;
	width: 640px;
`;

export const ErrorEl = styled.div`
	display: flex;
	align-items: center;
	min-width: 640px;
	height: 60px;
	padding: 20px;
	background: #F5E9E9;
	border: 1px solid #E26F6F;
	border-radius: 8px;
	font-size: 14px;
	font-weight: 400;
	margin-top: 10px;
	margin-bottom: 17px;
`;

export const ErrIcon = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	background: #FFC8C8;
	border-radius: 50%;
	font-size: 14px;
	font-weight: 400;
	color: #EE6565;
	margin-right: 14px;
`;

export const UserProfile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 110px;
`;

export const User = styled.div`
	font-weight: 400;
	font-size: 40px;
	
	& > b {
		font-weight: 700;
	}
`;

export const Button = styled.button`
	width: 200px;
	height: 60px;
	margin-top: 50px;
	background: #F5F5F5;
	border-radius: 8px;
	font-weight: 700;
	font-size: 18px;
	cursor: pointer;
	
	&:hover {
		background: #D1D1D1;
	}
`;