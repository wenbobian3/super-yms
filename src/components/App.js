import React, {Component} from 'react'
import Sign from './Sign.js'
import { Switch,Route } from 'react-router-dom'

import Denglu from './Denglu.js'
import Bbw from './BBW.js'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Switch>
        <Route path="/" exact component={Sign}></Route>
        <Route path="/login" component={Denglu}></Route>
        <Route path="/bbw" component={Bbw}></Route>
        </Switch>
    )
  }
}

export default App
