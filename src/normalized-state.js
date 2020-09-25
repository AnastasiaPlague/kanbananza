import { schema, normalize } from "normalizr";
import defaultState from "./default-state";

const user = new schema.Entity("users");
const card = new schema.Entity("cards", { assignedTo: user });
const list = new schema.Entity("lists", {
  cards: [card]
});

const normalizedLists = normalize(defaultState.lists, [list]);
const normalizedUsers = normalize(defaultState.users, [user]);

//normalizr returns an array of ids for the schema with the key "result", for this case we chose to rename it so it wouldn't be confusing later
//for our purpose we need separate trees of state, that's why we reformat it slightly in the export method to get the data with the right structure

export const lists = {
  entities: normalizedLists.entities.lists,
  ids: normalizedLists.result
};

export const users = {
  entities: normalizedUsers.entities.lists,
  ids: normalizedUsers.result
};
//to keep it consistent we need an array of ids for cards as well but the normalizr with our defaultData cannot create it for us, so we use Object.keys on the entities.cards which hold the ids as keys to get it into an array
export const cards = {
  entities: normalizedLists.entities.cards,
  ids: Object.keys(normalizedLists.entities.cards)
};

export default {
  users,
  lists,
  cards
};
