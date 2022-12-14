import { ChangeEvent, FormEvent, useState } from 'react';

import { Header } from './components/Header/Header';
import { Task } from './components/Task/Task';

import style from './App.module.css';
import { Notepad, PlusCircle } from 'phosphor-react';

export interface TaskProps {
  content: string,
  isCheck: boolean
}

export function App() {
  const [ tasks, setTasks ] = useState<TaskProps[]>([]);
  const [ newTask, setNewTask ] = useState('');

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, { content: newTask, isCheck: false }]);

    setNewTask('');
  }

  function handleChangeNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCheckTask(taskToRisk: string) {
    const taskRisked = tasks.map(task => {
      if( task.content == taskToRisk ) {
        return { content: task.content, isCheck: !task.isCheck }
      } else {
        return { content: task.content, isCheck: task.isCheck }
      }
    });

    setTasks(taskRisked);
  }

  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <form onSubmit={handleCreateTask} className={style.form}>
          <input 
            placeholder='Adicione uma nova tarefa'
            onChange={handleChangeNewTask}
            value={newTask}
            required
          />
          <button type='submit' disabled={newTask.length == 0}>
            Criar
            <PlusCircle size={'1.25rem'}/>
          </button>
        </form>

        <main>
          <div className={style.status}>
            <div className={style.taskCreated}>
              <p>
                Tarefas criadas
                <span>{tasks.length}</span>
              </p>
            </div>
            <div className={style.taskDone}>
              <p>
                Concluídas
                <span>
                  {
                    tasks.filter(task => {
                      return task.isCheck
                    }).length 
                  }
                  {' '}de{' '} 
                  {
                    tasks.length
                  }
                </span>
              </p>
            </div>
          </div>

          <div className={style.tasks}>
            {tasks.length > 0 ?
              tasks.map(task => {
                return (
                  <Task 
                    key={task.content}
                    content={task.content}
                    isCheck={task.isCheck}
                    onRisk={handleCheckTask}
                  />
                )
              })
              :
              <div className={style.warning}>
                <Notepad size={"56px"}/>
                <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            }
          </div>
        </main>
      </div>
    </>
  )
}
