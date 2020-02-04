import { ADD_AD, UPDATE_AD, REMOVE_AD } from './actionTypes';

const addAd = (newAd) => (dispatch, getState) => {
    const ads = getState().ads;
    const newAds = [
        newAd,
        ...ads
    ];

    dispatch({
        type: ADD_AD,
        payload: newAds,
    });
};

const updateAd = (updatedAd) => (dispatch, getState) => {
    const ads = getState().ads;
    const newAds = ads.map(ad => {
        return ad.id === updatedAd.id ?
            updatedAd :
            ad;
    });

    dispatch({
        type: UPDATE_AD,
        payload: newAds,
    });
};

const removeAd = (adId) => (dispatch, getState) => {
    const ads = getState().ads;
    const newAds = ads.filter(ad => (ad.id !== adId));
    
    dispatch({
        type: REMOVE_AD,
        payload: newAds,
    });
};

export {
    addAd,
    updateAd,
    removeAd
};