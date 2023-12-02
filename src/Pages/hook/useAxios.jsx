import axios from "axios";


const instance = axios.create({
    baseURL: 'https://b8a11-server-side-jhunkar-main.vercel.app',
});

const useAxios = () => {
    return instance;
        
};

export default useAxios;