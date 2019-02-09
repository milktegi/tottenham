import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import {firebase} from '../../../firebase';

const AdminNav = () => {

	const links = [
		{
			title: '경기',
			linkTo: '/admin_matches'
		},
		{
			title: '경기 추가',
			linkTo: '/admin_matches/edit_match'
		},
		{
			title: '선수',
			linkTo: '/admin_players'
		},
		{
			title: '선수 추가',
			linkTo: '/admin_players/add_player'
		},
	]

	const style = {
		color: '#ffffff',
		fontWeight: 300,
		borderBottom: '1px solid #353535',
		// marginTop: 0
	}

	const renderItems = () => {
		return links.map(link=>(
			<Link to={link.linkTo} key={link.title}>
				<ListItem button style={style}>
					{link.title}
				</ListItem>
			</Link>
		))
	}

	const logouthandler = () => {
		firebase.auth().signOut()
		.then(()=>{
			console.log('log out succeed')
		})
	}

	return(
		<div>
			{renderItems()}
			<ListItem button style={style}
			onClick={()=> logouthandler()}
			>
				로그아웃
			</ListItem>
		</div>
	)
}

export default AdminNav;