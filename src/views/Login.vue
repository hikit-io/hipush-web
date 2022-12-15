<script lang="ts" setup>
import {reactive} from "vue";
import {useRouter} from "vue-router";

enum EndpointType {
  Https = 'https://',
  Http = 'http://'
}

const form = reactive({
  scheme: EndpointType.Https,
  endpoint: '',
  username: '',
  password: ''
})

const {push} = useRouter()

const bodyStyle = {
  textAlign: 'center',
  padding: 0,
}

const onLogin = () => {
  push({path: '/application'})
}

</script>

<template>
  <div class="container">
    <el-card class="card" :body-style="bodyStyle">
      <el-space :direction="'vertical'" :fill="true">
        <h1>Hi Push</h1>
        <el-input :placeholder="'Endpoint'" v-model="form.endpoint">
          <template #prepend>
            <el-select style="width: 90px;" v-model="form.scheme" :default-first-option="true">
              <el-option v-for="item in EndpointType" :value="item">
                {{ item }}
              </el-option>
            </el-select>
          </template>
        </el-input>
        <el-input :placeholder="'Username'" v-model="form.username"/>
        <el-input :placeholder="'Password'" v-model="form.password" :show-password="true"/>
        <el-button type="primary" @click="onLogin">Login</el-button>
      </el-space>
    </el-card>
  </div>
</template>

<style lang="less" scoped>
.container {
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  width: fit-content;
}

</style>