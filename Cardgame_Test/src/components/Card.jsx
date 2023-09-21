
export default function Card(){
    return(
        <div className = "card">
            <img src="https://placebeard.it/240x200"></img>
            <ul className="stat-list">
                <li className="stat-list-item">
                    <span>Rudeness: </span>
                    <span>15%</span>
                </li>
                <li className="stat-list-item">
                    <span>Pollution: </span>
                    <span>75M²</span>
                </li>
                <li className="stat-list-item">
                    <span>Destruction: </span>
                    <span>5ML</span>
                </li>
                <li className="stat-list-item">
                    <span>Weight: </span>
                    <span>68Kg</span>
                </li>
                <h3> </h3>
                <li className="stat-list-item">
                    <span>Rarity: </span>
                    <span>Extra Rare</span>
                </li>
            </ul>
        </div>
    );
}