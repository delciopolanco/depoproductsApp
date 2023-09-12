import { atomFamily, selectorFamily } from 'recoil';
import { Product } from '@shared';

export const ExecutionDetailAtom = atomFamily<Product[], string>({
	key: 'ExecutionDetailAtom',
	default: []
});

export const ExecutionDetailSelector = selectorFamily({
	key: 'ExecutionDetailSelector',
	get:
		(id: string) =>
		({ get }): Product[] =>
			get(ExecutionDetailAtom(id)),
	set:
		(id: string) =>
		({ set }, execute) =>
			set(ExecutionDetailAtom(id), execute)
});
