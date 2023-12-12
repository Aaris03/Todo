import React from "react";

/*const defaultTodos = [
  {text: "Estudiar react y aprender a usarlo", completed: true, id: 1},
  {text: "Crear una app funcional basica para mostrar", completed: true, id: 2},
  {text: "Buscar trabajo como front-end Developer", completed: false, id: 3},
  {text: "Cambiar de trabajo", completed: false, id: 4},
  {text: "Comprar una steam deck", completed: false, id: 5},
  {text: "Trabajar desde casa", completed: true, id: 6},
  {text: "Visitar Italia", completed: false, id: 7},
  {text: "Comprar una camioneta", completed: false, id: 8},
]*/

/*localStorage.setItem("TODO_V1", JSON.stringify(defaultTodos));*/

function useLocalStorage(itemName, initialValue){
   const [item, setItem] = React.useState(initialValue);
   const [loading, setLoading] = React.useState(true);
   const [error, setError] = React.useState(false);

    React.useEffect(() => {
      setTimeout(() => {
        try{    
          const localStorageItem = localStorage.getItem(itemName);
    
          let parsedItem;

          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem)
            setItem(parsedItem)
          }

          setLoading(false);
        }catch(error){
          setLoading(false);
          setError(error)
        }
      },2000)
    },[])

    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
  
    return {item, saveItem, loading, error};
  }

  export {useLocalStorage};