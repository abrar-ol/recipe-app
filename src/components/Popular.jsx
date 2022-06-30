import  React, { useEffect, useState } from "react";
import dotenv from 'dotenv';

export default function Popular() {
  dotenv.config();

  const [populars,setPopulars] = useState([]);

    useEffect(()=>{
      getPopular();
    },[]);

    const getPopular = async()=>{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API}&number=9`);
        const data= await api.json();
        setPopulars(data.recipes);
    }

  return (
    <>
    {
    populars.map((recipe)=>{
        return(
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </>

  );
}
