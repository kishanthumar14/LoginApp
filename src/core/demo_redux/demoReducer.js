import demoAction from "./demoAction";
const initState = { demoAction: {} };
export default function demoReducer(state = initState, action) {
    switch (action.type) {
        case demoAction.LOGIN_SUCCESS:
            return {
                demoAction: action
            }
        case demoAction.LOGIN_FAIL:
            return {
                demoAction: action
            }
        case demoAction.FACK_ACTION:
            return {
                demoAction: action
            }
        default:
            return state;
    }
}