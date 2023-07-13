<script setup>
import { ref } from "vue"
import { useStore } from "vuex"
import RequiredFieldMark from "@/components/common/RequiredFieldMark.vue"
import ImageRef from "@/components/common/ImageRef.vue"
import Spinner from "@/components/common/Spinner.vue"
import * as yup from "yup"
import { Field, Form } from "vee-validate"

const schema = yup.object().shape({
  ga: yup.string().required("GA is required"),
})

const store = useStore()
const isLoading = ref(false)

const onSubmit = async ({ ga }) => {
  try {
    isLoading.value = true
    const data = {
      GaCode: ga,
      id: localStorage.id,
    }
    await store.dispatch("ga", data)
  } catch (error) {
    isLoading.value = false
    console.log(error)
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
          <h3 class="fw-bolder">GA</h3>

          <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
            <div class="form-group">
              <label class="form-label fw-bold"
                >GA
                <RequiredFieldMark />
              </label>
              <Field name="ga" type="text" class="form-control form-input rounded-pill" autocomplete="off" />
              <span class="form-error">{{ errors.ga }}</span>
            </div>
            <div class="form-group">
              <button type="submit" :disabled="isLoading" class="btn btn-dark mt-2 rounded-pill">
                <Spinner v-if="isLoading" size="sm" color="light" />
                <span v-if="!isLoading">Confirm</span>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>

    <ImageRef />
  </div>
</template>
