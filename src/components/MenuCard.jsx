export default function MenuCard({item}) {
    const handleDivClick = () => {
        const orderList = document.getElementById("orderList");
        const listItem = document.createElement("tr");

        // Create and append the first cell
        const itemCell = document.createElement("td");
        itemCell.appendChild(document.createTextNode(item.title));
        itemCell.classList.add("border", "border-amber-900", "px-4", "py-2");
        listItem.appendChild(itemCell);

        // Create and append the second cell
        const qtyCell = document.createElement("td");
        qtyCell.appendChild(document.createTextNode("0"));
        qtyCell.classList.add("border", "border-amber-900", "px-4", "py-2");
        listItem.appendChild(qtyCell);

        // Create and append the third cell
        const priceCell = document.createElement("td");
        priceCell.appendChild(document.createTextNode(item.price));
        priceCell.classList.add("border", "border-amber-900", "px-4", "py-2");
        listItem.appendChild(priceCell);

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
