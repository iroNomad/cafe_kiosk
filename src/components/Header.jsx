import logo from "../assets/java_logo.png";

export function Header() {
    return (
        <div className="bg-amber-50 ml-4 mt-4 mr-4 flex justify-between items-start">
            <img src={logo} className="w-50"/>
            <div className="text-2xl">
                <button className="text-amber-900 mx-5 my-2 px-4 font-semibold border-2 border-amber-900">English</button>
                <br/>
                <button className="text-amber-900 mx-5 my-2 px-4 font-semibold border-2 border-amber-900">Korean</button>
            </div>
        </div>
    )
}