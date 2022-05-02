import { useState, useEffect } from 'react';
import styles from './plugins.module.scss';
import { IPluginsProps } from './types';
import PageTitle from 'components/ui-kit/PageTitle';
import { useParams } from 'react-router-dom';
import PluginCard from 'components/functional/PluginCard';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { pluginTypes, setPluginTypes } from 'store/pluginTypes';
import { orderBy } from 'lodash';

const Plugins: React.FC = () => {
	const pageParam = useParams<IPluginsProps>();
	const pluginTypesStore = useAppSelector(pluginTypes);
	const dispatch = useAppDispatch();
	const pageTitle = pluginTypesStore.items?.[pageParam.type]?.title;
	const [pluginList, setPluginList] = useState(pluginTypesStore.items?.[pageParam.type]?.items);
	useEffect(() => setPluginList(pluginTypesStore.items?.[pageParam.type]?.items), [pageParam, pluginTypesStore]);

	const pluginStatusHandler = (pStatus, pKey) => {
		const updatedPlgStore = {
			...pluginTypesStore.items,
			[pageParam.type]: {
				...pluginTypesStore.items[pageParam.type],
				items: pluginTypesStore.items[pageParam.type].items.map(p => (p.key === pKey ? { ...p, isActive: pStatus } : p)),
			},
		};
		dispatch(setPluginTypes({ items: updatedPlgStore }));
	};
	return (
		<div className={styles.pluginPage}>
			<PageTitle name={`${pageTitle} Plugins`} />
			<div className={styles.gridContent}>
				{orderBy(pluginList, ['title'], ['asc'])?.map((d, i) => {
					return (
						<div key={i} className={styles.gridContent__item}>
							<PluginCard
								name={d.title}
								summary={d.description}
								isDisabled={d.isDisabled}
								isActive={d.isActive}
								onActiveInactive={s => pluginStatusHandler(s, d.key)}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Plugins;
