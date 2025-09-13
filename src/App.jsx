import './index.css'
import MenuCard from "./components/MenuCard.jsx";

const menuItems = [
    {image: "americano", title: "Americano", price: "$ 1.50"},
    {image: "vanilla_latte", title: "Vanilla Latte", price: "$ 2.00"},
    {image: "bubble_tea", title: "Bubble Tea", price: "$ 3.20"},
    {image: "strawberry_smoothie", title: "Strawberry Smoothie", price: "$ 3.50"},
    {image: "iced_tea", title: "Iced Tea", price: "$ 2.20"},
    {image: "mint_latte", title: "Mint Latte", price: "$ 2.80"},
    {image: "orange_juice", title: "Orange Juice", price: "$ 2.80"},
    {image: "orange_latte", title: "Orange Latte", price: "$ 2.80"},
    {image: "pineapple_juice", title: "Pineapple Juice", price: "$ 2.80"}
];

export default function App() {
    return (
        <>
            <div className="bg-gray-600 grid grid-cols-3 gap-4 p-4 w-200 m-auto">
                {menuItems.map(item => (
                    <MenuCard key={item.title} item={item}/>
                ))}
            </div>
        </>
    );
}

