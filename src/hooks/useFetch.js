import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
	// { 'Content-Type': 'application/json' }
	const isMounted = useRef(true);

	const [state, setState] = useState({ data: null, loading: true, error: null });

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		setState({ data: null, loading: true, error: null });

		fetch(
			url,  {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "082f9eeb53msh1fa5a117adc2f49p1e06bajsnf81d61049626",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
			.then((resp) => resp.json())
			.then((data) => {
				setState({
					loading: false,
					error: null,
					data,
				});
			});
	}, [url]);

	return state;
};
