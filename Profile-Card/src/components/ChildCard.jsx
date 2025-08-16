// import { useState } from "react"


// const ChildCard = () => {
//   const shoot=() =>{
//     alert("Great Short")
//   }
//   const goal =() =>{
//     alert("a")
//   }
//   const Shoot =(a,b) =>{
//     alert(b.type)
//   }

//   const [color, setColor] = useState("Red")

//   // const [brand, setBrand] = useState("Ford")
//   // const [model, setModel] = useState("Mustang")
//   // const [colors, setColors] = useState("Red")
//   // const [year, setYear] = useState("1986")

//   const [phone, setPhone] = useState({brands:"Oppo",
//     models:"F21 Pro",
//     colour: "Yellow",
//     years:"2029"
//   })

//   const UpdateColor = () =>{
//     setPhone(prevState =>{
//       return{...prevState, colour:"Blue"}
//     })
//   }
//   return (
//     <div>
      
//       <button onClick={shoot} class="btn btn-soft btn-secondary">Take The shoot</button>
//        <button onClick={goal} class="btn btn-soft btn-success">Take The shoot</button>
//        <button onClick={(event) => Shoot( "Goal" ,event)} className="btn btn-soft btn-info">Take The Shoot</button>
//        <hr />


//       <h1>My Favorite Color is {color}</h1>
//       <button type="button" onClick={() => setColor("Blue")} className="btn btn-warning">Change Color</button>
//       <br />
//       <hr />

//     <h1>It is {brand} car, this model is {model},this color{colors} from{year}</h1>
//     <hr />

//     <h1>MY Brand is {phone.brands}</h1>
//     <p>It's Color {phone.colour} and year {phone.years}</p>
// <hr />
//     {/* Update Colur */}

//     <h1>MY Brand is {phone.brands}</h1>
//     <p>It's Color {phone.colour} and year {phone.years}</p>
//     <button type="button" onClick={UpdateColor} className="btn btn-soft btn-warning">Blue</button>

       
//     </div>
//   )
// }

// export default ChildCard
