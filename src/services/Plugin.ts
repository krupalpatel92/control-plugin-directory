import { PluginsService, SuccessResponse, OpenAPI } from 'openapi/index';

export default class Plugin {
	public static getList = async (): Promise<SuccessResponse> => {
		await Plugin.createApi();
		return await PluginsService.pluginList('application/json');
	};

	private static readonly createApi = async (): Promise<any> => {
		// Set User Token in Header if needed
		OpenAPI.TOKEN = '';
	};
}
