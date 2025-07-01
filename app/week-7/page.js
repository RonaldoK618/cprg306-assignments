"use client"
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from '../week-7/items.json';

export default function Page() {
    const [items, setItems] = useState([]);
    
    const handleAddItem = (newItem) => {
        setItems([...items, newItem])
    }

    return (
        <main>
            <h1 className="text-5xl underline m-5 p-4 font-bold">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}