import { Link } from 'react-router-dom';
import style from './Home.module.css'

const Home = () => {
    const name = localStorage.getItem('name')

    return (
       <div className={style.wrapper_home}>
            <div className={style.block_home}>
                <h1 className={style.title_home}>
                    {name}, добро пожаловать!
                </h1>
                <div>
                    <div className={style.case}>
                        <h2>Кейс 1</h2>
                        <Link to="/posts">Перейти</Link>
                    </div>

                    <div className={style.case}>
                        <h2>Кейс 2</h2>
                        <Link to="/dynamic">Перейти</Link>
                    </div>
                </div>
            </div>
       </div> 
    )
}

export default Home;