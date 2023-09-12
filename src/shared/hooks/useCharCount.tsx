export const charCounts = {
	identification: 10,
	fullName: 50,
	phone: 10
} as never;

export const useCharCount = (field: string): number | null => {
	return charCounts[field] || null;
};
