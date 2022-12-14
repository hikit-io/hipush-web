import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
import {
    ElButton, ElCard,
    ElCol, ElContainer, ElFooter, ElHeader, ElImage, ElInput,
    ElMain,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup, ElOption,
    ElRow, ElSelect, ElSpace,
    ElSubMenu,
    ElTabPane,
    ElTabs
} from 'element-plus'
import router from "./router";

createApp(App)
    .use(ElButton)
    .use(ElRow)
    .use(ElCol)
    .use(ElTabs)
    .use(ElTabPane)
    .use(ElMenu)
    .use(ElMenuItem)
    .use(ElMenuItemGroup)
    .use(ElSubMenu)
    .use(ElMain)
    .use(ElContainer)
    .use(ElHeader)
    .use(ElFooter)
    .use(router)
    .use(ElInput)
    .use(ElSelect)
    .use(ElOption)
    .use(ElCard)
    .use(ElSpace)
    .use(ElImage)
    .mount('#app')
