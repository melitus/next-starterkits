import React, { useReducer, createContext, useContext, useMemo } from 'react'

type Count = {
  count: number;
  offset: string;
};

const initialState = {
  counts: [],
  totalItems: 0,
  totalAmount: 0,
  bounce: false,
};

const CountStateContext = createContext(initialState)
const CountDispatchContext = createContext(null)


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

function CountProvider(props) {
  // const [state, dispatch] = useReducer(countReducer, {count: 0})
  const [ state, dispatch ] = useReducer(countReducer, initialState)
  const actions = useMemo(() => props.rootActions(dispatch), [props])
  const removeCount = (id: number) => {
    actions({
      type: "REMOVE_COUNT",
      payload: id,
    });
  }

  const addCOUNT = (selectedCounts: Count) => {
    actions({
      type: "ADD_ COUNT",
      payload: selectedCounts,
    });
  }
  const contextValues = {
        removeCount,
        addCOUNT,
        dispatch
        ...state
    }

  return (
    <CountStateContext.Provider value={contextValues}>
      <CountDispatchContext.Provider value={actions}>
        {props.children: React.ReactNode}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  )
}

const useContextFactory = (ctx,name) => () => {
  const context = useContext(ctx)
  if (context === undefined) {
    throw new Error(`${name||'Context'} must be used within its provider`)
  }
  return context
}

const useCountState = useContextFactory(CountStateContext)
const useCountDispatch = useContextFactory(CountDispatchContext)

export {CountProvider, useCountState, useCountDispatch}

