import { createAction } from '@reduxjs/toolkit';
import { INavigationBarItem } from 'components/functional/NavigationBar/types';

export const setNavigationItems = createAction<{ items: INavigationBarItem[] }>('global/navigationItems');
export const setDisableAllPlugin = createAction<boolean>('global/allPluginsStatus');
