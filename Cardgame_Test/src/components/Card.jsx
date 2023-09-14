
export default function Card(){
    return(
        <div className = "card">
            <img src="https://placebeard.it/240x200"></img>
            <ul>
                <li>
                    <span>Rudeness: </span>
                    <span>15%</span>
                </li>
                <li>
                    <span>Pollution: </span>
                    <span>75M²</span>
                </li>
                <li>
                    <span>Destruction: </span>
                    <span>5ML</span>
                </li>
                <li>
                    <span>Weight: </span>
                    <span>68Kg</span>
                </li>
                <h3> </h3>
                <li>
                    <span>Rarity: </span>
                    <span>Extra Rare</span>
                </li>
            </ul>
        </div>
    );
}