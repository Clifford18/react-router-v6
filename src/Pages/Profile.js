import React from 'react';
import {useNavigate} from "react-router-dom"

function Profile() {
	let navigate = useNavigate();
	return (
		<div>
			This is the profile page
			<button onClick={()=> {navigate("/about")}}>Change to about Page</button>
		</div>
	);
}

export default Profile;