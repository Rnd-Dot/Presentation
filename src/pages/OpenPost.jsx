import { useNavigate, useParams } from "react-router-dom";
import MyButton from "../UI/button/MyBotton";

const OpenPost = () => {
    let params = useParams()
    const navigate = useNavigate()
    return (
        <>
            <MyButton onClick={()=> navigate(-1)} style={{marginTop: '20px'}}>Назад</MyButton>
            <h1>
                Тут должен быть контент {params.id} поста
            </h1>
            <h2>
                Внимание на маршрут
            </h2>
        </>
        
    )
}

export default OpenPost;