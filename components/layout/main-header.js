import classes from './main-header.module.css';
import Link from 'next/link';

function MainHeader(props){
    return(
        
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href='/'>NextPractice</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li><Link href='/events'>All Events</Link></li>
                </ul>
            </nav>
        </header>
        
    )
}
export default MainHeader;