"use client"
import Item from "./item";
import items from '../week-6/items.json';
import React, { useState } from "react";

export default function ItemList({}) {
    const [sortBy, setSortBy] = useState("name");

    const sortItem = [...items].sort((a,b) => {
        if (sortBy == "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy == "category") {
            return a.category.localeCompare(b.category);
        }
    });

    const handleSort = (event) => {
        setSortBy(event.target.value);
    }

    return (
        <main class="flex-row w-full max-w-sm">
            <div class="flex justify-between ml-5 h-14 bg-gray-900 p-2">
                <p class="text-center pt-1.5">Sort By:</p>
                <button value="name" onClick={handleSort} class="w-30 bg-blue-500 hover:bg-blue-800">Name</button>
                <button value="category" onClick={handleSort} class="w-30 bg-blue-500 hover:bg-blue-800">Category</button>
            </div>

            <ul class="flex-row w-full">
                {sortItem.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </ul>
        </main>
    );
}