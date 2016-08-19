import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import service from './ShopService'
import $ from 'jquery'
import Utils from 'dataminr-react-components/dist/utils/Utils'
import Loader from 'react-loader'
import T from 'i18n-react'
import moment from 'moment'

class ShopListComponent extends React.Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			list: [],
			loaded: false
		}
	}

	componentDidMount() {
		let $table_target = $(ReactDOM.findDOMNode(this.refs["tbl-shops"]))

		service.list()
			.then(response => {
				this.setState({
					list: response.data,
					loaded: true
				})

				$table_target.DataTable({
					stateSave: true,
					bLengthChange: false,
					columns: [
						{className: 'dt-center'},
						{className: 'dt-center'},
						{className: 'dt-center'},
						{className: 'dt-center'},
						{className: 'dt-body-center', orderable: false}
					]
				})
			})
	}

	deleteShop(index) {
		Utils.confirmDialog('Desativar loja', 'Tem certeza que deseja excluir essa loja?',
		() => {
			service.delete(this.state.list[index].id)
				.then(response => {
					Utils.pageMessage(response.statusText, 'success')
					this.state.list.splice(index, 1)

					this.setState({list: this.state.list})
				})
		},
		() => {},
		{
			okIconClasses: null,
			cancelIconClasses: null
		})
	}

	render() {
		return (
			<main className="mdl-layout__content mdl-color--grey-100">
				<div className="mdl-card mdl-shadow--2dp employer-form">
					<div className="mdl-card__title">
						<h2>{T.translate("shop.list.labels.list_shops")}</h2>
						<Link className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect marginright" to="/shop/create">
							<i className="material-icons" role="presentation">add</i>
							{T.translate("shop.list.buttons.save_shop")}
						</Link>
					</div>
					<div className="mdl-card__supporting-text">
						<div className="mdl-grid">
							<div className="mdl-cell mdl-cell--12-col">
								<Loader loaded={this.state.loaded} />
								<table ref="tbl-shops" className="dataTable mdl-data-table dt-left" cellSpacing="0">
									<thead>
										<tr>
											<th className="dt-head-left">{T.translate("shop.list.labels.created_at")}</th>
											<th className="dt-head-left">{T.translate("shop.list.labels.name")}</th>
											<th>{T.translate("shop.list.labels.owner")}</th>
											<th>{T.translate("shop.list.labels.email")}</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										{this.state.list.map((shop, index) =>
											<tr key={index}>
												<td>{moment(shop.created_at).format('LLL')}</td>
												<td><Link to={`/shop/edit/${shop.id}`}>{shop.name}</Link></td>
												<td>{shop.owner_name}</td>
												<td>{shop.email}</td>
												<td>
													<div className="dt-btn-actions">
														<div onClick={this.deleteShop.bind(this, index)}>
															<i className="material-icons" role="presentation">delete forever</i>
														</div>
													</div>
												</td>
											</tr>
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</main>
		)
	}
}

export default ShopListComponent