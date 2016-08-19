import faker from 'faker'
faker.locale = "pt_BR"

class PO {
	constructor() {
		this.name = faker.internet.domainName()
		this.newName = faker.internet.domainName()

		browser.driver.get(`http://localhost:1337/shop/create`)
	}

	changeNameField() {
		element(by.id('name')).click().clear()
		element(by.id('name')).sendKeys(this.newName)
	}

	createdShop (search) {
		browser.driver.get(`http://localhost:1337/shop`)
		element(by.css('.dataTables_filter input')).click().clear()
		element(by.css('.dataTables_filter input')).sendKeys(search)

		browser.sleep(1000)
		return element(by.css('.dataTable tbody tr:first-child td:nth-child(2) a'))
	}

	deleteShopBtn() {
		return element(by.css('.dataTable tbody tr:first-child td:last-child i'))
	}

	deleteShopModal() {
		return element(by.id('modal-container'))
	}

	deleteShopBtnConfirm() {
		return element(by.css('#modal-container .confirm-buttons button:first-child'))
	}

	form() {
		return element(by.css('.form'))
	}

	save() {
		element(by.id('name')).sendKeys(this.name)
		element(by.id('owner_name')).sendKeys(faker.name.findName())
		element(by.id('email')).sendKeys(faker.internet.email())
		element(by.id('domain')).sendKeys(faker.internet.url())
		element(by.id('cnpj')).sendKeys(11111111111111)
		element(by.id('zipcode')).sendKeys('69915512')
		element(by.id('btn-search-zipcode')).click()
		element(by.id('number')).sendKeys(123)
		element(by.id('phone-0')).sendKeys(faker.phone.phoneNumber())
		this.form().submit()
	}

	snackBar() {
		return element(by.css('.page-message .message.success'))
	}
}

export default PO