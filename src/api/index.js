import ajax from "./ajax";

/* 定义发请求的方法 */
export const getGoods = ()=>ajax({
  url:'/peachhome'
})

/* 定义发更多品牌的方法 */
export const getbrands = ()=>ajax({
  url:'/brands'
})
