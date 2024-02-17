<script setup lang="ts">
const selected = ref('Hourly')
</script>

<template>
  <div>
    <el-radio-group v-model="selected" size="large" @change="$emit('typeChange', selected)">
      <el-radio-button label="Hourly" />
      <el-radio-button label="Daily" />
      <el-radio-button label="Monthly" />
    </el-radio-group>
  </div>
</template>