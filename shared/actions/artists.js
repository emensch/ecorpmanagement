import axios from 'axios';

export function loadArtistNames() {
    return (dispatch, getState) => {
        const artists = Object.keys(getState().artists);
        if (artists.length > 0) {
            return null
        }

        return dispatch(fetchArtistNames())
    }
}

export function fetchArtistNames() {
    return dispatch => {
        dispatch(requestArtistNames());
        return axios.get('/api/artists')
            .then(res => {
                dispatch(requestArtistNamesSuccess(res))
            })
            .catch(err => {
                dispatch(requestArtistNamesFailure(err))
            })
    }
}

export function requestArtistNames() {
    return {
        type: 'REQUEST_ARTIST_NAMES'
    }
}

export function requestArtistNamesSuccess(res) {
    return {
        type: 'REQUEST_ARTIST_NAMES_SUCCESS',
        res
    }
}

export function requestArtistNamesFailure(error) {
    return {
        type: 'REQUEST_ARTIST_NAMES_FAILURE',
        error
    }
}