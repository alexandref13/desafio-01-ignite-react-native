import { useEffect } from 'react';
import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { EmptyList } from '../../components/EmptyList';
import { Form } from '../../components/Form';

import { Header } from '../../components/Header';
import { TabBar } from '../../components/TabBar';
import { Task } from '../../components/Task';

import { styles } from './styles';

export interface TasksProps {
  id: string;
  title: string;
  isFinished: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<TasksProps[]>([
    {
      id: Math.random().toString(),
      title: 'Task nova',
      isFinished: false,
    },
  ]);

  const [tasksFinished, setTasksFinished] = useState(0);

  async function handleAddTask(title: string) {
    setTasks((prevState) => [
      ...prevState,
      {
        id: Math.random().toString(),
        title,
        isFinished: false,
      },
    ]);
  }

  async function handleFinishedTask(id: string) {
    setTasks((prevState) => {
      return prevState.map((task) => {
        if (task.id === id) {
          console.log(task);

          return {
            id: task.id,
            title: task.title,
            isFinished: !task.isFinished,
          };
        } else {
          return task;
        }
      });
    });
  }

  async function handleDeleteTask(id: string) {
    setTasks((prevState) => {
      return prevState.filter((task) => task.id !== id);
    });
  }

  useEffect(() => {
    const finishedTasks = tasks.filter((task) => task.isFinished === true);

    setTasksFinished(finishedTasks.length);
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
