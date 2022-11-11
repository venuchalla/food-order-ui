

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../useHttp';
const NewTask = (props) => {

  const { isLoading, error, sendRequest: addTask } = useHttp();
  const enterTaskHandler = (taskText) => {
    const requestConfig = {
      url: 'http://localhost:8080/addTask',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { "taskName": taskText }
    }

    const applyData = (data) => {
      console.log("add response:", data)
      const generatedId = data.id; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, name: data.name };
      props.onAddTask(createdTask);
    }
    addTask(requestConfig, applyData)
  }
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
