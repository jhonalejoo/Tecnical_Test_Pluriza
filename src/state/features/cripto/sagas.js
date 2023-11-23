import { call, all, put, takeEvery } from 'redux-saga/effects';
import { getCriptos } from '../../../api/cripto';
import { getCriptosErrors, getCriptosLoading, getCriptosSuccess } from './reducers';


function* getCriptosFlow(action) {
    try {
        const criptos = yield call(getCriptos,action.payload);
        yield put(getCriptosSuccess(criptos));
    } catch (error) {
        yield put(getCriptosErrors(error));
    }
}
function* bankWatcher() {
    yield all([
        takeEvery(getCriptosLoading.type, getCriptosFlow)
    ])
}

export default bankWatcher;