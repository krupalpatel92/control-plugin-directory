import styles from './PageTitle.module.scss';
import useDocumentTitle from 'utils/hooks/useDocumentTitle';

const PageTitle: React.FC<{ name: string }> = props => {
	useDocumentTitle(`DataGuard | ${props.name}`);
	return <h1 className={styles.title}>{props.name}</h1>;
};
export default PageTitle;
