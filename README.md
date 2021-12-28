## 总结

### useMemo
useMemo(() => {
  ...
  return val
}, [])
### useCallback 
useCallback(() => {
  ...
  return () => {}
}, [])
useCallback 可以记住函数，避免函数重复生成，这样函数在传递给子组件时，可以避免子组件重复渲染，提高性能。
useCallback 是要和 shouldComponentUpdate/React.memo 配套使用的

### useCallback 和 useMemo区别
useCallback是缓存函数
useMemo是缓存值
### useEffect
+ useEffect(() => {})   => 只传入第一个参数，每次render都回重新执行，相当于 componentDidMount, componentDidUpdate
+ useEffect(() => {}, []) => 第二个参数传入空数组，只会执行一次，则相当于 componentDidMount
+ useEffect(() => () => {}) => 返回返回一个函数，返回的函数 会在下一个effect之前 调用，一般用来清除 useEffect里的副作用，如清除定时器、dom缓存，相当于componentWillUnMount
+ useEffect 延迟调用会存在闭包问题,使用 setTimeout、setInterval、Promise.then等
  + 在有延迟调用场景时，可以通过 ref 来解决闭包问题
## 其他
https://zhuanlan.zhihu.com/p/450513902
+ 不是所有的依赖都必须放到依赖数组中
  + 不要使用eslint-plugin-react-hooks插件，或者可以选择性忽略该插件的警告。
  + 只有当变量变化时，需要触发 useEffect 函数执行 才把依赖变量放到依赖数组中
  + 在有延迟调用场景时，可以通过 ref 来解决闭包问题
+ 尽量不要用 useCallback
  + useCallback 大部分场景没有提升性能
  + useCallback 让代码可读性变差
+ useMemo 建议适当使用
+ useState 的正确使用
  + 能用其他状态计算出来就不用单独声明状态
  + 保证数据源唯一
    + 不要既存在 redux 中，又在组件中定义了一个 state 存储。
    + 不要既存在父级组件中，又在当前组件中定义了一个 state 存储。
    + 不要既存在 url query 中，又在组件中定义了一个 state 存储。
  + 多个useState 适当合并为object

