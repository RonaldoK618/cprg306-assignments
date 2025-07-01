"use client"
import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category , setCategory] = useState("produce");

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        setQuantity(quantity - 1);
    };

    const handleName = (event) => { 
        setName(event.target.value);
    }

    const handleCategory = (event) => {
        setCategory(event.target.value);
    }

    const generateId = (length = 16) => {
        return Math.random().toString(36).substring(2, 2 + length);
    }

    const handleSubmit  = (event) => {
        event.preventDefault();
        let item = {
            id: generateId(),
            name: name.trim(),
            quantity: quantity,
            category: category
        }
        
        console.log(item);
        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <main className="flex w-full pl-2">
            <form onSubmit={handleSubmit} className=" bg-gray-800 border-3 border-gray-900 w-full max-w-sm py-2 px-5">
                <input type="text" required value={name} className="border-2 border-gray-900 rounded-xl p-1 mb-2 w-full bg-white text-black" placeholder="Enter Item Name" onChange={handleName} />
                <div className="flex justify-between">
                    <div className="bg-white border-2 border-gray-900 p-2 w-40 flex-row flex gap-x-2 rounded-xl">
                        <p className="w-10 pt-3 text-center text-black">{quantity}</p>
                        <button onClick={decrement} disabled={quantity <= 1} type="button" className="border-gray-900 py-1 my-2 w-20 bg-blue-500 rounded-xl hover:bg-blue-700 disabled:bg-gray-400">-</button>
                        <button onClick={increment} disabled={quantity >= 20} type="button" className="border-gray-900 py-1 my-2 w-20 bg-blue-500 rounded-xl hover:bg-blue-700 disabled:bg-gray-400">+</button>
                
                    </div>
                    <select value={category} className="border-2 border-gray-900 rounded-xl m-1 w-35 bg-white text-black" name="category" onChange={handleCategory}> 
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen food">Frozen Food</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverage">Beverage</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit" className="w-full border-2 rounded-xl mt-2 hover:bg-gray-900">+</button>
            </form>
        </main>
    );
}