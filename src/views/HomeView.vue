<script setup>
import { computed } from 'vue'
import { getModuleStore } from '@shared/utility';

const monthlyStore = getModuleStore("monthly")
const yearlyStore = getModuleStore("yearly")


const sortByMonthly = computed(() => {
  return monthlyStore?.monthly?.sortBy ? JSON.stringify(monthlyStore?.monthly?.sortBy) : ""
});

const sortByYearly = computed(() => {
  return yearlyStore?.yearly?.sortBy ? JSON.stringify(yearlyStore?.yearly?.sortBy) : ""
});

console.log(monthlyStore, yearlyStore);
</script>

<template>
  <main>
    <v-card title="Monthly Sorting" :width="400" :text="sortByMonthly"></v-card>
    <br />
    <br />
    <v-card title="Yearly Sorting" :width="400" :text="sortByYearly"></v-card>
  </main>
</template>
