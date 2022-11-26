<template>
  <van-tabs v-model:active="active">
    <template v-for="item in tabList" :key="item.title">
      <van-tab :title="item.title" :name="item.name">
        <!-- 新增代办 -->
        <div>
          <van-field
            v-model="newTodo"
            placeholder="请输入代办事项"
            right-icon="plus"
            @click-right-icon="handleAddTodo"
          />
        </div>

        <!-- 代办列表 -->
        <template v-for="item in todoStore.todos" :key="item.id">
          <van-cell :title="item.text">
            <template #right-icon>
              <van-radio-group>
                <van-radio
                  :name="item.isFinished"
                  @click="todoStore.toggleTodoFinished(item.id)"
                />
              </van-radio-group>
            </template>
          </van-cell>
        </template>
      </van-tab>
    </template>
  </van-tabs>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Tabs as vanTabs,
  Tab as vanTab,
  Field as vanField,
  Cell as vanCell,
  RadioGroup as vanRadioGroup,
  Radio as vanRadio,
} from "vant";
import "vant/es/tab/style";
import "vant/es/field/style";
import "vant/es/cell/style";
import "vant/es/radio/style";

import { useTodoStore } from "@/stores/todoList";

const todoStore = useTodoStore();

const active = ref("all");
const newTodo = ref("");

const tabList = [
  { name: "all", title: "全部" },
  { name: "finished", title: "未完成" },
  { name: "unfinished", title: "已完成" },
];

function handleAddTodo() {
  todoStore.addTodo(newTodo.value);
  newTodo.value = "";
}
</script>
