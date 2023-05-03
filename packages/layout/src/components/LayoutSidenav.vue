<template>
  <n-layout-sider bordered show-trigger :collapsed="isCollapse" @collapse="collapse = true" @expand="collapse = false"
    collapse-mode="width" :collapsed-width="64" :width="272" :native-scrollbar="false">
    <n-menu :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions" v-model:value="selectedKey" />
  </n-layout-sider>
</template>
  
<script setup>
import { h, ref } from 'vue';
import { NIcon } from "naive-ui";
import {
  BookOutline as BookIcon,
  LogoSlack as SlackIcon,
  TrailSign as Base64Icon,
  Cog as CogIcon,
} from '@vicons/ionicons5';
import { computed } from '@vue/reactivity';

const isCollapse = ref(localStorage.getItem('mxa-layout-sidenav-collapsed') === 'true');
const selectedKey = ref(window.location.pathname);

const collapse = computed({
  get: (v) => v,
  set: (v) => {
    isCollapse.value = v
    localStorage.setItem('mxa-layout-sidenav-collapsed', `${v}`)
  }
})

function renderLink(href, label, icon) {
  return {
    label: () =>
      h(
        'a',
        { href: href },
        label
      ),
    selected: true,
    key: href,
    icon: () => h(NIcon, null, { default: () => h(icon) })
  }
}

const menuOptions = [
  {
    type: 'group',
    label: 'Hello!',
    key: 'information',
    children: [
      renderLink('/', 'Welcome', BookIcon),
      renderLink('/config', 'Config', CogIcon),
    ]
  },
  {
    type: 'group',
    label: 'Tools',
    key: 'tools',
    children: [
      renderLink('/slack', 'Slack Message', SlackIcon),
      renderLink('/base64', 'Base64', Base64Icon),
    ]
  }
]
</script>

<style lang="scss">
.n-menu-item-content,
.n-menu-item-group-title {
  transition: opacity .3s var(--n-bezier), background-color .3s var(--n-bezier), padding-left .3s var(--n-bezier), border-color .3s var(--n-bezier) !important;
}

.n-menu--collapsed {
  .n-menu-item-content {
    padding-left: 20px !important;
  }

  .n-menu-item-group-title {
    opacity: 0;
  }
}
</style>