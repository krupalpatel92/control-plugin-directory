export interface IPluginCardProps {
	name: string;
	summary: string;
	isDisabled: boolean;
	isActive: boolean;
	onActiveInactive?(status: boolean): void;
}
