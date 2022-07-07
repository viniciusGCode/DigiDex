import React from 'react';

import { useEffect, useState } from 'react';

import DigimonCard from '../../components/DigimonCard/DigimonCard';

import "./Home.css";

const Home = () => {
	const [digimons, setDigimons] = useState([]);

	const getDigimons = async (url) => {
		const res = await fetch(url);
		const data = await res.json();

		setDigimons(data);
	}

	useEffect(() => {
		const digimonsUrl = "https://digimon-api.vercel.app/api/digimon";

		getDigimons(digimonsUrl);
	}, []);



	return (
		<div className='Home'>

			<div className="container">

				<div className='sort-container'>
					
				</div>

				<div className="digimons-container">

					{
					digimons && digimons.map((digimon) => 
					<DigimonCard digimon={digimon} key={digimon.name}/>
					)
					}

				</div>

			</div>


		</div>
	)
}

export default Home