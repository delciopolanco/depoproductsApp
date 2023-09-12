import numeral from 'numeral';
import { CURRENCY_SYMBOLS, DATE_FORMATS, TIME_FORMATS } from '@shared';
import format from 'date-fns/format';
import { formatInTimeZone } from 'date-fns-tz';
import { endOfDay } from 'date-fns';

export const formatToPrice = (price: number): string => {
	return price
		? numeral(price).format(`${CURRENCY_SYMBOLS.pesos}0,0.00`)
		: `${CURRENCY_SYMBOLS.pesos}0.00`;
};

export const formatToNumber = (valueToFormat: number = 0, includeDecimals?: boolean): string => {
	return valueToFormat
		? numeral(valueToFormat).format(`0,0${includeDecimals ? '.00' : ''}`)
		: `0.00`;
};

export const formatToLocalTime = (stringDate: string) =>
	format(new Date(stringDate), `${TIME_FORMATS.time12}`);

export const formatUTCToLocalDateTime = (stringDate: string) =>
	format(new Date(stringDate), `${DATE_FORMATS.default} ${TIME_FORMATS.time12}`);

export const formatUTCToLocalDateTimeLower = (stringDate: string) =>
	format(new Date(stringDate), `${DATE_FORMATS.default} ${TIME_FORMATS.time12}`)
		.replace('AM', 'am')
		.replace('PM', 'pm');

export const formatUTCToLocalDate = (stringDate: string) =>
	format(new Date(stringDate), `${DATE_FORMATS.default}`);

export const formatUTC = (date) =>
	formatInTimeZone(new Date(date), 'UTC', "yyyy-MM-dd'T'HH:mm:ss.SSSXXX");

export const formatUTCEndDate = (date) =>
	formatInTimeZone(endOfDay(new Date(date)), 'UTC', "yyyy-MM-dd'T'HH:mm:ss.SSSXXX");

export const formatVerbalLocalDateTime = (date) => {
	return new Date(date).toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
};
