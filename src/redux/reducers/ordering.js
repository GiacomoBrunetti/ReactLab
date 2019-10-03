import { actions as ordering } from '../actions/ordering';

const initialState = {
  orders: {},
  currentOrder: {},
  pastOrders: [],
  refreshing: false,
  currentDelivery: {},
  fetchingPastOrders: false,
  basketStatus: 1,
  activeOrderItemCalls: {},
};

export default function orderingState(state = initialState, action) {
  const payload = action.payload || {};

  switch (action.type) {
    case ordering.ORDER.REQUEST:
      return {
        ...state,
        refreshing: true,
        basketStatus: 0,
      };
    case ordering.ORDER.FAILURE: {
      return {
        ...state,
        refreshing: false,
        basketStatus: 0,
      }
    }
    case ordering.ORDER.SUCCESS: {
      const orders = new Set();
      const orderItems = payload.orderitems || [];
      for (let i = orderItems.length - 1; i >= 0; i--) {
        const item = orderItems[i]
        orders[item.customer_product] = {
          orderedQuantity: item.quantity_ordered,
          orderedUnit: item.unit_ordered,
          sample: item.sample,
          orderItemId: item.id,
        };
      }
      return {
        ...state,
        orders,
        refreshing: false,
        basketStatus: 1,
      }
    }
    // case ordering.LOOKUP_CURRENT_ORDER.SUCCESS:
    //   return {
    //     ...state,
    //     currentOrder: payload,
    //   };
    case ordering.PAST_ORDERS.REQUEST:
      return {
        ...state,
        fetchingPastOrders: true,
      }
    case ordering.PAST_ORDERS.SUCCESS:
      return {
        ...state,
        pastOrders: payload,
        fetchingPastOrders: false,
      };
    case ordering.ORDERITEM.REQUEST: {
      const orders = Object.assign({}, state.orders);
      orders[payload.customerProductId] = {
        orderedQuantity: payload.quantity,
        orderedUnit: payload.unit,
        fake: true,
      };
      const activeOrderItemCalls = { ...state.activeOrderItemCalls };
      const existingActiveCall = activeOrderItemCalls[`${payload.customerProductId}`]
      activeOrderItemCalls[`${payload.customerProductId}`] = existingActiveCall ? existingActiveCall + 1 : 1;
      return {
        ...state,
        orders,
        basketStatus: 0,
        activeOrderItemCalls,
      }
    }
    case ordering.ORDERITEM.SUCCESS: {
      const orders = Object.assign({}, state.orders);
      const returnedOrder = payload;
      if (state.activeOrderItemCalls[returnedOrder.customer_product] === 1) {
        orders[returnedOrder.customer_product] = {
          orderedQuantity: returnedOrder.quantity_ordered,
          orderedUnit: returnedOrder.unit_ordered,
          orderItemId: returnedOrder.id,
          sample: returnedOrder.sample,
        }
      }
      const activeOrderItemCalls = { ...state.activeOrderItemCalls };
      const existingActiveCall = activeOrderItemCalls[`${returnedOrder.customer_product}`]
      activeOrderItemCalls[`${returnedOrder.customer_product}`] = existingActiveCall - 1;
      return {
        ...state,
        orders,
        basketStatus: 1,
        activeOrderItemCalls,
      }
    }
    case ordering.ORDERITEM.FAILURE: {
      const activeOrderItemCalls = { ...state.activeOrderItemCalls };
      const existingActiveCall = activeOrderItemCalls[`${action.customerProductId}`]
      activeOrderItemCalls[`${action.customerProductId}`] = existingActiveCall - 1;
      return {
        ...state,
        refreshing: true,
        basketStatus: 0,
        activeOrderItemCalls,
      }
    }
    // case ordering.NEXT_CUTOFF.SUCCESS:
    //   const response = action.response
    //   // const date = moment(response.DATE).format('dddd, MMMM Do')
    //   const slot = response.NAME
    //   const cutOff = response.END
    //   // const actualCutOff = moment(`${response.DATE} ${cutOff}`, 'YYYY-MM-DD HH:mm:ss')
    //   const description = response.DESCRIPTION
    //   const disruption = response.disrupted || false
    //   let orders = state.orders
    //   if (state.currentDelivery.slot && state.currentDelivery.date) {
    //     if (date !== state.currentDelivery.date || slot !== state.currentDelivery.slot) {
    //       orders = {}
    //     }
    //   }
    //   const cutOffObj = {
    //     date,
    //     slot,
    //     cutOff: actualCutOff,
    //     description,
    //     disruption,
    //   }
    //   return {
    //     ...state,
    //     orders,
    //     currentDelivery: cutOffObj,
    //   }
    default:
      return state
  }
}
