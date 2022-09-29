import './App.css'

import Mercury from './Mercury'
import Venus from './Venus'

function App() {
  return (
    <div className="wrapper">
      <div style= {{ padding: '18px 23px 0px 25px' }}>
        <Mercury />
        <Venus />
      </div>
    </div>
  )
}

export default App
