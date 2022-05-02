import { IContent } from './types';
import styles from './Content.module.scss';

const Content: React.FC<IContent> = props => {
	const { children } = props;
	return <div className={styles.contentWrp}>{children}</div>;
};

export default Content;
