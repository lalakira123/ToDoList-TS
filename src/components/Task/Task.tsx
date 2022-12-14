import { Trash } from 'phosphor-react';
import style from './Task.module.css';

export function Task() {
  return(
    <article className={style.task}>
      <div className={style.infoTask}>
        <input type="checkbox"/>
        <p>Tarefinha a ser realizada</p>
      </div>
      <button className={style.trash}>
        <Trash />
      </button>
    </article>
  );
}