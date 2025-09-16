import './index.css'
import MenuCard from "./components/MenuCard.jsx";
import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";

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
                <Header/>
                <div className="grid grid-cols-3 gap-4 p-4">
                    {menuItems.map(item => (
                        <MenuCard key={item.title} item={item}/>
                    ))}
                </div>
                <Footer/>
            </div>
        </>
    );
}

