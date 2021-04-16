import React, { useState } from "react";
import { tags } from "../data/tags";
import { useFetch } from "../hooks/useFetch";
import { GameCardCategory } from "./GameCardCategory";

export const Genres = () => {
	
	const [state, setstate] = useState('mmorpg')

    const handleOnChange = (e) => {
        setstate(e.target.value)

    }
	const url = `https://www.freetogame.com/api/games?category=${state}`;
	const { data, loading } = useFetch(url);
    

	return (
		<div  className="animate__animated animate__fadeIn ">
            <select onChange={handleOnChange}  className="form-select m-4 p-1 text-center animate__animated animate__fadeIn"
			aria-label="Default select">
            {tags.map( tag =>
                <option value={tag} key={tag}>{tag}</option>
                )}
			</select>

			<div className="animate__animated animate__fadeIn">
				<div className="container d-flex flex-wrap justify-content-around">
					{loading ? (
						<span className="load">Loading... ACTIVA LA EXTENSION CORS DE GOOGLE CHROME!</span>
					) : (
						data.map((juego) => (
							<GameCardCategory key={juego.id} {...juego} loading={loading} data={juego}  />
						))
					)}
				</div>
			</div>
		</div>
	);
};
