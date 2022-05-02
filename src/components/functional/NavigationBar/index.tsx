import { NavLink } from 'react-router-dom';
import { INavigationBar } from './types';
import styles from './NavigationBar.module.scss';
import Icons from 'components/ui-kit/Icons';
const Navigation: React.FC<INavigationBar> = props => (
	<nav className={styles.navigationBar}>
		{props.items.map((d, index) => (
			<NavLink
				key={`item-${index}`}
				exact
				activeClassName={styles['navigationBar__item--active']}
				className={styles.navigationBar__item}
				to={d.url}
			>
				<span className={styles.navigationBar__item__icon}>
					<Icons name={d?.iconName} />
				</span>
				{d.name}
			</NavLink>
		))}
	</nav>
);

export default Navigation;
