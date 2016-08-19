import React, {PropTypes} from 'react'
import { Link, IndexLink } from 'react-router'
import T from 'i18n-react'

const Sidebar = () => {
	return (
		<div className="mdl-layout__drawer">
			<header>darkboard</header>
			<nav className="mdl-navigation">
				<IndexLink className="mdl-navigation__link" to="/" activeClassName="mdl-navigation__link--current">
					<i className="material-icons" role="presentation">dashboard</i>
					{T.translate("sidebar.dashboard")}
				</IndexLink>
				<Link className="mdl-navigation__link" to="/shop" activeClassName="mdl-navigation__link--current">
					<i className="material-icons" role="presentation">store</i>
					{T.translate("sidebar.shops")}
				</Link>
			</nav>
		</div>
	)
}

export default Sidebar