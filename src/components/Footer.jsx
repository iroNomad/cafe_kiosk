export function Footer() {
    return (
        <div className="bg-amber-50 text-center p-4 mt-4 border-t-2 border-amber-900 flex">
            <ol id="orderList" className="text-left w-1/2">

            </ol>
            <div className="w-1/2 text-right">
                <button className="bg-amber-900 my-1 py-3 text-white font-semibold text-4xl w-40">Order</button>
                <br/>
                <button className="my-1 py-1 border-2 border-amber-900 text-amber-900 font-semibold text-2xl w-40">Reset</button>
            </div>
        </div>
    );
}