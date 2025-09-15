export default function MenuCard({item}) {

    const handleDivClick = () => {
        const orderList = document.getElementById("orderList");
        const listItem = document.createElement("li");
        listItem.textContent = `${item.title} - ${item.price}`;
        listItem.classList.add("border", "border-amber-900", "py-2", "text-xl", "px-4");
        orderList.appendChild(listItem);
    };

    return (
        <div
            className="bg-amber-50 p-4 text-center"
            onClick={handleDivClick}
        >
            <img src={`src/assets/${item.imageName}.png`} alt={item.title} className="w-24 mx-auto"/>
            <h2 className="mt-2 text-xl">{item.title}</h2>
            <strong className="text-xl">{item.price}</strong>
        </div>
    );
}
