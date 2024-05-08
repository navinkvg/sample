function Student(props)
{
    return(
        <div className="details">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student:{props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

Student.defaultProps ={
    name : "Guest",
    age:0,
    isStudent:false,
} 
export default Student

