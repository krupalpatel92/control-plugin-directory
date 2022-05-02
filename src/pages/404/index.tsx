import PageTitle from 'components/ui-kit/PageTitle';
import { Link } from 'react-router-dom';

const E404: React.FC = () => (
	<div>
		<PageTitle name='404' />
		<div>
			Page not found. Go to{' '}
			<Link to='/'>
				<u>Home Page</u>
			</Link>
		</div>
	</div>
);

export default E404;
