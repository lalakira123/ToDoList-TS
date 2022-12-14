import { Trash } from 'phosphor-react';
import style from './Task.module.css';

import { TaskProps } from '../../App';

export function Task({ content, isCheck }: TaskProps) {
  return(
    <article className={ isCheck ? style.taskChecked : style.task }>
      <div className={style.infoTask}>
        <input type="checkbox"/>
        <p>{content}</p>
      </div>
      <button className={style.trash}>
        <Trash />
      </button>
    </article>
  );
}