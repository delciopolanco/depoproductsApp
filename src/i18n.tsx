import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
	en: {
		translation: {
			DepoTienda: 'Depo Tienda',
			searchList: 'Lista de productos',
			theSearch: 'Busqueda',
			closeSession: 'Cerrar sessión',
			addSearchCriterias: 'Agregar criterios de búsqueda',
			webToSearch: 'Sitios web a buscar',
			productDescription: 'Descripción del producto',
			search: 'Buscar',
			includeAll: 'Incluir todas',
			corotos: 'Corotos',
			emarket: 'Emarket',
			laPulga: 'La Pulga',
			mercadoLibre: 'Mercado Libre',
			marketPlace: 'Facebook Market Place',
			coincidences: 'coincidencias',
			coincidence: 'coincidencia',
			youDontHaveAnySearchYet: 'Aún no tienes busquedas registradas',
			registerYourFirstSearch: 'Registra tu primera busqueda',
			web: 'Web',
			description: 'Descripción del producto',
			price: 'Precio',
			store: 'Tienda'
		}
	},
	es: {
		translation: {}
	},
	fr: {
		translation: {
			Welcome: 'Bienvenue à React et react-i18next'
		}
	}
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'en',
	interpolation: {
		escapeValue: false
	}
});

export default i18n;
