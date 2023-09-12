import { Auth } from '@shared';
import { atom, selector } from 'recoil';

export const AuthAtom = atom({
	key: 'auth',
	default: {
		isAuthenticated: true,
		user: { name: 'Juana Mendez', jobRole: 'Auxiliar de Recursos Humanos' }
	} as Auth
});

export const AuthSelector = selector<Auth>({
	key: 'AuthSelector',
	get: ({ get }): Auth => get(AuthAtom),
	set: ({ set }, auth) => set(AuthAtom, auth)
});
