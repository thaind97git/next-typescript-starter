import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import type { NextPage } from 'next';
import { Divider, List } from 'antd';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';

import { getTodo } from '@/apis/todo';
import { decrement, increment, selectCount } from '@/store/slices/counterSlice';
import { useAppSelector } from '@/store/hook';
import Button from '@/components/button';
import styles from '@/styles/Home.module.css';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const count = useAppSelector(selectCount);

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const fetchTodo = useCallback(async () => {
    try {
      const { data } = await getTodo();
      setTodos(data);
    } catch (error) {
      console.log({ error });
    }
  }, []);

  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Count: {count}</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Button type="primary" onClick={handleDecrement}>
              Decrement
            </Button>
          </div>
          <div className={styles.card}>
            <Button onClick={handleIncrement}>Increment</Button>
          </div>
        </div>
        <Divider />
        <List
          size="small"
          header={<b>Todo list</b>}
          footer={<div>Footer</div>}
          bordered
          dataSource={todos}
          renderItem={({ completed, title }) => (
            <List.Item style={{ width: 600 }}>
              <List.Item.Meta
                avatar={
                  completed ? (
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                  ) : (
                    <CloseCircleTwoTone twoToneColor="gray" />
                  )
                }
                title={<div>{title}</div>}
              />
            </List.Item>
          )}
        />
      </main>
    </div>
  );
};

export default Home;
