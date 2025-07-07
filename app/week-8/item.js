export default function Item({ id, name, quantity, category, onSelect }) {
    return (
        <ul className = "m-2 p-2 bg-gray-900 hover:bg-gray-700" onClick={() => onSelect(id, name)}>
            <h2 className = "text-2xl font-bold">{name}</h2>
            <div>Buy {quantity} in {category}</div>
        </ul>
    );
}