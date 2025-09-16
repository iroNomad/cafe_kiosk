export default function OrderWindow({ isOpen, onClose}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-amber-50 px-20 pt-10 p-10 shadow-lg max-w relative border-2 border-amber-900 flex flex-col items-center">
                <div className="flex gap-10 p-4">
                    <div className="bg-white border-2 w-60">
                        <h3 className="text-3xl mt-2">Dine-in</h3>
                        <img src="../assets/dine-in.png" alt="Dine-in" className="p-8"/>
                    </div>
                    <div className="bg-white border-2 w-60">
                        <h3 className="text-3xl mt-2">Takeout</h3>
                        <img src="src/assets/takeout.png" alt="Takeout" className="p-8"/>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="text-xl bg-amber-900 text-white py-2 px-10 mt-6"
                >
                    Go back
                </button>
            </div>
        </div>
    );
};