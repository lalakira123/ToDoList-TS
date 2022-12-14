import { Rocket } from 'phosphor-react';
import style from './Header.module.css';

export function Header() {
  return(
    <header className={style.header}>
      <Rocket size={'2.25rem'} color={'#4ea8de'}/>
      <h1>to<span>do</span></h1>
    </header>
  );
}