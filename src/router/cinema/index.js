export default{
    path:'/cinema',
    component: () => import('@/views/Cinema'),  //绝对路径
    // children:{
    //     path: '/ciList',
    //     component: () => import('@/components/CiList')
    // }
}