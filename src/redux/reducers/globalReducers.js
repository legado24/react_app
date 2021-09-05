import { PURGE } from "redux-persist/es/constants"

 

const tintColor = '#e80042'
// const second = '#E20229'
const second = '#E1062B'
const tercero = '#D21C1C'
const cuarto = '#ed4a66'
const black = '#000000'
const container = '#F6F6F6' //'#f5f5f5'
const success = '#4BB543'
const danger = '#e53935'
// const quinto = '#022335'
const quinto = '#022335' //'#DE1D1D' //'#D21C1C'
const blue = '#D21C1C' //'#C41A1A' //'#9E1515' //'#022335'
const greenMD = '#70B865'
const yellowMD = '#FFCB00'
const blueMD = '#35399D'
const redMD = '#e80042'
const initState = {
	logueado: false,
	user: null,
	password: '',
	tipoRegistro: 'E',
	genero: null,
	photo: null,
	count: 0, // TODO: LUEGO PASAR ESTO AL REDUCER DE CART
	client: null,
	direcciones: null,
	direccionesFactura: null,
	addressSelected: null, //TODO: null
	encuestas: null,
	white: true,
	muted: false,
	windowsSize: 'xxl',
	sedeSelected: null,
	idSedeSelected: null,
	sedes: null,
	sedesLoading: false,
	redirectURL: null,
	goRedirectURL: false,
	colors: {
		primary: tintColor,
		secondary: second,
		tercero,
		tintColor,
		container,
		success,
		danger,
		cuarto,
		tabs: tercero,
		tabIconDefault: '#b0b0b0',
		tabIconSelected: second,
		tabBar: '#fefefe',
		errorBackground: 'red',
		errorText: '#ffffff',
		warningBackground: '#EAEB5E',
		warningText: '#666804',
		noticeBackground: second, //antes era tintColor
		noticeText: '#ffffff',
		darkTransparent: 'rgba(0, 0, 0, .4)',
		textGrey: '#555555',
		textShadow: '#555555',
		textDark: black,
		textWhite: '#ffffff',
		// textGray: '#e3e3e3',
		textGray: '#ebebeb',
		textGray2: '#c4c4c4',
		buttonBackground: second, //antes era tintColor
		backgroundLight: '#ffffff',
		backgroundFacebook: '#3b5998',
		backgroundGmail: '#D44638',
		acento: '#ffffff',
		quinto,
		blue,
		greenMD,
		yellowMD,
		blueMD,
		redMD
	},
	breadcrumbNameMap: {
		'/promos': 'Promociones',
		'/loNuevo': 'Lo nuevo',
		'/paraTi': 'Para ti',
		'/carrito': 'Carrito',
		'/carrito/checkout': 'Pagar',
		'/masVendidos': 'Más vendidos',
		'/catalogo': 'Catálogo',
		'/catalogo/p': 'Producto',
		'/cuenta': 'Mi cuenta',
		'/buscar': 'Buscar',
		'/cuenta/favoritos': 'Favoritos',
		'/cuenta/perfil': 'Perfil',
		'/cuenta/direcciones': 'Direcciones de Entrega',
		'/cuenta/direcciones/agregar': 'Nueva dirección',
		'/cuenta/facturas': 'Direcciones de Facturación',
		'/cuenta/legales': 'Términos y Condiciones',
		'/cuenta/reclamos': 'Libro de Reclamaciones',
		'/cuenta/aboutUs': 'Acerca De',
		'/cuenta/pedidos': 'Mis pedidos',
		'/cuenta/login': 'Iniciar sesión',
		'/cuenta/registrar': 'Regístrate'
	}
}

