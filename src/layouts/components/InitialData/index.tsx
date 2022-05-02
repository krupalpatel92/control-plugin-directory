import { useEffect } from 'react';
import useSWR from 'swr';
import slugify from 'slugify';
import Plugin from 'services/Plugin';
import { Plugins, SuccessResponse, Tab1 } from 'openapi/index';
import { useAppDispatch } from 'store/hooks';
import { setNavigationItems } from 'store/global';
import { setPluginTypes } from 'store/pluginTypes';
import { pluginTypeItems, pluginTypeData } from 'store/pluginTypes/types';

const fetcher = async (): Promise<SuccessResponse> => {
	return await Plugin.getList();
};
const InitialData: React.FC = () => {
	const dispatch = useAppDispatch();

	const {
		data: apiData,
		isValidating: apiCalling,
		error: apiError,
	} = useSWR({}, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	});

	const getTabData = (data: Tab1, plugins: Plugins): pluginTypeData => {
		const activePlg = data.active.map(p => {
			return {
				key: p,
				isActive: true,
				isDisabled: false,
				title: plugins[p].title,
				description: plugins[p].description,
			};
		});
		const inactivePlg = data.inactive.map(p => {
			return {
				key: p,
				isActive: false,
				isDisabled: false,
				title: plugins[p].title,
				description: plugins[p].description,
			};
		});
		const disabledPlg = data.disabled.map(p => {
			return {
				key: p,
				isActive: false,
				isDisabled: true,
				title: plugins[p].title,
				description: plugins[p].description,
			};
		});

		return {
			title: data.title,
			icon: data.icon,
			identifier: slugify(data.title, { lower: true }),
			items: [...activePlg, ...inactivePlg, ...disabledPlg],
		};
	};

	useEffect(() => {
		if (!apiData || apiCalling || apiError) return;

		let pluginTypeList: pluginTypeItems | undefined;

		const menu = apiData.data.tabs.map(tName => {
			const tabData = getTabData(apiData.data.tabdata[tName], apiData.data.plugins);
			pluginTypeList = { ...pluginTypeList, [tabData.identifier]: tabData };
			return {
				name: tabData.title,
				url: `/plugins/${tabData.identifier}`,
				iconName: tabData.icon,
			};
		});

		dispatch(setNavigationItems({ items: menu }));
		if (pluginTypeList) {
			dispatch(setPluginTypes({ items: pluginTypeList }));
		}
	}, [apiData]);

	return <></>;
};

export default InitialData;
