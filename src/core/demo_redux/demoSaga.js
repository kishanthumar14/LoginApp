import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import demoAction from "./demoAction";
import { loginService } from "./demoService";

export function* demoSaga() {
    yield takeEvery(demoAction.LOGIN, function* (payload) {
        try {
            const response = yield call(loginService, payload.payload);
            const data = yield call(response.json.bind(response));
            if (data) {
                yield put({
                    type: demoAction.LOGIN_SUCCESS,
                    data: data.data
                })
            }
            else {
                yield put({
                    type: demoAction.LOGIN_FAIL,
                    status: false,
                    message: data.message
                })
            }
        }
        catch (error) {
            yield put({
                type: demoAction.FETCH_ERROR,
                status: false,
                message: "Something went wrong..!"
            });
        }
    })
}
export default function* rootSaga() {
    yield all([
        fork(demoSaga),
    ])
}