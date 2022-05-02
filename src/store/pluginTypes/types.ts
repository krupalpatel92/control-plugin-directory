export type pluginTypeData = {
	title: string;
	identifier: string;
	icon: string;
	items: {
		key: string;
		title: string;
		description: string;
		isDisabled: boolean;
		isActive: boolean;
	}[];
};
export type pluginTypeItems = {
	[key: string]: pluginTypeData;
};
