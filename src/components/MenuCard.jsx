export default function MenuCard({item}) {
    const handleDivClick = () => {
        const orderList = document.getElementById("orderList");
        const listItem = document.createElement("tr");

        createTableCell(listItem, item.title);
        createTableCell(listItem, "0"); // for the quantity
        createTableCell(listItem, item.price);

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

function createTableCell(parent, textContent) {
    const cell = document.createElement("td");
    cell.appendChild(document.createTextNode(textContent));
    cell.classList.add("border", "border-amber-900", "px-4", "py-2");
    parent.appendChild(cell);
}
