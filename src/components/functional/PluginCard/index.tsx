import { IPluginCardProps } from './types';
import styles from './PluginCard.module.scss';
import classNames from 'classnames';
import ToggleButton from 'components/ui-kit/ToggleButton';

const PluginCard: React.FC<IPluginCardProps> = props => {
	const { name, summary, isDisabled, isActive, onActiveInactive } = props;
	return (
		<div
			className={classNames({
				[`${styles.cardWrp}`]: true,
				[`${styles['cardWrp--disabled']}`]: isDisabled,
			})}
		>
			<div className={styles.head}>
				<div className={styles.head__title}>{name}</div>
				<div
					className={classNames({
						[`${styles.head__toggleStatus}`]: true,
						[`${styles['head__toggleStatus--inactive']}`]: !isActive,
					})}
				>
					<ToggleButton isActive={isActive} onToggle={() => onActiveInactive?.(!isActive)} />
					{isActive ? 'Active' : 'Inactive'}
				</div>
			</div>
			<div className={styles.summary}>
				<p>{summary}</p>
			</div>
			{isDisabled && <div className={styles.cardWrp__disabledLayer} />}
		</div>
	);
};
export default PluginCard;
