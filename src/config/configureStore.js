import {createStore, combineReducers, applyMiddleware} from 'redux'
import {modelReducer, formReducer} from 'react-redux-form'
import thunk from 'redux-thunk'
import ShopModel from '../components/shop/ShopModel'

const store = applyMiddleware(thunk)(createStore)(combineReducers({
	shop: modelReducer('shop', ShopModel.create()),
	shopForm: formReducer('shop', ShopModel.create())
}))

export default store