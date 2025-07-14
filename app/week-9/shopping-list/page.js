"use client"
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from '../shopping-list/items.json';
import MealIdea from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItem, setSelectedItem] = useState(null);

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    const handleAddItem = (newItem) => {
        setItems([...items, newItem])
    }

    const handleItemSelect = (item) => {
        const cleanName = cleanItemName(item.name);
        setSelectedItem(cleanName);
    }

    const cleanItemName = (itemName) => {
        let clean = itemName.split(',')[0].trim();
        clean = clean.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        return clean;
    }

    return (
        <main>
            {
                user ? (
                    <section className="flex p-4">
                        <div className="flex-1 w-full max-w-sm mr-20">
                            <h1 className="text-5xl underline p-4 m-1.5 font-bold w-full text-center font-serif">Shopping List</h1>
                            <NewItem onAddItem={handleAddItem} />
                            <ItemList items={items} onItemSelect={handleItemSelect}/>
                        </div>
                        <div className="flex-1">
                            <MealIdea ingredient={selectedItem}/>
                        </div>
                    </section>
                ) : (
                    <section>
                        <p>You must be logged in to view this page</p>
                        <Link href="./">Click here to redirect to the landing page</Link>
                    </section>
                )
            }
        </main>
    );
}