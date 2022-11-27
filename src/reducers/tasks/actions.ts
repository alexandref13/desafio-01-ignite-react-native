export enum TaskActionKind {
  ADD = 'ADD',
  DELETE = 'DELETE',
  MARK_TASK_AS_FINISHED = 'MARK_TASK_AS_FINISHED',
  ORDER_TASK_IF_IS_FINISHED = 'ORDER_TASK_IF_IS_FINISHED',
  GET_TASKS_FINISHED = 'GET_TASKS_FINISHED',
}

export function addNewTask(title: string) {
  return {
    type: TaskActionKind.ADD,
    payload: {
      id: Math.random().toString(),
      title: title,
      isFinished: false,
    },
  };
}

export function markTaskAsFinished(id: string) {
  return {
    type: TaskActionKind.MARK_TASK_AS_FINISHED,
    payload: {
      id,
    },
  };
}

export function deleteTask(id: string) {
  return {
    type: TaskActionKind.DELETE,
    payload: {
      id,
    },
  };
}

export function orderTasks() {
  return {
    type: TaskActionKind.ORDER_TASK_IF_IS_FINISHED,
    payload: {},
  };
}

export function getTasksFinished() {
  return {
    type: TaskActionKind.GET_TASKS_FINISHED,
    payload: {},
  };
}
