import './index.css'
import MenuCard from "./components/MenuCard.jsx";
import logo from "./assets/java_logo.png"

const menuItems = [
    {imageName: "americano", title: "Americano", price: "$ 1.50"},
    {imageName: "vanilla_latte", title: "Vanilla Latte", price: "$ 2.00"},
    {imageName: "bubble_tea", title: "Bubble Tea", price: "$ 3.20"},
    {imageName: "strawberry_smoothie", title: "Strawberry Smoothie", price: "$ 3.50"},
    {imageName: "iced_tea", title: "Iced Tea", price: "$ 2.20"},
    {imageName: "mint_latte", title: "Mint Latte", price: "$ 2.80"},
    {imageName: "orange_juice", title: "Orange Juice", price: "$ 2.80"},
    {imageName: "orange_latte", title: "Orange Latte", price: "$ 2.80"},
    {imageName: "pineapple_juice", title: "Pineapple Juice", price: "$ 2.80"}
];

export default function App() {
    return (
        <>
            <div className="bg-amber-900 w-200 m-auto p-0.5">
                <div className="bg-amber-50 ml-4 mt-4 mr-4 flex justify-between items-start">
                    <img src={logo} className="w-50"/>
                    <div className="text-2xl">
                        <button className="bg-amber-300 mx-5 my-2 px-4 border-2 border-amber-900">English</button>
                        <br/>
                        <button className="bg-amber-300 mx-5 my-2 px-4 border-2 border-amber-900">Korean</button>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4">
                    {menuItems.map(item => (
                        <MenuCard key={item.title} item={item}/>
                    ))}
                </div>
            </div>
        </>
    );
}

