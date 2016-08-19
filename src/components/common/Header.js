import React, {PropTypes} from 'react'
import {Link, IndexLink} from 'react-router'

const Header = () => {
	return (
		<header className="mdl-layout__header">
			<div className="mdl-layout__header-row">
				<div className="mdl-layout-spacer"></div>

				<div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
					<label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="sample6">
						<i className="material-icons">search</i>
					</label>
					<div className="mdl-textfield__expandable-holder">
						<input className="mdl-textfield__input" type="text" id="sample6" />
						<label className="mdl-textfield__label" htmlFor="sample-expandable">Expandable Input</label>
					</div>
				</div>

				<div className="material-icons mdl-badge mdl-badge--overlap mdl-button--icon notification"
					id="notification"
					data-badge="23">
					notifications_none
				</div>

				<ul className="mdl-menu mdl-list mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right mdl-shadow--2dp notifications-dropdown"
					htmlFor="notification">
					<li className="mdl-list__item">
						You have 23 new notifications!
					</li>
					<li className="mdl-menu__item mdl-list__item list__item--border-top">
                    <span className="mdl-list__item-primary-content">
                        <span className="mdl-list__item-avatar background-color--primary">
                            <i className="material-icons">plus_one</i>
                        </span>
                        <span>You have 3 new orders.</span>
                    </span>
                    <span className="mdl-list__item-secondary-content">
                      <span className="label">just now</span>
                    </span>
					</li>
					<li className="mdl-menu__item mdl-list__item list__item--border-top">
                    <span className="mdl-list__item-primary-content">
                        <span className="mdl-list__item-avatar background-color--secondary">
                            <i className="material-icons">error_outline</i>
                        </span>
                      <span>Database error</span>
                    </span>
                    <span className="mdl-list__item-secondary-content">
                      <span className="label">1 min</span>
                    </span>
					</li>
					<li className="mdl-menu__item mdl-list__item list__item--border-top">
                    <span className="mdl-list__item-primary-content">
                        <span className="mdl-list__item-avatar background-color--primary">
                            <i className="material-icons">new_releases</i>
                        </span>
                      <span>The Death Star is built!</span>
                    </span>
                    <span className="mdl-list__item-secondary-content">
                      <span className="label">2 hours</span>
                    </span>
					</li>
					<li className="mdl-menu__item mdl-list__item list__item--border-top">
                    <span className="mdl-list__item-primary-content">
                        <span className="mdl-list__item-avatar background-color--primary">
                            <i className="material-icons">mail_outline</i>
                        </span>
                      <span>You have 4 new mails.</span>
                    </span>
                    <span className="mdl-list__item-secondary-content">
                      <span className="label">5 days</span>
                    </span>
					</li>
					<li className="mdl-list__item list__item--border-top">
						<button href="#" className="mdl-button mdl-js-button mdl-js-ripple-effect">ALL NOTIFICATIONS
						</button>
					</li>
				</ul>

				<div className="material-icons mdl-badge mdl-badge--overlap mdl-button--icon message" id="inbox"
					data-badge="4">
					mail_outline
				</div>

				<ul className="mdl-menu mdl-list mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right mdl-shadow--2dp messages-dropdown"
					htmlFor="inbox">
					<li className="mdl-list__item">
						You have 4 new messages!
					</li>
					<li className="mdl-menu__item mdl-list__item mdl-list__item--two-line list__item--border-top">
                    <span className="mdl-list__item-primary-content">
                        <span className="mdl-list__item-avatar background-color--primary">
                            <text>A</text>
                        </span>
                        <span>Alice</span>
                        <span className="mdl-list__item-sub-title">Birthday Party</span>
                    </span>
                    <span className="mdl-list__item-secondary-content">
                      <span className="label label--transparent">just now</span>
                    </span>
					</li>
					<li className="mdl-menu__item mdl-list__item mdl-list__item--two-line list__item--border-top">
                    <span className="mdl-list__item-primary-content">
                        <span className="mdl-list__item-avatar background-color--baby-blue">
                            <text>M</text>
                        </span>
                        <span>Mike</span>
                        <span className="mdl-list__item-sub-title">No theme</span>
                    </span>
                    <span className="mdl-list__item-secondary-content">
                      <span className="label label--transparent">5 min</span>
                    </span>
					</li>
					<li className="mdl-menu__item mdl-list__item mdl-list__item--two-line list__item--border-top">
                    <span className="mdl-list__item-primary-content">
                        <span className="mdl-list__item-avatar background-color--cerulean">
                            <text>D</text>
                        </span>
                        <span>Darth</span>
                        <span className="mdl-list__item-sub-title">Suggestion</span>
                    </span>
                    <span className="mdl-list__item-secondary-content">
                      <span className="label label--transparent">23 hours</span>
                    </span>
					</li>
					<li className="mdl-menu__item mdl-list__item mdl-list__item--two-line list__item--border-top">
                    <span className="mdl-list__item-primary-content">
                        <span className="mdl-list__item-avatar background-color--mint">
                            <text>D</text>
                        </span>
                        <span>Don McDuket</span>
                        <span className="mdl-list__item-sub-title">NEWS</span>
                    </span>
                    <span className="mdl-list__item-secondary-content">
                      <span className="label label--transparent">30 Nov</span>
                    </span>
					</li>
					<li className="mdl-list__item list__item--border-top">
						<button href="#" className="mdl-button mdl-js-button mdl-js-ripple-effect">SHOW ALL MESSAGES
						</button>
					</li>
				</ul>

				<div className="avatar-dropdown" id="icon">
					<span>Luke</span>
					<img src="{logo}"/>
				</div>

				<ul className="mdl-menu mdl-list mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect mdl-shadow--2dp account-dropdown"
					htmlFor="icon">
					<li className="mdl-list__item mdl-list__item--two-line">
                    <span className="mdl-list__item-primary-content">
                        <span className="material-icons mdl-list__item-avatar"></span>
                        <span>Luke</span>
                        <span className="mdl-list__item-sub-title">Luke@skywalker.com</span>
                    </span>
					</li>
					<li className="list__item--border-top"></li>
					<li className="mdl-menu__item mdl-list__item">
                    <span className="mdl-list__item-primary-content">
                        <i className="material-icons mdl-list__item-icon">account_circle</i>
                        My account
                    </span>
					</li>
					<li className="mdl-menu__item mdl-list__item">
                    <span className="mdl-list__item-primary-content">
                        <i className="material-icons mdl-list__item-icon">check_box</i>
                        My tasks
                    </span>
                    <span className="mdl-list__item-secondary-content">
                      <span className="label background-color--primary">3 new</span>
                    </span>
					</li>
					<li className="mdl-menu__item mdl-list__item">
                    <span className="mdl-list__item-primary-content">
                        <i className="material-icons mdl-list__item-icon">perm_contact_calendar</i>
                        My events
                    </span>
					</li>
					<li className="list__item--border-top"></li>
					<li className="mdl-menu__item mdl-list__item">
                    <span className="mdl-list__item-primary-content">
                        <i className="material-icons mdl-list__item-icon">settings</i>
                        Settings
                    </span>
					</li>
					<li className="mdl-menu__item mdl-list__item">
                    <span className="mdl-list__item-primary-content">
                        <i className="material-icons mdl-list__item-icon text-color--secondary">exit_to_app</i>
                        Log out
                    </span>
					</li>
				</ul>

				<button id="more"
						className="mdl-button mdl-js-button mdl-button--icon">
					<i className="material-icons">more_vert</i>
				</button>

				<ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect mdl-shadow--2dp settings-dropdown"
					htmlFor="more">
					<li className="mdl-menu__item">
						Settings
					</li>
					<a className="mdl-menu__item" href="https://github.com/CreativeIT/getmdl-dashboard/issues">
						Support
					</a>
					<li className="mdl-menu__item">
						F.A.Q.
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header