import getApiClient from '../utils/getApiClient';
const api = getApiClient();

export function loadArtistNames() {
    return (dispatch, getState) => {
        const artists = Object.keys(getState().artists);
        if (artists.gotAllNames) {
            return null
        }

        return dispatch(fetchArtistNames())
    }
}

export function fetchArtistNames() {
    return dispatch => {
        dispatch(requestArtistNames());
        return api.get('/artists')
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

export function loadArtist(params) {
    console.log('params', params);
    const { slug } = params;
    return (dispatch, getState) => {

        return dispatch(fetchArtist(slug))
    }
}

export function fetchArtist(slug) {
    return dispatch => {
        dispatch(requestArtist(slug));
        return api.get('/artists/' + slug)
            .then(res => {
                dispatch(requestArtistSuccess(res))
            })
            .catch(err => {
                dispatch(requestArtistFailure(err))
            })
    }
}

export function requestArtist(slug) {
    return {
        type: 'REQUEST_ARTIST',
        slug
    }
}

export function requestArtistSuccess(res) {
    return {
        type: 'REQUEST_ARTIST_SUCCESS',
        res
    }
}

export function requestArtistFailure(error) {
    return {
        type: 'REQUEST_ARTIST_FAILURE',
        error
    }
}