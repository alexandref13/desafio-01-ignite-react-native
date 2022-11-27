import { useEffect, useReducer } from 'react';
import { FlatList, View } from 'react-native';
import { EmptyList } from '../../components/EmptyList';
import { Form } from '../../components/Form';

import { Header } from '../../components/Header';
import { TabBar } from '../../components/TabBar';
import { Task } from '../../components/Task';
import {
  addNewTask,
  deleteTask,
  getTasksFinished,
  markTaskAsFinished,
  orderTasks,
} from '../../reducers/tasks/actions';

import { tasksReducer } from '../../reducers/tasks/reducer';

import { styles } from './styles';

export interface TasksProps {
  id: string;
  title: string;
  isFinished: boolean;
}

export function Home() {
  const [tasksState, dispatch] = useReducer(tasksReducer, {
    tasks: [],
    tasksFinished: 0,
  });

  const { tasks, tasksFinished } = tasksState;

  async function handleAddTask(title: string) {
    dispatch(addNewTask(title));
  }

  async function handleFinishedTask(id: string) {
    dispatch(markTaskAsFinished(id));
  }

  async function handleDeleteTask(id: string) {
    dispatch(deleteTask(id));
  }

  useEffect(() => {
    console.log('aaa');

    dispatch(orderTasks());
    dispatch(getTasksFinished());
  }, [tasks]);

  return (
    <View style={styles.container}>
      <Header />
      <Form handleAddTask={handleAddTask} />
      <TabBar created={tasks.length} finished={tasksFinished} />

      <FlatList
        style={{
          marginTop: 20,
        }}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            data={item}
            handleFinishedTask={handleFinishedTask}
            handleDeleteTask={handleDeleteTask}
          />
        )}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
}
