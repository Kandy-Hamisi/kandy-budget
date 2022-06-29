
export const reducer = (state, action) => {
    if (action.type === 'CLOSE_MODAL') {
        return {
            ...state,
            isModalOpen: false,
            isRecordModalOpen: false,
        }
    }

    if (action.type === "OPEN_MODAL") {
        return {
            ...state,
            isModalOpen: true,
            isRecordModalOpen: true,
        }
    }
}

export const recordReducer = (state, action) => {
    if (action.type === 'CLOSE_MODAL') {
        return {
            ...state,
            isRecordModalOpen: false,
        }
    }

    if (action.type === 'OPEN_MODAL') {
        return {
            ...state,
            isRecordModalOpen: true,
        }
    }
}