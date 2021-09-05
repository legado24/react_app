import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import storage from 'redux-persist/lib/storage'
import reducers from '../reducers/reducers'

import persistStore from 'redux-persist/es/persistStore'
import persistReducer from 'redux-persist/es/persistReducer'

const initialState = {}
const middlewares = [ promise, thunk ]
const persistConfig = {
	key: 'root',
	storage,
	blacklist: [
		'signUp',
		'ubigeo',
		'catalogo',
		'favoritos',
		'profile',
		// 'carrito',
		'pedidos',
		'signIn',
		'home',
		'notification'
		// 'global'
	]
}

const persReducer=persistReducer(persistConfig,reducers)
 

  const  store = createStore(persReducer, initialState, compose(applyMiddleware(...middlewares)))

 export default store
 
export const persistor = persistStore(store)