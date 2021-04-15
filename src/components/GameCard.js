import React from "react";



export const GameCard = ( data , loading) => {

    console.log(data.id)
  
    return(
        <div>
        {
            loading ? (

                <div>
                    Loading...
                </div>
            )
            :
            (

                <div className="row">
                    <div className="card-columns justify-content-center text-center">
                        <div className="card">
                            <h5 className="card-title">{data.title}</h5>
                            <img src={data.thumbnail} 
                            alt={data.title} className="card-img" />
                            <p className="card-text">{data.short_description}</p>
                            <p className=" card-footer">{data.genre}</p>
                        </div>
                    </div>
                </div>

            )

        }
    </div>
    )
};
