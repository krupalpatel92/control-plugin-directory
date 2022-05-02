import { useEffect } from 'react';

const changeDocumentTitle = (defaultTitle: string, newTitle: string, retainOnUnmount = false) => {
	document.title = newTitle;

	return () => {
		if (!retainOnUnmount) {
			document.title = defaultTitle;
		}
	};
};

const useDocumentTitle = (title: string, retainOnUnmount = false, shouldUseEffect = true) => {
	const defaultTitle = document.title;

	if (shouldUseEffect) {
		useEffect(() => {
			changeDocumentTitle(defaultTitle, title, retainOnUnmount);
		}, [title]);
	} else {
		changeDocumentTitle(defaultTitle, title, retainOnUnmount);
	}
};

export default useDocumentTitle;
