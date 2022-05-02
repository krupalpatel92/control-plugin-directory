import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const global = (state: RootState) => state.global;

export const globalSelector = createSelector(global, state => state);
