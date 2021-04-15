import React from 'react'
import { useFetch } from '../hooks/useFetch';

import { GameCard } from './GameCard';

export const Home = () => {


    const url = 'https://www.freetogame.com/api/games';

    const {data , loading } = useFetch(url);

    let juegos = []
    loading? console.log('loading...'): data.map(items => juegos.push(items))

    let numeros = juegos.forEach(index => console.log(/* index.id */))

 
    return (
        <div className="animate__animated animate__fadeIn">
            <h1>Home</h1>
            {
                juegos.map ( etiqueta =>(

                    <GameCard key={etiqueta.id}{...juegos}
                    data = {juegos[numeros]} 
                    loading = {loading} />
                ))
            }
        </div>

    )
}
