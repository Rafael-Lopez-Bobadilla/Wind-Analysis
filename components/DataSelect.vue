<script setup lang="ts">
defineProps<{
  type: string
}>()
const selected = ref('Hourly')
</script>

<template>
  <div>
    <el-radio-group v-model="selected" size="large" @change="$emit('typeChange', selected)">
      <el-radio-button label="Hourly" />
      <el-radio-button label="Daily Average" />
      <el-radio-button label="Monthly Average" v-if="type === 'histogram'" />
    </el-radio-group>
  </div>
</template>