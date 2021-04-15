import React from "react";

export const GameCard = (data, loading) => {
	// console.log(data.id);

	return (
		<>
			{
				<div className="card w-25 text-center m-1 border-dark shadow">
					<h5 className="card-title p-1">{data.title}</h5>
					<img src={data.thumbnail} alt={data.title} className="card-img shadow" />
					<p className="card-text p-3">{data.short_description}</p>
					<p className=" card-footer text-baseline"
                        style={{height:"10%"}}
                    
                    >
                        {data.genre}
                    </p>
				</div>
			}
		</>
	);
};
