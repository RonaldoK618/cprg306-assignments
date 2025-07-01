"use client"
import Item from "./item";
import React, { useState } from "react";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");

    const sortItem = [...items].sort((a,b) => {
        if (sortBy == "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy == "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    const handleSort = (event) => {
        setSortBy(event.target.value);
    }

    return (
        <main className="flex-row w-full max-w-sm">
            <div className="flex justify-between ml-5 h-14 bg-gray-900 p-2">
                <p className="text-center pt-1.5">Sort By:</p>
                <button value="name" onClick={handleSort} className="w-30 bg-blue-500 hover:bg-blue-800">Name</button>
                <button value="category" onClick={handleSort} className="w-30 bg-blue-500 hover:bg-blue-800">Category</button>
            </div>

            <ul className="flex-row w-full">
                {sortItem.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </ul>
        </main>
    );
}