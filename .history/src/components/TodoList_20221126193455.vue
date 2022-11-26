<template>
  <div>
    {{ todos }}
  </div>
  <div>
    {{ active }}
  </div>
  <van-tabs v-model:active="active" @change="handleChangeTab">
    <template v-for="item in tabList" :key="item.title">
      <van-tab :title="item.title" :name="item.name">
        <!-- 新增代办 -->
        <van-field
          v-model="newTodo"
          placeholder="请输入代办事项"
          right-icon="plus"
          @click-right-icon="handleAddTodo"
          @keyup.enter="handleAddTodo"
        />

        <!-- 代办列表 -->
        <template v-for="item in filteredTodos" :key="item.id">
          <van-swipe-cell>
            <van-cell :title="item.text">
              <template #right-icon>
                <van-checkbox v-model="item.isFinished" />
              </template>
            </van-cell>
            <template #right>
              <van-button
                type="danger"
                text="删除"
                @click="handleRemoveTodoById(item.id)"
              />
            </template>
          </van-swipe-cell>
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
  Checkbox as vanCheckbox,
  SwipeCell as vanSwipeCell,
  Button as vanButton,
  showConfirmDialog,
} from "vant";
import "vant/es/tab/style";
import "vant/es/field/style";
import "vant/es/cell/style";
import "vant/es/checkbox/style";
import "vant/es/swipe-cell/style";
import "vant/es/button/style";

import { useTodoStore } from "@/stores/todoList";
import { storeToRefs } from "pinia";

const todoStore = useTodoStore();

const { todos, filter, filteredTodos } = storeToRefs(todoStore);
const { addTodo, removeTodoById } = todoStore;

const active = ref("all");
const newTodo = ref("");

const tabList = [
  { name: "all", title: "全部" },
  { name: "unfinished", title: "未完成" },
  { name: "finished", title: "已完成" },
];

function handleChangeTab(name: "all" | "finished" | "unfinished") {
  filter.value = name;
}

function handleAddTodo() {
  addTodo(newTodo.value);
  newTodo.value = "";
}

function handleRemoveTodoById(id: number) {
  removeTodoById(id);
}
</script>
