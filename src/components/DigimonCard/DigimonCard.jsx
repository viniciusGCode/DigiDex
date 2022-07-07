import React from 'react';

import "./DigimonCard.css";

const DigimonCard = ({digimon}) => {
	return (
		<div className='digimon-card'>
			<img src={digimon.img} alt={`${digimon.name} image`} />
			<h2>{digimon.name}</h2>
			<p>Level: {digimon.level}</p>
		</div>
	)
}

export default DigimonCard