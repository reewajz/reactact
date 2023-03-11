import { Link } from 'react-router-dom';
// style --- name could be anything
import style from './MainNavigation.module.css';

export default function MainNavigation() {
    return <header className={style.header}>
        <div className={style.logo}>React Meetup</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favourites</Link>
                    </li>
                </ul>
            </nav>
    </header>

}