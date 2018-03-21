export const CREATE_SCENE = 'CREATE_SCENE'

export const createScene = (name) => ({
    type: CREATE_SCENE,
    name
})

export const CREATE_PHOTO = 'CREATE_PHOTO'

export const createPhoto = (url, sceneId) => ({
    type: CREATE_PHOTO,
    url,
    sceneId
})

export const ADD_LOCATION = 'ADD_LOCATION'

export const addLocation = (location, sceneId) => ({
    type: ADD_LOCATION,
    sceneId,
    location
})