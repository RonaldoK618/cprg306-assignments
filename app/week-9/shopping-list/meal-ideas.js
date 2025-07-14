"use client"
import { useState,useEffect } from "react"

export default function MealIdea({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
            );
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.error(`Error: ${error.message}`);
            return [];
        }
    }

    async function loadMealIdeas() {
        if (!ingredient) {
            setMeals([]);
            return;
        }
        
        try {
            const mealData = await fetchMealIdeas(ingredient);
            setMeals(mealData);
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2 className="text-3xl font-serif">Meal Ideas</h2>
                <ul className="flex-row w-full max-w-sm">
                    {!ingredient ? (
                        <p className="text-gray-500 italic">Select an item to see meal ideas</p>
                    ) : meals.length > 0 ? (
                        <div>
                            <p>Here are some meal ideas using {ingredient}:</p>
                            <ul>
                                {meals.map(meal => (
                                    <li key={meal.idMeal} className="border-2 p-1 m-2 bg-gray-900 border-amber-500">
                                        <h3>{meal.strMeal}</h3>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                    <p>No meal ideas found for {ingredient}</p>
                )}
                </ul>
        </div>
    );
}