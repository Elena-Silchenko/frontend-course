import './App.css'

import Mercury from './Mercury'
import Venus from './Venus'
import Earth from './Earth'

function App() {
  return (
    <div className="wrapper">
      <div style= {{ padding: '18px 23px 0px 25px' }}>
        <Mercury />
        <Venus />
        <Earth />
      </div>
    </div>
  )
}

export default App
