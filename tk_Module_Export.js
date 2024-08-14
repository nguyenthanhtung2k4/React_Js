export var TYPE_LOG='log'
export var TYPE_WAR='warn'
export var TYPE_ERROR='error'
// function logger(log , type){
//      console[type](log,);
// }
// export default logger;
function sum(a,b,type){
     console[type](a+b);
}
export default sum;