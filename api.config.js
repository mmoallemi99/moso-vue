// This is an example on how I'm using my `api.config.js`.

export const profileApi = {
    titles: process.env.titles,
    devicons: process.env.devicons,
    skills: process.env.skills,
    profiles: process.env.profiles,
    infolists: process.env.infolists,
    tools: process.env.tools
}

export const projectsApi = {
    projects: process.env.projects,
    smallprojects: process.env.smallprojects

}

export const resumeApi = {
    experiences: process.env.experiences,
    educations: process.env.educations
}
