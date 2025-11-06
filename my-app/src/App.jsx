// import About from "./About"
import Greet from './Component/Greet'
import "./App.css"
function App() {
  // const Name = "Abdullah"
  return (
    <div>
      {/* <About  />
        <h2 style={{backgroundColor:"yellowgreen"}}>
          hello react js
        </h2>
      <h1 className="handing">
        hello world shoaib {Name}
      </h1>
      < About /> */}

      <Greet name="Shahid" isAdult age={23} location={{ city: "ghotki", country: "pakistan", street: "23, aabc", zipCode: 1234 }} />
      {/* <Greet name="ikram" isAdult={false} age={23} /> */}
      <Greet name="muhammad " isAdult age={23} location={{ city: "ghotki", country: "pakistan", street: "23, aabc", zipCode: 1234 }} />
      <Greet name="ali" age={23}  location={{ city: "ghotki", country: "pakistan", street: "23, aabc", zipCode: 1234 }} />
      {/* <Greet name="wasif" age={23} /> */}
      <Greet name="javeed" age={23} location={{ city: "ghotki", country: "pakistan", street: "23, aabc", zipCode: 1234 }} />
    </div>
  )
}

export default App


