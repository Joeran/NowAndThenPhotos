export const CREATE_SCENE = 'CREATE_SCENE'

export const createScene = (name, date) => ({
    type: CREATE_SCENE,
    name,
    date
})

export const DELETE_SCENE = 'DELETE_SCENE'

export const deleteScene = (sceneId) => ({
    type: DELETE_SCENE,
    sceneId
})

export const CHANGE_NAME = 'CHANGE_NAME'

export const changeName = (sceneId, name) => ({
    type: CHANGE_NAME,
    sceneId,
    name
})

export const CREATE_PHOTO = 'CREATE_PHOTO'

export const createPhoto = (url, sceneId) => ({
    type: CREATE_PHOTO,
    url,
    sceneId
})

export const DELETE_PHOTO = 'DELETE_PHOTO'

export const deletePhoto = (photoId, sceneId) => ({
    type: DELETE_PHOTO,
    photoId,
    sceneId
})

export const ADD_LOCATION = 'ADD_LOCATION'

export const addLocation = (location, sceneId) => ({
    type: ADD_LOCATION,
    sceneId,
    location
})

export const ADD_VIDEO = 'ADD_VIDEO'

export const addVideo = (sceneId, video) => ({
    type: ADD_VIDEO,
    sceneId,
    video
});