export default function MenuCard({item}) {
    const handleClick = () => {
        const orderListTable = document.getElementById("orderList");
        const existingRows = orderListTable.getElementsByTagName("tr");

        // Check if the item is already in the list
        for (let i = 0; i < existingRows.length; i++) {
            const row = existingRows[i];
            const itemNameCell = row.cells[0]; // The first cell (item name)

            if (itemNameCell && itemNameCell.textContent === item.title) {
                // Item found, so increment the quantity
                const qtyCell = row.cells[1]; // The second cell (quantity)
                let currentQty = parseInt(qtyCell.textContent, 10);
                qtyCell.textContent = (currentQty + 1).toString();

                // increment the price
                const priceCell = row.cells[2]; // The third cell (price)
                let price = parseFloat(item.price.replace('$', '').trim());
                priceCell.textContent = `$ ${(price * (currentQty + 1)).toFixed(2)}`;
                return; // Exit the function
            }
        }

        // If the loop completes without finding the item, add a new row
        const listItem = document.createElement("tr");
        createTableCell(listItem, item.title);
        createTableCell(listItem, "1"); // Set initial quantity to 1
        createTableCell(listItem, item.price);
        orderListTable.appendChild(listItem);
    };

    return (
        <div
            className="bg-amber-50 p-4 text-center"
            onClick={handleClick}
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
