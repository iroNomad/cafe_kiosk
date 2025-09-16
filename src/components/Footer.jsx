import React, { useState } from 'react';
import OrderWindow from './OrderWindow';

export function Footer() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleReset = () => {
        const orderListTable = document.getElementById("orderList");
        const existingRows = orderListTable.getElementsByTagName("tr");

        // Remove all rows except the header
        while (existingRows.length > 1) {
            orderListTable.deleteRow(1);
        }
    }
    return (
        <div className="bg-amber-50 text-center p-4 mt-4 border-t-2 border-amber-900 flex">
            <table id="orderList" className="table-auto w-full border-collapse border border-amber-900 text-left h-2">
                <tr>
                    <th className="border border-amber-900 py-2 px-4 w-1/2">Item</th>
                    <th className="border border-amber-900 py-2 px-4 w-1/4">Qty</th>
                    <th className="border border-amber-900 py-2 px-4 w-1/4">Price</th>
                </tr>
            </table>
            <div className="w-1/2 text-right">
                <button
                    className="bg-amber-900 my-1 py-3 text-white font-semibold text-4xl w-40"
                    onClick={openModal}
                >Order</button>
                <br/>
                <button
                    className="my-1 py-1 border-2 border-amber-900 text-amber-900 font-semibold text-2xl w-40"
                    onClick={handleReset}
                >Reset</button>
            </div>
            <OrderWindow isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <p>Thank you for your order! Your items will be ready soon.</p>

            </OrderWindow>
        </div>
    );
}