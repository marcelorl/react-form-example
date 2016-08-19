import React, {PropTypes} from 'react'
import {Field, actions} from 'react-redux-form'
import store from '../../config/configureStore'
import T from 'i18n-react'

class ShopPhoneFieldComponent extends React.Component {
	constructor(props, context) {
		super(props, context)
	}

	addPhone(phones) {
		let emptyPhones = phones.filter(phone => {
			return phone.trim() === ''
		})

		if(!emptyPhones.length)
		{
			store.dispatch(actions.push('shop.phones', ''))
		}
	}

	removePhone(index) {
		store.dispatch(actions.remove('shop.phones', index))
	}

	renderActionButtons(index) {
		let {phones} = this.props

		if((phones.length - 1) === index) {
			return(
				<button
					type="button"
					onClick={() => this.addPhone(phones)}
					className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--fab mdl-shadow--8dp mdl-button--colored mdl-button--mini-icon">
					<i className="material-icons mdl-js-ripple-effect">add</i>
				</button>
			)
		} else {
			return(
				<button
					type="button"
					onClick={(index) => this.removePhone(index)}
					className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--fab mdl-shadow--8dp mdl-button--colored mdl-button--secondary mdl-button--mini-icon">
					<i className="material-icons mdl-js-ripple-effect">delete</i>
				</button>
			)
		}
	}

	render() {
		let {phones} = this.props

		return (
			<div className="form__article employer-form__contacts">
				<h3>{T.translate("shop.form.labels.contacts")}</h3>

				{phones.map((phone, index) =>
					<Field model={`shop.phones[${index}]`} key={index} className="mdl-grid">
						<div className="mdl-cell mdl-cell--4-col">
							<div className="mdl-cell mdl-cell--11-col marginright input-group pull-left">
								<i className="material-icons pull-left">call</i>
								<div className="mdl-textfield mdl-js-textfield pull-left">
									<input className="mdl-textfield__input" type="text" id={`phone-${index}`} placeholder="XXXX-XXXX" />
								</div>
							</div>
							<div className="mdl-cell mdl-cell--1-col mdl-textfield">
								{this.renderActionButtons(index)}
							</div>
						</div>
					</Field>
				)}
			</div>
		)
	}
}

ShopPhoneFieldComponent.propTypes = {
	phones: PropTypes.array.isRequired
}

export default ShopPhoneFieldComponent