const initialState = {
    gotAllNames: false,
    items: {}
};

export default function artists(state = initialState, action) {
    switch(action.type) {
        case 'REQUEST_ARTIST_NAMES_SUCCESS':
            let artists = {};
            action.res.data.forEach(item => {
                artists[item.slug] = {name: item.name, loaded: false}
            });
            return {
                ...state,
                gotAllNames: true,
                items: { ...artists, ...state.items} // Order is important, consider alternatives
            };
        case 'REQUEST_ARTIST_SUCCESS':
            let _artists = {};
            _artists[action.res.data.slug] = action.res.data;
            _artists[action.res.data.slug].loaded = true;
            return {
                ...state,
                items: { ...state.items, ..._artists }
            };
        default:
            return state;
    }
}