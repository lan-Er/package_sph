//引入mockjs
import Mock from 'mockjs';
//json格式数据不需要向外暴露，可直接引入
import banner from './banner.json';
import floor from './floor.json';

//两个参数:请求地址和请求数据
Mock.mock("/mock/banner",{code:200,data:banner});//模拟首页大的轮播图的数据
Mock.mock("/mock/floor",{code:200,data:floor});
