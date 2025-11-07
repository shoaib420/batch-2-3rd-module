import React from "react";


 const Greet = (props) => {
    const {name, age , location} = props;
    const {city, country, street, zipCode} = location;
    console.log(props, "props")
    return (
        <React.Fragment>
            <h1>
                hello i am {name} my age {age}
                 {/* {isAdult === true ? "Adult" : "your child"} */}
           
            </h1>
            <p>
                     {/* {JSON.stringify(location)} */}
                   
            </p>
            {location &&
            <ul>
                <li>city: {city}</li>
                 <li>country: {country}</li>
                  <li>street: {street}</li>
                   <li>zipCode: {zipCode}</li>
            </ul>
            }
        </React.Fragment              >
    )
}

export default Greet

