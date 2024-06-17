import axios from "axios";

const END_POINT_GET = "https://randomuser.me/api/"

export const apiGetUsuarios = async () => {

    try {
        const response = await axios.get(END_POINT_GET)
        return (response.data)
    } catch (error) {
        return ("error leyendo ApiRest " + error)
    }
}


const END_POINT_SET = "http://localhost/Agora/api/create-user.php"

export const setUser   =async(objeto) => {

    try {
        const response = await axios.post(END_POINT_SET, objeto)
        return (response.data)
    } catch (error) {
        return ("error leyendo ApiRest " + error)
    }
}