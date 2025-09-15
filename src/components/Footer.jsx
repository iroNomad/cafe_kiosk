export function Footer() {
    return (
        <div className="bg-amber-50 text-center p-4 mt-4 border-t-2 border-amber-900 flex">
            <table id="orderList" className="table-auto w-full border-collapse border border-amber-900 text-left">
                <tr className="h-2">
                    <th className="border border-amber-900 px-4 py-2 w-1/2">Item</th>
                    <th className="border border-amber-900 px-4 py-2 w-1/4">Qty</th>
                    <th className="border border-amber-900 px-4 py-2 w-1/4">Price</th>
                </tr>
            </table>
            <div className="w-1/2 text-right">
                <button className="bg-amber-900 my-1 py-3 text-white font-semibold text-4xl w-40">Order</button>
                <br/>
                <button className="my-1 py-1 border-2 border-amber-900 text-amber-900 font-semibold text-2xl w-40">Reset</button>
            </div>
        </div>
    );
}