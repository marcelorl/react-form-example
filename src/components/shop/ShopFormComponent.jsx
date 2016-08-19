import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {Field, Form, Errors, actions} from 'react-redux-form'
import {Link} from 'react-router'
import helper from '../../config/helper'
import MaskedInput from 'react-maskedinput'
import DatePicker from 'react-datepicker'
import service from './ShopService'
import ZipcodeFinder from './ZipcodeField.jsx'
import PhoneList from './PhoneField.jsx'
import T from 'i18n-react'

class ShopFormComponent extends React.Component {
	constructor(props, context) {
		super(props, context)

		this.onChange = this.onChange.bind(this)
		this.onChangeDate = this.onChangeDate.bind(this)

		service.find(this.props.params.id)
	}

	componentDidUpdate() {
		componentHandler.upgradeDom()
	}

	onChange(event) {
		let {dispatch} = (this.props)
		dispatch(actions.change(`shop.${event.target.name}`, event.target.value))
	}

	onChangeDate(moment) {
		let {dispatch} = (this.props)
		dispatch(actions.change('shop.birth_date', moment))
	}

	render() {
		let {shop} = this.props

		return (
			<main className="mdl-layout__content mdl-color--grey-100">
				<div className="mdl-card mdl-shadow--2dp employer-form">
					<div className="mdl-card__title">
						<h2>Loja</h2>
						<Link className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" to="/shop">
							<i className="material-icons" role="presentation">list</i>
							{T.translate("shop.form.buttons.list_shops")}
						</Link>
					</div>

					<div className="mdl-card__supporting-text">
						<Form model="shop" onSubmit={service.save} className="form">
							<div className="form__article">
								<div className="mdl-grid">
									<Field model="shop.name" validators={{isRequired: helper.isRequired}}
											className="mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input className="mdl-textfield__input" type="text" id="name" />
										<label className="mdl-textfield__label" htmlFor="name">{T.translate("shop.form.labels.name")}</label>
										<Errors
											className="validation__error"
											show={{ touched: true, focus: false }}
											model="shop.name"
											messages={helper.validationMessages()}
										/>
									</Field>
								</div>
								<div className="mdl-grid">
									<Field model="shop.owner_name" validators={{isRequired: helper.isRequired}}
										   className="mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input className="mdl-textfield__input" type="text" id="owner_name" />
										<label className="mdl-textfield__label" htmlFor="owner_name">{T.translate("shop.form.labels.owner_name")}</label>
										<Errors
											className="validation__error"
											show={{ touched: true, focus: false }}
											model="shop.owner_name"
											messages={helper.validationMessages()}
										/>
									</Field>
								</div>

								<div className="mdl-grid">
									<Field model="shop.email" validators={{isEmail: helper.isEmail}}
										   className="mdl-cell mdl-cell--6-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input className="mdl-textfield__input" type="text" id="email" />
										<label className="mdl-textfield__label" htmlFor="email">{T.translate("shop.form.labels.email")}</label>
										<Errors
											className="validation__error"
											wrapper="span"
											show={{ touched: true, focus: false }}
											model="shop.email"
											messages={helper.validationMessages()}
										/>
									</Field>

									<Field model="shop.domain" validators={{isRequired: helper.isRequired}}
										   className="mdl-cell mdl-cell--6-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input className="mdl-textfield__input" type="text" id="domain" />
										<label className="mdl-textfield__label" htmlFor="domain">{T.translate("shop.form.labels.domain")}</label>
										<Errors
											className="validation__error"
											wrapper="span"
											show={{ touched: true, focus: false }}
											model="shop.domain"
											messages={helper.validationMessages()}
										/>
									</Field>
								</div>

								<div className="mdl-grid">
									<div className="mdl-cell mdl-cell--4-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<DatePicker className="mdl-textfield__input" id="birth_date" name="birth_date" dateFormat="DD/MM/YYYY" selected={shop.birth_date} onChange={this.onChangeDate} />
										<label className="mdl-textfield__label" htmlFor="birth_date">{T.translate("shop.form.labels.birth_date")}</label>
									</div>

									<div className="mdl-cell mdl-cell--4-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<MaskedInput mask="11.111.111/1111-11" className="mdl-textfield__input" name="cnpj" id="cnpj" value={shop.cnpj} onChange={this.onChange} />
										<label className="mdl-textfield__label" htmlFor="cnpj">{T.translate("shop.form.labels.cnpj")}</label>
									</div>

									<ZipcodeFinder zipcode={shop.zipcode} />
								</div>

								<div className="mdl-grid">
									<Field model="shop.address" validators={{isRequired: helper.isRequired}}
										   className="mdl-cell mdl-cell--6-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input className="mdl-textfield__input dirty-input" type="text" id="address" />
										<label className="mdl-textfield__label" htmlFor="address">{T.translate("shop.form.labels.address")}</label>
										<Errors
											className="validation__error"
											wrapper="span"
											show={{ touched: true, focus: false }}
											model="shop.address"
											messages={helper.validationMessages()}
										/>
									</Field>

									<Field model="shop.suberb" validators={{isRequired: helper.isRequired}}
										   className="mdl-cell mdl-cell--6-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input className="mdl-textfield__input dirty-input" type="text" id="suberb" />
										<label className="mdl-textfield__label" htmlFor="suberb">{T.translate("shop.form.labels.suberb")}</label>
										<Errors
											className="validation__error"
											wrapper="span"
											show={{ touched: true, focus: false }}
											model="shop.suberb"
											messages={helper.validationMessages()}
										/>
									</Field>
								</div>

								<div className="mdl-grid">
									<Field model="shop.number" validators={{isRequired: helper.isRequired, isInt: helper.isInt}}
										   className="mdl-cell mdl-cell--4-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input className="mdl-textfield__input" type="text" id="number" />
										<label className="mdl-textfield__label" htmlFor="number">{T.translate("shop.form.labels.number")}</label>
										<Errors
											className="validation__error"
											wrapper="span"
											show={{ touched: true, focus: false }}
											model="shop.number"
											messages={helper.validationMessages()}
										/>
									</Field>

									<Field model="shop.state" validators={{isRequired: helper.isRequired}}
										   className="mdl-cell mdl-cell--4-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input className="mdl-textfield__input dirty-input" type="text" id="state" />
										<label className="mdl-textfield__label" htmlFor="state">{T.translate("shop.form.labels.state")}</label>
										<Errors
											className="validation__error"
											wrapper="span"
											show={{ touched: true, focus: false }}
											model="shop.state"
											messages={helper.validationMessages()}
										/>
									</Field>

									<Field model="shop.city" validators={{isRequired: helper.isRequired}}
										   className="mdl-cell mdl-cell--4-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input className="mdl-textfield__input dirty-input" type="text" id="city" />
										<label className="mdl-textfield__label" htmlFor="city">{T.translate("shop.form.labels.city")}</label>
										<Errors
											className="validation__error"
											wrapper="span"
											show={{ touched: true, focus: false }}
											model="shop.city"
											messages={helper.validationMessages()}
										/>
									</Field>
								</div>
							</div>

							<PhoneList phones={shop.phones} />

							<div className="form__action">
								<button type="submit" id="submit_button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect mdl-shadow--8dp">
									{T.translate("shop.form.buttons.save")}
								</button>
							</div>
						</Form>
					</div>
				</div>
			</main>
		)
	}
}

ShopFormComponent.propTypes = {
	dispatch: PropTypes.func.isRequired,
	shop: PropTypes.object.isRequired
}

const mapStateToProps = state => ({shop: state.shop})

export default connect(mapStateToProps)(ShopFormComponent)