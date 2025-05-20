export default function Item({name, quantity, category}) {
    return (
        <ul class = "m-5 bg-gray-900">
            <li>{name}</li>
            <li>Quantity: {quantity}</li>
            <li>Category: {category}</li>
        </ul>
    );
}