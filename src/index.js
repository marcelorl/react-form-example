import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import store from './config/configureStore'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import routes from './config/routes'
import './config'

import 'react-datepicker/dist/react-datepicker.css'
import 'dataminr-react-components/dist/react-components.css'
import 'datatables.net-dt/css/jquery.dataTables.css'

import './assets/application.scss'

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
)