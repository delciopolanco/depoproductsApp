import { atom, selector } from 'recoil';
import { Execution } from '@shared';

export const ExecutionAtom = atom({
	key: 'ExecutionAtom',
	default: [] as Execution[]
});

export const ExecutionSelector = selector({
	key: 'ExecutionSelector',
	get: ({ get }): Execution[] => get(ExecutionAtom),
	set: ({ set }, execute) => set(ExecutionAtom, execute)
});
