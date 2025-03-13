                 //   render lists

function List(){
  const fruits = [{id: 1, name: `apple`, calories: 95},
                  {id: 2, name: `banana`, calories: 45},
                  {id: 3, name: `orange`, calories: 103},
                  {id: 4, name: `pinaple`, calories: 37}];

//    fruits.sort((a,b) => a.name.localeCompare(b.name));  // ALPAHABETICAL
//    fruits.sort((a,b) => B.name.localeCompare(A.name));  // REVERS ALPABETICALE
//    fruits.sort((a,b) =>a.calories - b.calories);  //NUMERIC
//     fruits.sort((a,b) =>b.calories - a.calories);  // REVERSE NUMERI

  const listItams = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b> </li>);

  return(<ol>{listItams}</ol>);
}
export default List