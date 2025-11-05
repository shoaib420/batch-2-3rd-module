import About from "./About"
import "./App.css"
function App() {
  const Name = "Abdullah"
  return (
    <div>
        <About  />
        <h2 style={{backgroundColor:"yellowgreen"}}>
          hello react js
        </h2>
      <h1 className="handing">
        hello world shoaib {Name}
      </h1>
      < About />
    </div>
  )
}

export default App


