import {Module} from 'vuex';
import {GET_LOADING_STATE} from './getter-types';
import {DECREMENT_LOADING_STATE, INCREMENT_LOADING_STATE} from './mutation-types';

interface ILoadingState {
    // для адаптации под строгую типизацию
    loading: string[];
}

const loadingState: Module<ILoadingState, {}> = {
    state: {
        // состояние данных приложения
        loading: [],
    },
    mutations: {
        // синхронные изменения
        [INCREMENT_LOADING_STATE](state, loading: string) {
            state.loading.push(loading);
        },
        [DECREMENT_LOADING_STATE](state) {
            state.loading.pop();
        },
    },
    getters: {
        // возвращает вычисляемые данные текущего состояния хранилища компоненту
        [GET_LOADING_STATE]: (state) => Boolean(state.loading.length),
    },
};

export default loadingState;
