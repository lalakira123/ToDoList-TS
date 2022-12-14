import { Header } from './components/Header/Header';
import { Task } from './components/Task/Task';

import style from './App.module.css';
import { Notepad, PlusCircle } from 'phosphor-react';

export function App() {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <form className={style.form}>
          <input 
            placeholder='Adicione uma nova tarefa'
          />
          <button>
            Criar
            <PlusCircle size={'1.25rem'}/>
          </button>
        </form>

        <main>
          <div className={style.status}>
            <div className={style.taskCreated}>
              <p>
                Tarefas criadas
                <span>5</span>
              </p>
            </div>
            <div className={style.taskDone}>
              <p>
                Concluídas
                <span>2 de 5</span>
              </p>
            </div>
          </div>

          <div className={style.tasks}>
            <div className={style.warning}>
              <Notepad size={"56px"}/>
              <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
