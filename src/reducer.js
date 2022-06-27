
export const reducer = (state, action) => {
    if (action.type === 'CLOSE_MODAL') {
        return {
            ...state,
            isModalOpen: false
        }
    }

    if (action.type === "OPEN_MODAL") {
        return {
            ...state,
            isModalOpen: true
        }
    }
}