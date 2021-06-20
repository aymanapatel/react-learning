export default interface IRoute {
    
    path: string,   // 
    name: string,   // 
    exact: boolean, // 
    component: any, // Find better solution than `any` 
    props?: any     // 
}