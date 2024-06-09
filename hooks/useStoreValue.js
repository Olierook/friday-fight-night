export const useStoreValue = (string, defaultValue) => {
    const [store, setStore] = useStore();
    const myValue = store[string]

  
    const updateValue = (v) => {
      setStore({[string]: v} )
    };

    if (typeof myValue === 'undefined') {
        updateValue(defaultValue)
    }

    useCol
  
    return [store[string], updateValue];
  };

