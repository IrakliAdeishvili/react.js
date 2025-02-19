const food1 = `Orange`;
const food2 = `Apple`;
const food3 = `Melon`;
const food4 = ` Banana`;

function Food(){
    return(
        <ul>
            <li>Kiwi</li>
            <li>{food1}</li>
            <li>{food3}</li>
            <li>{food4}</li>
            <li>{food2}</li>
        </ul>
    )
}

export default Food