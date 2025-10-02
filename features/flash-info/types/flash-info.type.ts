export interface IFlash {
	id: string;
	title: string;
	body: string;
	created_at: string;
	updated_at: string;
	deleted_at: string | null;
	created_by: number;
	link:string;
}