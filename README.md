# vuex

> vuex

## 启动以及打包

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


# 最简单的store

**安装 Vuex 之后，让我们来创建一个 store。创建过程直截了当——仅需要提供一个初始 state 对象和一些 mutation：**

> store.js

```js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        num: 0,
        name: '刘旭',
        age: 22
    },
    mutations: {
        numAdd(state) {
            state.num += 2
        },
        setNum(state, value) {
            state.num = value
        }
    },
    actions: {

    },
    modules: {

    }
})

```
> home.vue

```js
<template>
    <div class="box">
        <h1>这是home页</h1>
        <h3>这是一个计数器：{{count}}</h3>
        <button @click="countAdd">加</button>
        <button @click="countJian">减</button>

        <!-- vuex方式 -->

        <h2>vuex方式</h2>
        <h3>这是一个计数器：{{$store.state.num}}</h3>
        <button @click="addNum">加</button>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        countAdd:function(){
            this.count++
        },

        countJian:function(){
            if(this.count <= 0){
                return false
            }else{
                this.count--
            }
        },
        addNum:function(){
            this.$store.commit('numAdd')
        }
    },
}
</script>

```

**现在，你可以通过 $store.state.num 来获取状态对象中的num属性，以及通过 $store.commit 方法触发状态变更：**

```js
store.commit('numAdd')

console.log(store.state.num) // -> 2
```
---

### ==以下数据均来自上面的store.js==

## state

将用到的全局state对象放到组件的 computed （计算属性）中，v-model的内容将其分开来写（set和get）

```js
<template>
    <div class="state">
        <ul>
            <li>姓名：{{name}}</li>
            <li>年龄：{{age}}</li>
            <li>数字：{{num}}</li>
        </ul>
        <input type="text" v-model="num">
    </div>
</template>

<script>
export default {
    name:'state',
    computed: {
        name:function(){
            return this.$store.state.name
        },
        age:function(){
            return this.$store.state.age
        },
        num:{
            get:function(){
                return this.$store.state.num
            },
            set:function(val){
                this.$store.commit('setNum',val)
            }
        }
    },
}
</script>
```

## mapState (辅助函数)

首先要导入我们的 store

```js
import { mapState } from 'vuex'
```

**1. 第一种映射方式（数组）**

```js
<template>
    <div class="state">
        <ul>
            <li>姓名：{{name}}</li>
            <li>年龄：{{age}}</li>
            <li>数字：{{num}}</li>
        </ul>
        <input type="text" v-model="num">
        <input type="text" :value='num' @input="changeNum">
    </div>
</template>

<script>
export default {
    name:'state',
    computed: mapState(['age','name','num']),
    methods: {
        changeNum:function(e){
            return this.$store.commit('setNum',e.target.value)
        }
    },
}
</script>

```

**2. 第二种映射方式（对象）**

```js
<template>
    <div class="state">
        <ul>
            <li>姓名：{{name}}</li>
            <li>年龄：{{age}}</li>
            <li>数字：{{num}}</li>
            <li>greenMsg: {{greenMsg}}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name:'state',
    data() {
        return {
            green: '真帅,哈哈哈'
        }
    },
    
    // 第二种映射方式
    computed: mapState({
        name: 'name',
        // age: 'age'
        age: (state) => state.age, // 等同于上面 ⬆️
        num: "num",
        greenMsg: function(state) {
            return state.name + this.green
        }
    })
}
</script>
```

**3. 对象展开运算符**

```js

<template>
    <div class="state">
        <ul>
            <li>姓名：{{name}}</li>
            <li>年龄：{{age}}</li>
            <li>数字：{{num}}</li>
            <li>greenMsg: {{greenMsg}}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name:'state',
    data() {
        return {
            green: '真帅,哈哈哈'
        }
    },
    
   computed: {
        reverse: function(){
            return this.green.split('').reverse().join('')
        },
        ...mapState({
            name: 'name',
            age: (state) => state.age,
            num: "num",
            greenMsg: function(state) {
                return state.name + this.green
            }
        })
    },
}
</script>

```

* mapState 可以传数组，或者是对象，字符串...等，上面我们传的是数组 *


**点击[码云地址](https://gitee.com/L1999G0318X/vuex.git)查看完整代码**