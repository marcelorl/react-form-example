import React, {PropTypes} from 'react'
import Header from './common/Header'
import Sidebar from './common/Sidebar'

class App extends React.Component {

	componentDidUpdate() {
		componentHandler.upgradeDom()
	}

	render() {
		return (
			<div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header is-small-screen">
				<Header/>
				<Sidebar/>

				{this.props.children}
			</div>
		)
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
}

export default App