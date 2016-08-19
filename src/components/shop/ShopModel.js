import moment from 'moment'

class ShopModel {

	static create() {
		return {
			name: '',
			owner_name: '',
			email: '',
			domain: '',
			birth_date: moment(),
			cnpj: '',
			zipcode: '',
			address: '',
			suberb: '',
			number: '',
			state: '',
			city: '',
			phones: [''],
			created_at: moment()
		}
	}
}

export default ShopModel