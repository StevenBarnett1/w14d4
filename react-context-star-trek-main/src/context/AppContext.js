import { createContext, useState } from 'react';
import { initialCards, initialInventory, initialDecks } from "../mockdata/CardData";


export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [inventoryState, setInventoryState] = useState(initialInventory)
    const [deckState, setdeckState] = useState(initialDecks)
    // console.log(applicationState[1]);
    const buyCardForPlayer = (id) => {
        let initialInventory
        let playerDeckArr = deckState[0].cards;
        const cardToAdd = initialCards.find(card => card.id === id);
        let otherPlayersDeck = deckState[1];
        setdeckState();

    }
    return (
        <AppContext.Provider value={{
            cards: initialCards,
             ...applicationState,
            buyCard: buyCardForPlayer,
        }}>
          {children}
        </AppContext.Provider>
      );
}
