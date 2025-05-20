export default function Item({name, quantity, category}) {
    return (
        <ul class = "m-5 p-4 bg-gray-900 border border-amber-400 w-auto">
            <h2 class = "text-2xl font-bold">{name}</h2>
            <div>Buy {quantity} in {category}</div>
        </ul>
    );
}