# ✉️Message-component 全局提示组件

难点在于如何在 api 的方式来动态添加这个组件

—— 通过 forwardRef + context 转发来实现

⚠️注意：

需要直接修改 ref.current，而不是用 useImperativeHandle 来修改

**useImperative 的好处是可以在依赖数组改变的时候重新执行回调函数来修改 ref，但坏处是它不是同步修改 ref 的，有的时候不太合适**