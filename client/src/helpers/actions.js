// Action Creators

export function makePayloadActionCreator(actionType) {
  const actionCreator = payload => ({ type: actionType, payload });
  actionCreator.actionType = actionType;
  return actionCreator;
}

export const makeRequestActionCreators = requestActionName => ({
  request: makePayloadActionCreator(`${requestActionName}_REQUEST`),
  success: makePayloadActionCreator(`${requestActionName}_SUCCESS`),
  error: makePayloadActionCreator(`${requestActionName}_ERROR`),
});
