<template>
  <n-config-provider :theme-overrides="theme">
    <n-space vertical>
      <n-layout>
        <LayoutNavbar />
        <n-layout has-sider>
          <LayoutSidenav />
          <n-layout style="height: var(--page-content-height)">
            <n-layout-footer bordered>
              <div id="inner-content"></div>
            </n-layout-footer>
          </n-layout>
        </n-layout>
      </n-layout>
    </n-space>
  </n-config-provider>
</template>
  
<script setup>
import { onMounted } from 'vue';
import LayoutNavbar from './components/LayoutNavbar.vue';
import LayoutSidenav from './components/LayoutSidenav.vue';
import theme from './theme.json'

onMounted(() => {
  // DOM manipulation to introduce a MFE inside the layout
  const toMove = document.getElementById("hey-layout-move-me-in-you-please")
  const whereToMove = document.getElementById("inner-content")
  whereToMove.before(toMove);
})
</script>