const globalReducer = (state = initState, action) => {
	switch (action.type) {
		case 'GLOBAL_SUCCESS':
			return {
				...state,
				logueado: true,
				user: action.payload,
				password: action.password,
				tipoRegistro: action.tipoRegistro,
				// sedeSelected: null,
				idSedeSelected: null
			}
		case 'GLOBAL_UPDATE_PASSWORD':
			return {
				...state,
				password: action.payload
			}
		case 'GLOBAL_UPDATE_USER':
			return {
				...state,
				user: action.payload
			}

		case 'GLOBAL_ENCUESTAS':
			return {
				...state,
				encuestas: action.payload
			}

		case 'GLOBAL_DATA_USER':
			return {
				...state,
				client: action.payload,
				direcciones: action.direcciones,
				encuestas: action.encuestas
			}

		case 'GLOBAL_DIRECCIONES_FACTURA':
			return {
				...state,
				direccionesFactura: action.payload
			}
		case 'GLOBAL_ADDRESS_SELECTED':
			return {
				...state,
				addressSelected: action.payload
			}
		case 'GLOBAL_WHITE':
			return {
				...state,
				white: true,
				colors: {
					primary: tintColor,
					secondary: second,
					tercero,
					tintColor,
					container,
					success,
					danger,
					cuarto,
					tabs: tercero,
					tabIconDefault: '#b0b0b0',
					tabIconSelected: second,
					tabBar: '#fefefe',
					errorBackground: 'red',
					errorText: '#fff',
					warningBackground: '#EAEB5E',
					warningText: '#666804',
					noticeBackground: second, //antes era tintColor
					noticeText: '#fff',
					darkTransparent: 'rgba(0, 0, 0, .4)',
					textGrey: '#555',
					textShadow: '#555',
					textDark: black,
					textWhite: '#fff',
					textGray: '#e3e3e3',
					textGray2: '#c4c4c4',
					buttonBackground: second, //antes era tintColor
					backgroundLight: '#fff',
					backgroundFacebook: '#3b5998',
					backgroundGmail: '#D44638',
					acento: '#fff'
				}
			}
		case 'GLOBAL_DARK':
			return {
				...state,
				white: false,
				colors: {
					primary: tintColor,
					secondary: second,
					tercero,
					tintColor,
					container: '#2b2b2b',
					success,
					danger,
					cuarto,
					tabs: tercero,
					tabIconDefault: '#424242',
					tabIconSelected: second,
					tabBar: '#fefefe',
					errorBackground: 'red',
					errorText: '#fff',
					warningBackground: '#EAEB5E',
					warningText: '#666804',
					noticeBackground: second, //antes era tintColor
					noticeText: '#fff',
					darkTransparent: 'rgba(201, 201, 201, .5)',
					textGrey: '#787878',
					textShadow: '#787878',
					textDark: '#fff',
					textWhite: black,
					textGray: '#e3e3e3',
					textGray2: '#c4c4c4',
					buttonBackground: second, //antes era tintColor
					backgroundLight: '#1c1c1c',
					backgroundFacebook: '#3b5998',
					backgroundGmail: '#D44638',
					acento: '#1c1c1c'
				}
			}

		case 'GLOBAL_MUTED':
			return {
				...state,
				muted: action.payload
			}

		case 'GLOBAL_CHANGE_WINDOWS_SIZE':
			return {
				...state,
				windowsSize: action.payload
			}

		case 'GLOBAL_SEDES_LOADING':
			return {
				...state,
				sedesLoading: action.payload
			}

		case 'GLOBAL_SEDES':
			return {
				...state,
				sedes: action.payload,
				sedesLoading: false
			}
		case 'GLOBAL_SEDE_SELECTED':
			return {
				...state,
				idSedeSelected: action.id,
				sedeSelected: action.payload
			}
		case 'GLOBAL_REDIRECT':
			return {
				...state,
				redirectURL: action.payload
			}
		case 'GLOBAL_GO_REDIRECT':
			return {
				...state,
				goRedirectURL: action.payload
			}

		case 'GLOBAL_BREADCRUMB_RESET':
			return {
				...state,
				breadcrumbNameMap: {
					'/promos': 'Promociones',
					'/loNuevo': 'Lo nuevo',
					'/paraTi': 'Para ti',
					'/carrito': 'Carrito',
					'/carrito/checkout': 'Pagar',
					'/masVendidos': 'Más vendidos',
					'/catalogo': 'Catálogo',
					'/catalogo/p': 'Producto',
					'/cuenta': 'Mi cuenta',
					'/buscar': 'Buscar',
					'/cuenta/favoritos': 'Favoritos',
					'/cuenta/perfil': 'Perfil',
					'/cuenta/direcciones': 'Direcciones de Entrega',
					'/cuenta/direcciones/agregar': 'Nueva dirección',
					'/cuenta/facturas': 'Direcciones de Facturación',
					'/cuenta/legales': 'Términos y Condiciones',
					'/cuenta/reclamos': 'Libro de Reclamaciones',
					'/cuenta/aboutUs': 'Acerca De',
					'/cuenta/pedidos': 'Mis pedidos',
					'/cuenta/login': 'Iniciar sesión',
					'/cuenta/registrar': 'Regístrate'
				}
			}

		case 'GLOBAL_BREADCRUMB_MAP':
			return {
				...state,
				breadcrumbNameMap: action.payload
			}

		case 'GLOBAL_RESET':
			return initState

		case PURGE:
			return initState

		default:
			return state
	}
}

export default globalReducer