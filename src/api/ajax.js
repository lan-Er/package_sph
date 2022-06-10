//axios二次封装
import axios from "axios";
//进度条
import nprogress from "nprogress";
import "nprogress/nprogress.css";
//引入store
import store from '@/store';

let requests = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

//设置请求拦截器
requests.interceptors.request.use((config) => {
  if(store.state.detail.uuid_token){
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  //携带token给服务器
  if(store.state.user.token){
    config.headers.token = store.state.user.token;
  }
  nprogress.start();
  return config;
});
//响应拦截器
requests.interceptors.response.use(
  (res) => {
    nprogress.done();
    return res.data;
  },
  (err) => {
    alert("服务器响应数据失败...");
  }
);

export default requests;
