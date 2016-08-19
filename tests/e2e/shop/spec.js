import PO from './po'

describe('Shop Test', () => {
	it('should create shop', () => {
		let nPO = new PO()

		nPO.save()
		browser.sleep(1000).then(function() {
			expect(nPO.snackBar().isPresent()).toBe(true, 'Snackbar is not present.')
			expect(nPO.snackBar().getText()).toEqual('Created', 'There is something wrong while creating shop.')
			expect(browser.getCurrentUrl()).toContain('/shop/edit/', 'After creation current url wasn\'t changed')
		})
	})

	it('should edit shop', () => {
		let nPO = new PO()

		nPO.save()

		nPO.changeNameField()
		nPO.form().submit()

		expect(nPO.snackBar().isPresent()).toBe(true, 'Snackbar is not present.')
		expect(nPO.snackBar().getText()).toEqual('OK', 'There is something wrong while updating shop.')
		expect(nPO.createdShop(nPO.newName).getText()).toEqual(nPO.newName, 'Shop wasn\'t updated.')
	})

	it('should delete shop', () => {
		let nPO = new PO()

		nPO.save()
		nPO.createdShop(nPO.name)

		nPO.deleteShopBtn().click()

		expect(nPO.deleteShopModal().isPresent()).toBe(true, 'Delete shop button is not working.')

		nPO.deleteShopBtnConfirm().click()

		expect(nPO.deleteShopModal().isPresent()).toBe(false, 'Delete shop confirm action is not working.')
	})
})