import ToggleBtn from 'components/ui-kit/ToggleButton';
import styles from './DisableAllPlugins.module.scss';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { global, setDisableAllPlugin } from 'store/global';
import { pluginTypes, setPluginTypes } from 'store/pluginTypes';
import classNames from 'classnames';

const DisableAllPlugins: React.FC = () => {
	const globalStore = useAppSelector(global);
	const pluginTypesStore = useAppSelector(pluginTypes);
	const dispatch = useAppDispatch();

	const onToggleAll = () => {
		const allPlgStatus = !globalStore.isAllPluginEnabled;
		let allPlgTypes = pluginTypesStore.items;

		Object.keys(pluginTypesStore.items).map(plgType => {
			const allPlg = allPlgTypes[plgType].items.map(plg => ({ ...plg, isDisabled: !allPlgStatus }));
			allPlgTypes = { ...allPlgTypes, [plgType]: { ...allPlgTypes[plgType], items: allPlg } };
		});

		dispatch(setPluginTypes({ items: allPlgTypes }));
		dispatch(setDisableAllPlugin(allPlgStatus));
	};

	return (
		<div className={styles.allPlg}>
			<div className={styles.allPlg__content}>
				<span>All Plugins {globalStore.isAllPluginEnabled ? 'Enabled' : 'Disabled'}</span>
				<ToggleBtn isActive={globalStore.isAllPluginEnabled} onToggle={onToggleAll} />
			</div>
			<div
				className={classNames({
					[`${styles.bgLayer}`]: true,
					[`${styles['bgLayer--enabled']}`]: globalStore.isAllPluginEnabled,
					[`${styles['bgLayer--disabled']}`]: !globalStore.isAllPluginEnabled,
				})}
			/>
		</div>
	);
};

export default DisableAllPlugins;
