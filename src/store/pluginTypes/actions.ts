import { createAction } from '@reduxjs/toolkit';
import { pluginTypeItems } from './types';

export const setPluginTypes = createAction<{ items: pluginTypeItems }>('pluginTypes/items');
