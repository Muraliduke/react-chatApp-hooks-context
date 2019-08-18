import React from 'react';

export const ctx = React.createContext();


const initialState = {
    'topic':[{'name': 'user', 'msg': 'Hi how r u?','type': 'topic'},],
    'dev': [{'name': 'Murali Duke', 'msg': 'Am fine.How about you?','type': 'topic'},],
    'test': [{'name': 'user', 'msg': 'Am good','type': 'topic'},]
}

function reducer(state,action){
    console.log('reducer called')
    switch(action.type){
        case 'ADD_MESSAGE':
            console.log('dispatched',action)
          return {
              ...state,
              [action.payload.type]: [
                  ...state[action.payload.type],
                  {
                      'name': action.payload.name,
                      'msg': action.payload.msg,
                      'type': action.payload.type
                  }
              ]
          };

        default:
                console.log('default state')
            return state
    }

}

export default function Store(props){

    const reducerHook = React.useReducer(reducer, initialState)

    return(
        <ctx.Provider value={reducerHook}>
            {props.children}
        </ctx.Provider>
    )
}

