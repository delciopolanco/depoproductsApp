export const getInitials = (name: string | undefined): string =>
	name
		? name
				.replace(/\s+/, '')
				.split(' ')
				.splice(0, 2)
				.map((v) => v && v[0].toUpperCase())
				.join('')
		: '';
