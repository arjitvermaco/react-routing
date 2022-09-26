import ListItem from "./ListItem";

export default function Variables() {
  //Strings
  let greeting = "Welcome to my website";
  let greeting2 = "How are you??";

  //Numbers
  let num1 = 12;
  let num2 = 55;
  let num3 = "45"; // String

  //Objects
  let car = {
    brand: "Tata",
    year: 2022,
    color: "Red",
    engine: "2000cc",
  };

  //Arrays
  let trainees = ["Akash", "Ankit", "rahul", "Pooja", "Shivam"];

  let cars = [
    {
        name : "Kia",
        color:"Blue"
    },
    {
        name:"Tata",
        color:"Red"
    },
    { 
        name:"Maruti",
        color:"White"
    }
  ]

  return (
    <>
      <h1>Good Morning! {greeting} !</h1>
      <h3>{greeting2}</h3>
      {/* <p>{num1 / 2}</p>
      <p>{num3 + num1}</p> */}
      <h1>Car Details</h1>
      <p>Car Brand : {car.brand}</p>
      <p>Car Year : {car.year}</p>
      <p>Car color : {car.color}</p>
      <p>Car Engine : {car.engine}</p>

      <h1>Trainees Details</h1>
      <ul>
      {trainees.map((trainee,index) => {
        return <ListItem key={index} trainee={trainee}/>;
      })}
      </ul>

      <h3>Cars Details</h3>
      {cars.map((car,index)=>{
        return(
            <div key={index}>
            <h4>Car Name : {car.name}</h4>
            <h4>Car Color : {car.color}</h4>
            </div>
        )
      })}

    </>
  );
}
// Array.map()