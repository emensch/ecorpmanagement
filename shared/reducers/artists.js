const initialState = {};

export default function artists(state = initialState, action) {
    switch(action.type) {
        case 'REQUEST_ARTIST_NAMES_SUCCESS':
            let artists = {};
            action.res.data.forEach(item => {
                artists[item.slug] = {name: item.name}
            });
            return { ...state, ...artists };
        default:
            return state;
    }
}