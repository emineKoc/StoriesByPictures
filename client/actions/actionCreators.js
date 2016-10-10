// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment

export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}



// Actions are an ocject tath has type and payload of information needed. WHO WHERE WHICH
// We decide the actions and whatever we pass to the action.
// wE SAY FIRE OR DISPATCH AN ACTION IN REDUX LINGO.
// Action only know type of the action, does not know how.
// In order to update the state, We use Reducers and Store.
// Actions are events. We create reducer to listen that event handle the data and change the state.
// We create one reducers, for each piece of state.
