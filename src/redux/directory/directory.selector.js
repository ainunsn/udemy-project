import {createSelector} from 'reselect';

const selectDirectory = state => state.dir;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    dir => dir.sections
)
