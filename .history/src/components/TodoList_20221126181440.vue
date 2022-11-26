<template>
  <van-tabs v-model:active="active">
    <template v-for="item in tabList" :key="item.title">
      <van-tab :title="item.title" :name="item.name">{{ item.name }}</van-tab>
    </template>
  </van-tabs>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Tabs as vanTabs, Tab as vanTab } from "vant";

import "vant/es/tab/style";

const active = ref(0);

const tabList = [
  { name: "all", title: "全部" },
  { name: "finished", title: "未完成" },
  { name: "unfinished", title: "已完成" },
];
</script>
