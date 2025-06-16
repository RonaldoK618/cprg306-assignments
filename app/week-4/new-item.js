"use client"
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        setQuantity(quantity - 1);
    };

    return (
        <main class="bg-auto border-2 border-auto-inverse p-5 m-auto w-80 flex-row flex">
            <p class="w-30 text-center pt-3.5">Quantity: {quantity}</p>
            <button onClick={increment} disabled={quantity >= 20} type="button" class="border-amber-100 px-6 py-2 m-2 bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400">+</button>
            
            <button onClick={decrement} disabled={quantity <= 1} type="button" class="border-amber-100 px-6 py-2 m-2 bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400">-</button>
        </main>
    );
}