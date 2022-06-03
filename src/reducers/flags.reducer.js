
const SET_SHOW_COLOR_PERCENTAGE = "SET_SHOW_COLOR_PERCENTAGE";
const SET_HAS_RUG_SHARE = "SET_HAS_RUG_SHARE";
const SET_SHOW_SAVE_IMAGE = "SET_SHOW_SAVE_IMAGE";
const SET_FULL_PAGE_THUMB = "SET_FULL_PAGE_THUMB";
const SET_ALLOW_CREATE_YOUR_RUG_TEMPLATE = "SET_ALLOW_CREATE_YOUR_RUG_TEMPLATE";
const SET_SUBMITTED = "SET_SUBMITTED";

export const Flags_Actions = {
    SET_SHOW_COLOR_PERCENTAGE,
    SET_HAS_RUG_SHARE,
    SET_SHOW_SAVE_IMAGE,
    SET_FULL_PAGE_THUMB,
    SET_ALLOW_CREATE_YOUR_RUG_TEMPLATE,
    SET_SUBMITTED
}

export function reducer(state, action) {
    let temp = { ...state }
    switch (action.type) {
        case SET_SHOW_COLOR_PERCENTAGE:
            temp.flags.showColorPercentage = action.payload
            return { ...temp }
        // return { ...state, flags: { ...state.flags, showColorPercentage: action.payload } }

        case SET_HAS_RUG_SHARE:
            temp.flags.hasRugShare = action.payload
            return { ...temp }

        case SET_SHOW_SAVE_IMAGE:
            temp.flags.showSaveImage = action.payload
            return { ...temp }

        case SET_FULL_PAGE_THUMB:
            temp.flags.fullPageThumb = action.payload
            return { ...temp }

        case SET_ALLOW_CREATE_YOUR_RUG_TEMPLATE:
            temp.flags.allowCreateYourRugTemplate = action.payload
            return { ...temp }

        case SET_SUBMITTED:
            return { ...state, submitted: action.payload }

        default:
            return state;
    }
}

