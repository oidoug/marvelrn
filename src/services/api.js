import axios from 'axios';
import md5 from 'md5';


// Keys, should not be exposed here, but will keep to make testing the app easier.
const private_key = "ae10462edfcb14ca930ed05aac576691c0fd8cb8";
const apikey = "8f8b07194294183b66ee155695fc00f1";

// Starting API instance.
const api = axios.create({
  baseURL: 'https://gateway.marvel.com',
})

// Request formating: For each new request new auth params are created based on a Timestamp.
api.interceptors.request.use((config) => {
  const ts = Date.now();
  const hash = md5(ts+private_key+apikey);
  config.params = {
    ...config.params,
    apikey,
    hash,
    ts,
  };
  return config;
});


export default api;