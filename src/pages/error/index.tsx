import useDocumentTitle from 'utils/hooks/useDocumentTitle';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
	useDocumentTitle('Oops! Something went wrong');

	return (
		<div className='error'>
			<div className={'error__hero'}>
				<h1>Oops! Something Went Wrong</h1>
				<h2>
					Please reload the page or go to{' '}
					<u>
						<b>
							<Link to={'/'}>Home Page</Link>
						</b>
					</u>
				</h2>
			</div>
		</div>
	);
};

export default ErrorPage;
