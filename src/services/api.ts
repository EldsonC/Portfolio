import axios from "axios";

export const api = axios.create({
    baseURL: "https://sendsms-rho.vercel.app/",
    headers: {
        // Adicione aqui os cabeçalhos personalizados, se necessário
        "Content-Type": "application/json",
        // Outros cabeçalhos, se necessário
      },
})