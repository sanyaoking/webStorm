<!-- 展示模板 -->
<template>
  <div id="app">
    <i-button @click="show">Click me!</i-button>
    <Modal v-model="visible" title="Welcome">Welcome to iView</Modal>
  </div>
</template>

<script>
    // 导入组件

    export default {
      data: function () {
        return {visible: false}
      },
      methods: {
        show: function () {
          this.visible = true
        }
      }
    }
</script>
<!-- 样式代码 -->
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
