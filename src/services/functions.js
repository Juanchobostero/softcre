import projects from "../services/data"

export const getProjects = async () => {
    const projects = projects.map(project => project)
    return projects
}

export const getProjectById = (id) => {
    const project = projects.find(project => project.id === id)
    return project
}