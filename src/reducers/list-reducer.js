import { lists as defaultLists } from "../normalized-state";
import set from "lodash/fp/set";

const listReducer = (lists = defaultLists, action) => {
  if (action.type === "CARD_CREATE") {
    const { cardId, listId } = action.payload;
    // one way to update the state using spread operators
    // const entities = { ...lists.entities };
    // entities[listId] = {
    //   ...entities[listId],
    //   cards: entities[listId].cards.concat(cardId)
    // };

    // return {
    //   ...lists,
    //   entities
    // };

    //or we can import a set function from FP of lodash and use it
    const cards = lists.entities[listId].cards.concat(cardId);
    return set(["entities", listId, "cards"], cards, lists);
  }
  return lists;
};

export default listReducer;
