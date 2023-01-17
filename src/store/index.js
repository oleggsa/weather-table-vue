import { createStore } from 'vuex';

export const store = createStore({
    state: {
        chosenCities: [],
        foundCities: []
    },
    getters: {
        getCities: function (state) {
            return state.foundCities;
        },
        getChosenCities: function (state) {
            return state.chosenCities;
        }
    },
    mutations: {
        UPDATE_FOUND_CITIES(state, payload){
            state.foundCities = payload;
        },
        SAVE_CHOSEN_CITIES(state, payload){
            state.chosenCities.push(payload)
        },
        DELETE_ITEM_FROM_CHOSEN_CITIES(state, payload){
            console.log('payload is ', payload)
            state.chosenCities = payload
            console.log('state is ', state.chosenCities)
        },
        UPDATE_CHOSEN_CITIES(state, payload){
            state.chosenCities.find(item => {
                if (item.id === payload.id){
                    item.weather = payload.weather
                }
            })
        }
    },
    actions: {
        loadCities ({ commit }, amount) {
            fetch('https://geocoding-api.open-meteo.com/v1/search?name=' + amount + '&count=50')
                .then(response => response.json())
                .then(cities => {
                    cities.results.forEach((item, index, array) => {
                        array[index].fullName = item.name + ", " + item.country + ", " + item.admin1
                    })
                    commit('UPDATE_FOUND_CITIES', cities.results)
                    console.log('result', cities.results)
                })
                .catch(error => console.error(error))
        },
        getCurrentCityWeather ({commit}, {latitude, longitude, id}){
            console.log('input data', latitude, longitude)
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=Etc/GMT-2&daily=temperature_2m_min,temperature_2m_max`)
                .then(response => response.json())
                .then(weather => {
                    commit('UPDATE_CHOSEN_CITIES', {weather, id})
                    console.log('weather', weather.daily)
                })
                .catch(error => console.error(error))
        }
    },
});