export interface User {
	id?: string;
	username?: string;
	name?: string;
	avatar?: string;
	role?: string;
	jobRole?: string;
}

export interface Auth {
	user: User | null;
	isAuthenticated: boolean;
}
