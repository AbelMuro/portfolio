import { createAction, createReducer } from '@reduxjs/toolkit'

const displayAllProjects = createAction('DISPLAY_ALL_PROJECTS');
const hideAllProjects = createAction('HIDE_ALL_PROJECTS');
const initialState = {
    display: false,
}

const projectsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(displayAllProjects,  (state) => {
            state.display = true;
        })
        .addCase(hideAllProjects, (state) => {
            state.display = false;
        })

});

export default projectsReducer