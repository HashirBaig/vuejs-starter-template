<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'
import * as yup from 'yup'
import { Field, Form } from 'vee-validate'
import RequiredFieldMark from '@/components/common/RequiredFieldMark.vue';
import ImageRef from '@/components/common/ImageRef.vue'
import Spinner from '@/components/common/Spinner.vue';

const schema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
})

const store = useStore()
const isLoading = ref(false)

const onSubmit = async ({ email, password }) => {
  try {
    isLoading.value = true
    const data = {
      UserName: email,
      password
    }
    await store.dispatch("login", data)
  } catch (error) {
    console.log(error)
    isLoading.value = false
  } finally {
    isLoading.value = false
  }
}

</script>

<template>
  <div class="min-vh-100">
    <div class="bg-image">
      <div class="sub-bg-image">
        <div class="form-container">
          <h3 class="fw-bolder">Login</h3>

          <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
            <div class="form-group">
              <label class="fw-bold">Email
                <RequiredFieldMark />
              </label>
              <Field name="email" id="email" type="text" class="form-control rounded-pill" />
              <span class="form-error">{{ errors.email }}</span>
            </div>
            <div class="form-group">
              <label class="fw-bold">Password
                <RequiredFieldMark />
              </label>
              <Field name="password" id="password" type="password" class="form-control rounded-pill" />
              <span class="form-error">{{ errors.password }}</span>
            </div>
            <div class="form-group">
              <button type="submit"
                class="btn btn-dark rounded-pill mt-2 d-flex align-items-center justify-content-center">
                <Spinner v-if="isLoading" size="sm" color="light" />
                <span v-if="!isLoading">Login</span>
              </button>
            </div>
          </Form>
        </div>
      </div>
      <ImageRef />
    </div>
  </div>
</template>
