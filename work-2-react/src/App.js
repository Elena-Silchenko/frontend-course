import './App.css'

import Mercury from './Mercury'
import Venus from './Venus'
import Earth from './Earth'
import Mars from './Mars'
import Jupiter from './Jupiter'
import Saturn from './Saturn'
import Uranium from './Uranium'
import Neptune from './Neptune'

import Additional from './Additional'
import Footer from './Footer'

function App() {
  return (
    <div className="wrapper">
      <div style= {{ padding: '18px 23px 0px 25px' }}>
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
        <Uranium />
        <Neptune />
        <Additional />
      </div>

      <Footer />
    </div>
  )
}

export default App
