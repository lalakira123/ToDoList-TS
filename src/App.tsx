import { Header } from './components/Header/Header';

import style from './App.module.css';
import { PlusCircle } from 'phosphor-react';

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
            
          </div>
        </main>
      </div>
    </>
  )
}
