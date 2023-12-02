import axios from "axios";


const instance = axios.create({
    baseURL: 'https://new-hotel-server.vercel.app',
});

const useAxios = () => {
    return instance;
        
};

export default useAxios;