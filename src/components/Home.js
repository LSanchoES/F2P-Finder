import React from 'react'
import { useFetch } from '../hooks/useFetch';

import { GameCard } from './GameCard';

export const Home = () => {


    const url = 'https://www.freetogame.com/api/games?platform=browser&category=mmorpg&sort-by=release-date';

    const {data , loading } = useFetch(url);

    return (
        <div className="animate__animated animate__fadeIn">
            <h1>Home</h1>
            {

                loading ?( 

                <span>Esperando data</span>
                )
                :
                
                (data.map ( juego =>(
                    
                    <GameCard key={juego.id}{...juego}
                    
                    loading = {loading}
                    data = {juego} 
                     />)
                     
                ))
            }
        </div>

    )
}
