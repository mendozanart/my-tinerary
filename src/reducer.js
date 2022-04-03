
export const initialState = {
    cities:[],
    itineraries:[],
    user:null,
    filterCity:[],
    filterContinent:[]

}

export const actionTypes = {
    CITIESDB: "CITIESDB",
    ITINERARIESDB : "ITINERARIESDB",
    USER:"USER",
    FILTER:"FILTER",
    FILTERCONTINENT:"FILTERCONTINENT"
}

const reducer = (state, action) => {
    console.log ('action',action)
    switch (action.type) {
        case "CITIESDB":
            return {
                ...state,
                cities: action.cities, 
                filterCity: action.cities
            }
        case "ITINERARIESDB":
            return {
                ...state,
                itineraries: action.itineraries
            }
        case "USER":
            return {
                ...state,
                user: action.user
            }
        case "FILTER":
            const filterCity = state.cities.filter(city=>city.city.toLowerCase().startsWith(action.value.toLowerCase().trim()))
            return {
                ...state,
                filterCity: filterCity
            }
        case "FILTERCONTINENT":
            const filterContinent = action.id ? state.cities.filter(city => city.continent.toLowerCase() === action.value.toLowerCase()) : state.cities;
            console.log('ciudades', filterContinent);
            return{
                ...state, 
                filterCity: filterContinent
            }

        default: return state
    }
}


export default reducer;