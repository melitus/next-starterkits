import React from 'react'

const CountStateContext = React.createContext()
const CountDispatchContext = React.createContext()

function countReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return {count: state.count + 1}
    }
    case 'decrement': {
      return {count: state.count - 1}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function CountProvider({children}) {
  const [state, dispatch] = React.useReducer(countReducer, {count: 0})
  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  )
}

const useContextHOF = (ctx,name) => () => {
  const context = React.useContext(ctx)
  if (context === undefined) {
    throw new Error(`${name||'Context'} must be used within its provider`)
  }
  return context
}
const useCountState = useContextHOF(CountStateContext)
const useCountDispatch = useContextHOF(CountDispatchContext)

export {CountProvider, useCountState, useCountDispatch}

