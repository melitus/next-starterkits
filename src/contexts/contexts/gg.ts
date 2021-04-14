interface ContextProps {
  state: ReducerState;
  dispatch: (  : { type: string }) => void;}

export const StoreContext = createContext({} as ContextProps);

type ProviderProps = { children: ReactNode;};

export const StoreProvider = (
  props: ProviderProps
): ReactElement<string> => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
        {props.children}
     </StoreContext.Provider>
   );
}