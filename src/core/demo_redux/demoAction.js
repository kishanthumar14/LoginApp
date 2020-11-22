const demoAction = {
    LOGIN: "LOGIN",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",

    FETCH_ERROR: "FETCH_ERROR",
    FACK_ACTION: "FACK_ACTION",
    getDemoData: (loginData) => ({
        type: demoAction.LOGIN,
        payload: loginData
    }),
    feckAction: () => ({
        type: demoAction.FACK_ACTION,
    })
}
export default demoAction;