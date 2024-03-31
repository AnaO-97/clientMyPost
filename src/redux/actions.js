import * as ACTION from "./actionsTypes";

export function clearRedux() {
    return({
        type    : ACTION.REDUX_CLEAR,
        payload : ""
    })
}