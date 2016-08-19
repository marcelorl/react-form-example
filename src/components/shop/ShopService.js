import React from 'react'
import store from '../../config/configureStore'
import axios from 'axios'
import {actions} from 'react-redux-form'
import Utils from 'dataminr-react-components/dist/utils/Utils'
import {browserHistory} from 'react-router'
import moment from 'moment'

class ShopService {
	constructor() {
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
	}

	delete(id) {
		return axios.delete(`${process.env.API_URL}shops/${id}`)
	}

	find(id) {
		if(_.isUndefined(id)) {
			store.dispatch(actions.reset('shop'))
			return false
		}

		axios.get(`${process.env.API_URL}shops/${id}`)
			.then(response => {
				response.data.birth_date = moment(response.data.birth_date)
				store.dispatch(actions.change('shop', response.data))
			})
			.catch(() => {
				store.dispatch(actions.reset('shop'))
			})
	}

	list() {
		return axios.get(`${process.env.API_URL}shops`)
	}

	save() {
		let {shop} = store.getState()

		if(!shop.id) {
			axios.post(`${process.env.API_URL}shops`, shop)
				.then(response => {
					store.dispatch(actions.change('shop.id', response.data.id))

					browserHistory.push(`/shop/edit/${response.data.id}`)
					Utils.pageMessage(response.statusText, 'success')
				})
		} else {
			axios.put(`${process.env.API_URL}shops/${shop.id}`, shop)
				.then(response => {
					Utils.pageMessage(response.statusText, 'success')
				})
		}

	}

	searchZipCode(zipcode) {
		return axios.get(`https://api.postmon.com.br/v1/cep/${zipcode}`)
	}
}

export default new ShopService