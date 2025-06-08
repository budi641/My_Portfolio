// https://redux-toolkit.js.org/usage/usage-guide#simplifying-slices-with-createslice
import { createSlice } from "@reduxjs/toolkit";
import { projectsData } from "../config/projectData";

const initialState = {
  projects: projectsData,
  mainProjects: projectsData.filter(project => project.id === '1' || project.id === '2' || project.id === '3'), // Example: filter for main projects
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    // Removed setProjects and setMainProjects as data is now static
  },
});

export const selectProjects = (state) => state.projects.projects;
export const selectMainProjects = (state) => state.projects.mainProjects;
export const { } = projectsSlice.actions; // No actions to export if reducers are removed

export default projectsSlice.reducer;
