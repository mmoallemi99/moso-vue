export const state = () => ({
    pageTitle: 'Default Title'
})

export const mutations = {
    SET_PAGE_TITLE (state, title) {
        state.pageTitle = title
    }
}
