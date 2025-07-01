export default function Item({id, name, quantity, category}) {
    return (
        <ul className = "m-5 p-4 bg-gray-900">
            <h2 className = "text-2xl font-bold">{name}</h2>
            <div>Buy {quantity} in {category}</div>
        </ul>
    );
}