export default function MenuCard({item}) {
    return (
        <div className="bg-amber-50 p-4 text-center">
            <img src={`src/assets/${item.imageName}.png`} alt={item.title} className="w-24 mx-auto"/>
            <h2 className="mt-2">{item.title}</h2>
            <strong>{item.price}</strong>
        </div>
    );
}
