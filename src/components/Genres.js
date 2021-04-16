import React from "react";
import { useFetch } from "../hooks/useFetch";
import { GameCardCategory } from "./GameCardCategory";

export const Genres = () => {
	const tags = [
		"mmorpg",
		"shooter",
		"strategy",
		"moba",
		"racing",
		"sports",
		"social",
		"sandbox",
		"open-world",
		"survival",
		"pvp",
		"pve",
		"pixel",
		"voxel",
		"zombie",
		"turn-based",
		"first-person",
		"third-Person",
		"top-down",
		"tank",
		"space",
		"sailing",
		"side-scroller",
		"superhero",
		"permadeath",
		"card",
		"battle-royale",
		"mmo",
		"mmofps",
		"mmotps",
		"3d",
		"2d",
		"anime",
		"fantasy",
		"sci-fi",
		"fighting",
		"action-rpg",
		"action",
		"military",
		"martial-arts",
		"flight",
		"low-spec",
		"tower-defense",
		"horror",
		"mmorts",
	];

	const url = "https://www.freetogame.com/api/games?category=shooter";
	const { data, loading } = useFetch(url);

	loading ? console.log("loading") : console.log(data[1].genre);

	return (
		<div className="animate__animated animate__fadeIn">
			<h1>Game Genres</h1>
            <select value={tags} className="form-select m-4" aria-label="Default select">
				<option value="0">Search a genre</option>
				<option value="1">MMO</option>
				<option value="2">MMORPG</option>
				<option value="3">Shooter</option>
				<option value="4">Strategy</option>
				<option value="5">Moba</option>
				<option value="6">Card Games</option>
				<option value="7">Racing</option>
				<option value="8">Sports</option>
				<option value="9">Social</option>
				<option value="10">Action RPG</option>
				<option value="11">SandBox</option>
				<option value="12">Open World</option>
				<option value="13">Survival</option>
				<option value="14">Battle Royale</option>
				<option value="15">MMOTPS</option>
				<option value="16">Anime</option>
				<option value="17">PvP</option>
				<option value="18">PvE</option>
				<option value="19">Pixel</option>
				<option value="20">MMORTS</option>
				<option value="21">Fantasy</option>
				<option value="22">Sci-Fi</option>
				<option value="23">Action</option>
				<option value="24">Voxel</option>
				<option value="25">Zombie</option>
				<option value="26">Turn-Based</option>
				<option value="27">First Person View</option>
				<option value="28">Third Person View</option>
				<option value="29">Top-Down View</option>
				<option value="30">3D Graphics</option>
				<option value="31">2D Graphics</option>
				<option value="32">Tank</option>
				<option value="33">Space</option>
				<option value="34">Sailing</option>
				<option value="35">Side Scroller</option>
				<option value="36">Superhero</option>
				<option value="37">Permadeath</option>
			</select>

			<div className="animate__animated animate__fadeIn">
				<div className="container d-flex flex-wrap justify-content-around">
					{loading ? (
						<span>Loading...</span>
					) : (
						data.map((juego) => (
							<GameCardCategory key={juego.id} {...juego} loading={loading} data={juego} />
						))
					)}
				</div>
			</div>
		</div>
	);
};
