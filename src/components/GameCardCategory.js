import React from "react";

export const GameCardCategory = (data, loading) => {
	// console.log(data.id);

	return (
		<>
	
			{
				<div className="card w-25 text-center m-1 col-12 col-md-4 col-lg-3 animate__animated animate__fadeIn">
					<h5 className="card-title p-1">{data.title}</h5>
					<img src={data.thumbnail} alt={data.title} className="card-img shadow" />
					<p className="card-text p-3">{data.short_description}</p>
				</div>
			}
		</>
	);
};
