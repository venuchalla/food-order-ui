import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './useHttp';

function CustomHooksHttpExampleMain() {
  const [tasks, setTasks] = useState([]);
  
  /*
  const requestConfig = useMemo(() => {
    return {
      url: 'http://192.168.10.102:8080/getAllTasks'
    }
  }, [])

  const transformTask = useCallback((data) => {
    console.log("http data: ", data)
    setTasks(data)
  }, [])*/

  const requestConfig = {
    url: 'http://192.168.10.102:8080/getAllTasks'
  }
  const applyDataFn = (data) => {
    console.log("http data: ", data)
    setTasks(data)
  }
  const { isLoading, error, sendRequest: fetchTasks } = useHttp()


  useEffect(() => {
    fetchTasks(requestConfig, applyDataFn);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default CustomHooksHttpExampleMain;
