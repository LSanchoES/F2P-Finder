import React from "react";
import { useFetch } from "../hooks/useFetch";

import { GameCard } from "./GameCard";

export const Home = () => {
	const url =
		"https://free-to-play-games-database.p.rapidapi.com/api/games";


	const { data, loading } = useFetch(url);

	return (
		<div className="animate__animated animate__fadeIn ">
			<div className="container d-flex flex-wrap justify-content-around">
				{loading ? (
					<span className="load">Loading...</span>
				) : (
					data.map((juego) => (
						<GameCard key={juego.id} {...juego} loading={loading} data={juego} />
					))
				)}
			</div>
		</div>
	);
};
