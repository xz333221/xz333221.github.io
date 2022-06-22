function my_compose (...fn_arr) {
  if(!fn_arr.length) return arg => arg
  if(fn_arr.length === 1) return fn_arr[0]
  return fn_arr.reduce((fn1,fn2) => (...args) => fn1(fn2(...args)))
}
