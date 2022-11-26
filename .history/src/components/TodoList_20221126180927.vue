<template>
  <van-tabs v-model:active="active">
    <van-tab title="标签 1">内容 1</van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 4">内容 4</van-tab>
  </van-tabs>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Tab as vanTab, Tabs as vanTabs } from "vant";
import "vant/es/tab/style";

const active = ref(0);
</script>
