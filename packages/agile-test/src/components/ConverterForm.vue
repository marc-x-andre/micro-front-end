<template>
  <n-form class="converter-form" ref="formRef" inline :label-width="80" :model="formValue" :rules="rules">
    <n-grid :span="24" :x-gap="24">
      <n-form-item-gi :span="12" label="Text" path="text">
        <n-input v-model:value="formValue.text" type="textarea" placeholder="This text will be translate to base64" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Base64" path="base64">
        <n-input v-model:value="formValue.base64" type="textarea"
          placeholder="VGhpcyB0ZXh0IHdpbGwgYmUgdHJhbnNsYXRlIHRvIGJhc2U2NA==" />
      </n-form-item-gi>
      <!-- 24 -->

      <n-gi :span="6"></n-gi>
      <n-form-item-gi :span="6" label="URL Encoded" path="urlEncoded">
        <n-switch v-model:value="formValue.urlEncoded" />
      </n-form-item-gi>
      <n-form-item-gi :span="6" label="" path="urlEncoded"></n-form-item-gi>
    </n-grid>
  </n-form>
</template>

<script setup>
import { ref } from "vue";

const textToBase64 = () => {
  const text = formValue.value.urlEncoded ? decodeURI(formValue.value.text) : formValue.value.text;
  formValue.value.base64 = btoa(text)
  formValue.value.lastTouch = 'text'
};

const base64ToText = () => {
  try {
    const translated = atob(formValue.value.base64);
    formValue.value.text = formValue.value.urlEncoded ? decodeURI(translated) : translated
    formValue.value.lastTouch = 'base64'
    return true
  } catch {
    return false
  }
};

const formRef = ref(null);
const formValue = ref({
  text: "",
  base64: "",
  urlEncoded: true,
  lastTouch: undefined
});
const rules = {
  text: {
    trigger: ["input"],
    validator: (rule, value) => {
      textToBase64()
      return value !== "";
    }
  },
  base64: {
    trigger: ["input"],
    validator: () => {
      return base64ToText()
    }
  },
  urlEncoded: {
    trigger: ["input"],
    validator: () => {
      formValue.value.lastTouch === 'text' ? textToBase64() : base64ToText()
    }
  }
}
</script>
