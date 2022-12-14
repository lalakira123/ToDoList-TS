import { Trash } from 'phosphor-react';
import style from './Task.module.css';

interface TaskProps {
  content: string,
  isCheck: boolean,
  onRisk: (content: string) => void
  onDelete: (content: string) => void
}

export function Task({ content, isCheck, onRisk, onDelete }: TaskProps) {
  function handleRiskTask() {
    onRisk(content);
  }

  return(
    <article className={ isCheck ? style.taskChecked : style.task }>
      <div className={style.infoTask}>
        <input type="checkbox" onClick={handleRiskTask}/>
        <p>{content}</p>
      </div>
      <button className={style.trash} onClick={() => onDelete(content)}>
        <Trash />
      </button>
    </article>
  );
}