import React from 'react';
import { Link } from 'react-router-dom';


export const Tag = (props) => {
	const template = (
		<div style={{
			background: props.bck,
			fontSize: props.size,
			color: props.color,
			padding: '5px 10px',
			display: 'inline-block',
			fontFamily: 'monospace',
			fontWeight: '900',
			...props.add
		

		}}>
		{props.children}
		</div>
	)
	if(props.link){
		return(
			<Link to={props.linkTo}>
				{template}
			</Link>
		)
	} else {
		return template 
	}
}

export const firebaseLooper = (snapshot) => {
	const data = [];
	snapshot.forEach((childSnapshot)=>{
		data.push({
			...childSnapshot.val(),
			id: childSnapshot.key
		})
	})
	return data;
}

export const reverseArray = arr => {
	// let reversed = [];
	// for(let i = arr.length - 1; i >= 0; i--){
	// 	reversed.push(arr[i])
	// }
	// return reversed;
	let reversed = [...arr].reverse();
	return reversed;
	// return [...arr].reverse();

}