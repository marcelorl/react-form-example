import $ from 'jquery'
import validator from 'validator'

class Helper{

	static isDirty() {
		$('.dirty-input').parent().addClass('is-dirty')
	}

	static isEmail(val) {
		return validator.isEmail(val)
	}

	static isInt(val) {
		return validator.isInt(val.toString())
	}

	static isRequired(val) {
		return val && val.length > 0
	}

	static validationMessages() {
		return {
			isDate: 'Campo deve ser uma data',
			isEmail: 'Campo deve ser um e-mail',
			isInt: 'Campo deve ser um número',
			isRequired: 'Campo obrigatório'
		}
	}
}

export default Helper