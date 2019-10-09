export const actions = {
  PLANNER_DATA: {
    REQUEST: 'PLANNER_DATA_REQUEST',
    SUCCESS: 'PLANNER_DATA_SUCCESS',
    FAILURE: 'PLANNER_DATA_FAILURE',
  },
}

export const triggerPlannerDataRequest = () => ({ type: actions.PLANNER_DATA.REQUEST })
