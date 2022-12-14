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
      </div>
    </>
  )
}
