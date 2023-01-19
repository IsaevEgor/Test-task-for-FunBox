import React from 'react';
import st from "./style.module.scss";
	
interface IProps {
	text: string
}

export const Title = ({text}:IProps) => {
		return (
				<h2 className={st.title}>
						{text}
				</h2>
		);
};