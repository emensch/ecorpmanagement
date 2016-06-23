const initialState = {
    gotAllNames: false,
    items: {}
};

export default function artists(state = initialState, action) {
    switch(action.type) {
        case 'REQUEST_ARTIST_NAMES_SUCCESS':
            let artists = {};
            action.res.data.forEach(item => {
                artists[item.slug] = {name: item.name}
            });
            return {
                ...state,
                gotAllNames: true,
                items: { ...artists }
            };
        case 'REQUEST_ARTIST_SUCCESS':
            console.log('action', action);
            let _artists = {};
            _artists[action.res.data.slug] = action.res.data;
            return {
                ...state,
                items: { ..._artists }
            };
        default:
            return state;
    }
}