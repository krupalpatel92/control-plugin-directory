/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Plugins } from './Plugins';
import type { Tabdata } from './Tabdata';

export type Data = {
    tabs: Array<string>;
    tabdata: Tabdata;
    plugins: Plugins;
};
