export const actions = {
  'ORDERITEM': {
    'REQUEST': 'OI_R',
    'SUCCESS': 'OI_S',
    'FAILURE': 'OI_F'
  },
  'ORDER': {
    'REQUEST': 'O_R',
    'SUCCESS': 'O_S',
    'FAILURE': 'O_F'
  },
  'PAST_ORDERS': {
    'REQUEST': 'PAST_ORDERS_R',
    'SUCCESS': 'PAST_ORDERS_S',
    'FAILURE': 'PAST_ORDERS_F',
  },
  'NEXT_CUTOFF': {
    'REQUEST': 'NEXT_CUTOFF_R',
    'SUCCESS': 'NEXT_CUTOFF_S',
    'FAILURE': 'NEXT_CUTOFF_F',
  }
};

/** ORDERITEM */
export function triggerOrderItemRequest(orderItem) {
  return { type: actions.ORDERITEM.REQUEST, payload: {...orderItem} };
};
export function triggerOrderItemSuccess(orderItem) {
  return { type: actions.ORDERITEM.SUCCESS, payload: {...orderItem} };
};
export function triggerOrderItemFailure(orderItem) {
  return { type: actions.ORDERITEM.FAILURE, payload: {...orderItem} };
};

/** ORDER */
export function triggerOrderRequest() {
  return { type: actions.ORDER.REQUEST }
};
export function triggerOrderSuccess(order) {
  return { type: actions.ORDER.SUCCESS, payload: {...order} };
};
export function triggerOrderFailure(order) {
  return { type: actions.ORDER.FAILURE, payload: {...order} };
};

/** PAST_ORDERS */
export function triggerPastOrdersRequest() {
  return { type: actions.PAST_ORDERS.REQUEST }
};
export function triggerPastOrdersSuccess(orders) {
  return { type: actions.PAST_ORDERS.SUCCESS, payload: [...orders]};
};
export function triggerPastOrdersFailure() {
  return { type: actions.PAST_ORDERS.FAILURE };
};

/** NEXT_CUTOFF */
export function triggerNextCutoffRequest() {
  return { type: actions.NEXT_CUTOFF.REQUEST }
};
export function triggerNextCutoffSuccess(cutoff) {
  return { type: actions.NEXT_CUTOFF.SUCCESS, payload: {...cutoff}};
};
export function triggerNextCutoffFailure() {
  return { type: actions.NEXT_CUTOFF.FAILURE };
};