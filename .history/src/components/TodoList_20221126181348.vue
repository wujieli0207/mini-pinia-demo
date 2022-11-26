<template>
  <van-tab v-model:active="active">
    <template v-for="item in tabList" :key="item.title">
      <vant-tab :title="item.title" :name="item.name">{{ item.name }}</vant-tab>
    </template>
  </van-tab>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Tab as vanTab, Tabs as vanTabs } from "vant";

import "vant/es/tab/style";

const active = ref(0);

const tabList = [
  { title: "all", name: "全部" },
  { title: "finished", name: "未完成" },
  { title: "unfinished", name: "已完成" },
];
</script>
