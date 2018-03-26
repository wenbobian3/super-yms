import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'

import {HashRouter as Router} from 'react-router-dom'

import './static/style/app.css'

import App from './components/App'

ReactDOM.render(<Router><App></App></Router> , document.getElementById('root'));
