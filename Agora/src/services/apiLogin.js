import axios from "axios";

const END_POINT = "http://localhost/AgoraRVite/Agora/api/login-user.php"

export const getLogin =async(objeto) => {

    try {
        const response = await axios.post(END_POINT, objeto)
        return (response.data)
    } catch (error) {
        return ("error leyendo ApiRest " + error)
    }
}