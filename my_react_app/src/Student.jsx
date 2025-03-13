
function Student(props){
    return(
        <div>
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isStudent ? "Yes" : "No"}</p> <hr />
        </div>
    );
}

export default Student