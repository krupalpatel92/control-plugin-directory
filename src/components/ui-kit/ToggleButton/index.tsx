import { useState } from 'react';
import styles from './ToggleButton.module.scss';
import { IToggleButtonProps } from './types';

const ToggleButton: React.FC<IToggleButtonProps> = props => (
	<div className={styles.toggleCover}>
		<div className={styles.btn}>
			<input type='checkbox' className={styles.btn__checkbox} checked={props.isActive} onChange={() => props.onToggle()} />
			<div className={styles.btn__knobs}></div>
			<div className={styles.btn__layer}></div>
		</div>
	</div>
);

export default ToggleButton;
