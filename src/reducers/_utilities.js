import set from "lodash/fp/set";
import get from "lodash/fp/get";
import pipe from "lodash/fp/pipe";

export const addEntity = (state, entity, id) => {
  //when we create a new entity we know it needs to know where to put it(entities) and add the new entity's id to the list of ids
  return pipe(
    set(["entities", id], entity),
    set("ids", state.ids.concat(id))
  )(state);
};

export const addIdToChildren = (state, entityId, property, childId) => {
  const path = ["entities", entityId, property];
  const children = get(path)(state);
  return set(path, children.concat(childId), state);
};
