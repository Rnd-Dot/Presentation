import { useState } from 'react';
import { Link } from '@mui/material';
import MyInput from '../../UI/input/MyInput';
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css'


const Login = () => {
    const [name, setName] = useState('')
    const [disabled, setDisabled] = useState(true)

    const navigate = useNavigate()
    
    const login = event => {
        event.preventDefault();
        localStorage.setItem('name', name)
        navigate('/Home')
    }

    const handleChange = (e) => {
        setName(e.target.value)
        if(e.target.value) {
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }

    return (
        <div className={style.wrapper_login}>
            <div className={style.block_login}>
                <h2 className={style.title_login}>Давайте знакомиться</h2>
                <form>
                    <MyInput type="text" value={name} onChange={handleChange} label="Имя" fullWidth/>
                    <Link to='/home'>
                        <button className={style.btn_login} disabled={disabled} onClick={login}>Начать</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;