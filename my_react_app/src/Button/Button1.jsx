//         click ecents

function Button1(){

    // const handalClick = ()=> console.log(`hello`);
    // return( <button onClick={handalClick}>Click me 😶</button> )
    // const handalClick2 = (name)=> console.log(`${name} stop clicking me`)
    // return(<button onClick={handalClick2( `irakli`)}>Click me 😶</button> )
     
    let count = 0;
    const handalClick = (name)=>{
        if(count < 3){
            count++;
            console.log(`${name} you click me ${count} time/s`);
        }
        else{
            console,log(`${name} stop clicking me!!!`);
        }
    };
    return(<button onClick={ ()=> handalClick(`irakli`)}>Click me 😶</button> )
}

export default Button1