import React, {PropTypes} from 'react'
import {actions} from 'react-redux-form'
import store from '../../config/configureStore'
import MaskedInput from 'react-maskedinput'
import sanitizeCep from 'sanitize-cep'
import helper from '../../config/helper'
import Utils from 'dataminr-react-components/dist/utils/Utils'
import service from './ShopService'
import T from 'i18n-react'

class ShopZipcodeFieldComponent extends React.Component {
	constructor(props, context) {
		super(props, context)

		this.onChange = this.onChange.bind(this)
	}

	onChange(event) {
		store.dispatch(actions.change(`shop.${event.target.name}`, event.target.value))
	}

	searchZipcode() {
		let {shop} = store.getState()
		let nZipcode = sanitizeCep(shop.zipcode)

		if(_.isNull(nZipcode)) {
			Utils.pageMessage(T.translate("shop.form.labels.zipcode_invalid"), 'error')
			return false
		}

		return service.searchZipCode(nZipcode)
			.then(response => {
				store.dispatch(actions.change('shop.address', response.data.logradouro))
				store.dispatch(actions.change('shop.state', response.data.estado))
				store.dispatch(actions.change('shop.city', response.data.cidade))
				store.dispatch(actions.change('shop.suberb', response.data.bairro))

				helper.isDirty()
			})
			.catch(() => {
				Utils.pageMessage('CEP Inválido', 'error')
			})
	}

	render() {
		let {zipcode} = this.props

		return (
			<div className="mdl-cell mdl-cell--4-col">
				<div className="mdl-cell mdl-cell--11-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					<MaskedInput className="mdl-textfield__input" id="zipcode" name="zipcode" value={zipcode} mask="11111-111" onChange={this.onChange} />
					<label className="mdl-textfield__label" htmlFor="zipcode">{T.translate("shop.form.labels.zipcode")}</label>
				</div>

				<div className="mdl-cell mdl-cell--1-col mdl-textfield">
					<button
						id="btn-search-zipcode"
						onClick={this.searchZipcode}
						type="button"
						className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--fab mdl-shadow--8dp mdl-button--colored mdl-button--mini-icon">
						<i className="material-icons mdl-js-ripple-effect">search</i>
					</button>
				</div>
			</div>
		)
	}
}

ShopZipcodeFieldComponent.propTypes = {
	zipcode: PropTypes.string.isRequired
}

export default ShopZipcodeFieldComponent