import { TasksProps } from '../../screens/Home';
import { TaskActionKind } from './actions';

export type TaskState = {
  tasks: TasksProps[];
  tasksFinished: number;
};

export function tasksReducer(state: TaskState, action: any): TaskState {
  const { type, payload } = action;

  switch (type) {
    case TaskActionKind.ADD:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case TaskActionKind.DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload.id),
      };

    case TaskActionKind.MARK_TASK_AS_FINISHED:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return {
              ...task,
              isFinished: !task.isFinished,
            };
          } else {
            return task;
          }
        }),
      };

    case TaskActionKind.GET_TASKS_FINISHED:
      return {
        ...state,
        tasksFinished: state.tasks.filter((task) => task.isFinished === true)
          .length,
      };
    case TaskActionKind.ORDER_TASK_IF_IS_FINISHED:
      return {
        ...state,
        tasks: state.tasks.sort(
          (a, b) => Number(a.isFinished) - Number(b.isFinished),
        ),
      };
    default:
      return state;
  }
}
