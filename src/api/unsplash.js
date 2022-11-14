import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
         "Client-ID -Q7HI8amrFKuTHKXEiIM2_IWtyR6ufTWaEjWtGAWvP0",
      }
});