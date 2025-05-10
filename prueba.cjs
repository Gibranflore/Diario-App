
// const { createStore, combineReducers } = require('redux');

// //* Actions -------------------------------------
// const BUY_POKEMON =' BUY_POKEMON';
// const RETURN_POKEMON = 'RETURN_POKEMON';
// const BUY_YOSHI = 'BUY_YOSHI';
// const RETURN_YOSHI = 'RETURN_YOSHI';
// const BUY_PS5 =' BUY_PS5';
// const RETURN_PS5 = 'RETURN_PS5';
// const BUY_XBOX =' BUY_XBOX';
// const RETURN_XBOX = 'RETURN_XBOX';

// const buy_pokemon_actions = (cant) => {
//     return {
//         type: BUY_POKEMON,
//         payload: cant
//     }
// }
// const return_pokemon_actions = (cant) => {
//     return {
//         type: RETURN_POKEMON,
//         payload: cant
//     }
// }

// const buy_yoshi_actions = (cant) => {
//     return {
//         type: BUY_YOSHI,
//         payload: cant
//     }
// }
// const return_yoshi_actions = (cant) => {
//     return {
//         type: RETURN_YOSHI,
//         payload: cant
//     }
// }
// const buy_ps5_actions = (cant) => {
//     return {
//         type: BUY_PS5,
//         payload: cant
//     }
// }
// const return_ps5_actions = (cant) => {
//     return {
//         type: RETURN_PS5,
//         payload: cant
//     }
// }

// const buy_xbox_actions = (cant) => {
//     return {
//         type: BUY_XBOX,
//         payload: cant
//     }
// }
// const return_xbox_actions = (cant) => {
//     return {
//         type: RETURN_XBOX,
//         payload: cant
//     }
// }
// //* Reducers--------------------------------------
// const default_game_state= {
//     pokemon: 10,
//     yoshi: 10
// }

// const game_reducer = (state = default_game_state, action ) => {
//     switch (action.type) {
//         case BUY_POKEMON: {
//             return {
//                 ...state,
//                 pokemon: state.pokemon - action.payload,
//             }
//         }
//         case RETURN_POKEMON: {
//             return {
//                 ...state,
//                 pokemon: state.yoshi + action.payload,
//             }
//         }
//         case BUY_YOSHI: {
//             return {
//                 ...state,
//                 yoshi: state.yoshi - action.payload,
//             }
//         }
//         case RETURN_YOSHI: {
//             return {
//                 ...state,
//                 yoshi: state.yoshi + action.payload,
//             }
//         }
    
//             default: return state;
//         }
//     }

//     const default_console_state= {
//     xbox: 30,
//     ps5: 47
// }

// const console_reducer = (state = default_console_state, action ) => {
//     switch (action.type) {
//         case BUY_PS5: {
//             return {
//                 ...state,
//                 ps5: state.ps5 - action.payload,
//             }
//         }
//         case RETURN_PS5: {
//             return {
//                 ...state,
//                 ps5: state.ps5 + action.payload,
//             }
//         }
//         case BUY_XBOX: {
//             return {
//                 ...state,
//                 xbox: state.xbox - action.payload,
//             }
//         }
//         case RETURN_XBOX: {
//             return {
//                 ...state,
//                 xbox: state.xbox + action.payload,
//             }
//         }
    
//             default: return state;
//         }
//     }

//     const rootReducer = combineReducers({
//         game_reducer, console_reducer
//     });


// //*Sotore--------------------------------------------

// const store = createStore( rootReducer );
//     console.log('Estado inicial', store.getState() );
// store.subscribe( () => {
//     console.log('Cambio de Estado',store.getState () );
// });
// store.dispatch(buy_pokemon_actions(5))
// store.dispatch(return_pokemon_actions(2))
// store.dispatch(buy_yoshi_actions(7))
// store.dispatch(return_yoshi_actions(2))
// store.dispatch(buy_ps5_actions(3))
// store.dispatch(return_ps5_actions(1))
// store.dispatch(buy_xbox_actions(9))
// store.dispatch(return_xbox_actions(4))