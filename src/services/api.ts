import axios from "axios";

export const api = axios.create({
    baseURL: "https://notify-flame.vercel.app/",
    // baseURL: "http://localhost:3002/",
    // headers: {
    //     // Adicione aqui os cabeçalhos personalizados, se necessário
    //     "Content-Type": "application/json",
    //     // Outros cabeçalhos, se necessário
    //   },
})