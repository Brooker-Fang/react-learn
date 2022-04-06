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

## 组件设计原则
+ 要减少组件之间的耦合性（Coupling)，让组件的界面简单，这样才能让整体系统易于理解、易于维护。
  + 保持接口小，props 数量要少；
  + 根据数据边界来划分组件，充分利用组合（composition）
  + 把 state 往上层组件提取，让下层组件只需要实现为纯函数
+ 为了让开发者能够一眼认出回调函数类型的 props，这类 props 最好有一个统一的前缀，比如 on 或者 handle
+ 把 renderXXXX 重构成各自独立的 React 组件

+ 尽量每个组件都有自己专属的源代码文件；
+ 用解构赋值（destructuring assignment）的方法获取参数 props 的每个属性值；
+ 利用属性初始化（property initializer）来定义 state 和成员函数。

+ React 将内容、样式和动态功能聚集在一个模块中，是高聚合的表现；

## React重用组件逻辑的方式：
1 hooks
2 高阶组件
  + 高阶组件不能去修改作为参数的组件，高阶组件必须是一个纯函数，不应该有任何副作用。
  + 高阶组件返回的结果必须是一个新的 React 组件，这个新的组件的 JSX 部分肯定会包含作为参数的组件。
  + 高阶组件一般需要把传给自己的 props 转手传递给作为参数的组件。
3 render props的方式
```js
  <Login>
    {({userName}) => <h1>Hello {userName}</h1>}
  </Login>
```
## 判断使用state还是redux管理数据
+ 第一步，看这个状态是否会被多个 React 组件共享。
+ 第二步，看这个组件被 unmount 之后重新被 mount，之前的状态是否需要保留。

## Mobx 和 Redux 的比较

+ Mobx 和 Redux 的目标都是管理好应用状态，但是最根本的区别在于对数据的处理方式不同。

+ Redux 认为，数据的一致性很重要，为了保持数据的一致性，要求Store 中的数据尽量范式化，也就是减少一切不必要的冗余，为了限制对数据的修改，要求 Store 中数据是不可改的（Immutable），只能通过 action 触发 reducer 来更新 Store。

+ Mobx 也认为数据的一致性很重要，但是它认为解决问题的根本方法不是让数据范式化，而是不要给机会让数据变得不一致。所以，Mobx 鼓励数据干脆就“反范式化”，有冗余没问题，只要所有数据之间保持联动，改了一处，对应依赖这处的数据自动更新，那就不会发生数据不一致的问题。

+ 总结一下 Redux 和 Mobx 的区别，包括这些方面：

  + Redux 鼓励一个应用只用一个 Store，Mobx 鼓励使用多个 Store；
  + Redux 使用“拉”的方式使用数据，这一点和 React是一致的，但 Mobx 使用“推”的方式使用数据，和 RxJS 这样的工具走得更近；
  + Redux 鼓励数据范式化，减少冗余，Mobx 容许数据冗余，但同样能保持数据一致。
## 应该选用 Mobx 还是 Redux 呢？

问：你的应用是小而且简单，还是大而且复杂？

如果是前者，选择 Mobx；如果是后者，选择 Redux。

问：你想要快速开发应用，还是想要长期维护这个应用？

如果是前者，选择 Mobx；如果是后者，选择 Redux。
