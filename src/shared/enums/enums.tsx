import { Corotos } from '@icons/corotos';
import { Emarket } from '@icons/emarket';
import { LaPulga } from '@icons/laPulga';
import { MercadoLibre } from '@icons/mercadoLibre';
import { Facebook } from '@mui/icons-material';

export enum Status {
	WARNING = 'warning',
	ERROR = 'error',
	INFO = 'info',
	SUCESS = 'sucess'
}

export enum WebTypes {
	ALL = 'All',
	COROTOS = 'Corotos',
	EMARKET = 'Emarket',
	LAPULGA = 'LaPulga',
	MARKETPLACE = 'MarketPlace',
	MERCADOLIBRE = 'MercadoLibre'
}

export const iconByWeb = {
	[WebTypes.COROTOS]: <Corotos fontSize={'small'} />,
	[WebTypes.EMARKET]: <Emarket fontSize={'small'} />,
	[WebTypes.LAPULGA]: <LaPulga fontSize={'small'} />,
	[WebTypes.MARKETPLACE]: <Facebook fontSize={'small'} />,
	[WebTypes.MERCADOLIBRE]: <MercadoLibre fontSize={'small'} />
};
