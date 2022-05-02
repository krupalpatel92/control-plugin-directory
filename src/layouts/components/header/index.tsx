import styles from './Header.module.scss';
import Logo from 'logo.svg';
import NavigationBar from 'components/functional/NavigationBar';
import DisableAllPlugins from 'components/functional/DisableAllPlugins';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import { global } from 'store/global';
import { INavigationBarItem } from 'components/functional/NavigationBar/types';

const Header: React.FC = () => {
	const globalStore = useAppSelector(global);

	const defaultMenu: INavigationBarItem[] = [
		{
			name: 'dashboard',
			url: '/',
			iconName: 'icon-dashboard',
		},
	];

	const menuItem = [...defaultMenu, ...(globalStore.navigationItems ?? [])];

	return (
		<div className={styles.headerWrp}>
			<div className={styles.logo}>
				<Link to='/'>
					<img src={Logo} alt='DataGuard' />
				</Link>
			</div>
			<div className={styles.menuWrp}>
				<NavigationBar items={menuItem} />
			</div>
			<DisableAllPlugins />
		</div>
	);
};

export default Header;
