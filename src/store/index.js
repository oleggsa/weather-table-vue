import { createStore } from 'vuex';

export const store = createStore({
    state: {
        foundCities: '',
        chosenCities: []
    },
    getters: {
        getCities: function (state) {
            return state.foundCities;
        },
        getChosenCities: function (state) {
            return state.foundCities;
        }
    },
    mutations: {
        UPDATE_FOUND_CITIES(state, payload){
            state.foundCities = payload;
        },
        UPDATE_CHOSEN_CITIES(state, payload){
            state.chosenCities.push(payload)
        }
    },
    actions: {
        loadCities ({ commit }, amount) {
            fetch('https://geocoding-api.open-meteo.com/v1/search?name=' + amount)
                .then(response => response.json())
                .then(coins => {
                    commit('UPDATE_FOUND_CITIES', coins.results)
                    console.log('result', coins.results)
                })
        }
    },
});