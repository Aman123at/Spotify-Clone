export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQCcpV-peKMN8wcXDymZyYJB3cTq5VMgwCoPJQG8ajyYdRD_OU3ieBlRvFKd30qFD85-7pDpvq1augDtjLKxKgtpvLsqaioCtYHSfyLqym6BNahqd_zp9ZIFceLmYJ3tnrJ5nzlTmu4Ou4UzR-2mf1pOVGxGyJbV3MU4YWraP_JJk8Xw'
};

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;
    }

}

export default reducer;