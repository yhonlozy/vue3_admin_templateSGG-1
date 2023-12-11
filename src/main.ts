import { createApp } from 'vue'
import App from '@/App.vue'

//引用ElementPlus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
//配置element-plus 国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

//获取应用对象实例
const app = createApp(App)
//安装ElementPlus插件
app.use(ElementPlus, {
  locale: zhCn, //配置element-plus 国际化
})

//将应用挂载在#app节点上
app.mount('#app')
