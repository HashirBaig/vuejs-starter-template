<script setup>
import { useStore } from 'vuex'
import RequiredFieldMark from '@/components/common/RequiredFieldMark.vue';
import ImageRef from '@/components/common/ImageRef.vue'
import * as yup from 'yup'
import { Field, Form } from 'vee-validate'

const schema = yup.object().shape({
  ga: yup.string().required("GA is required"),
})

const store = useStore()

const onSubmit = async ({ ga }) => {
  try {
    const data = {
      GaCode: ga,
      id: localStorage.id
    }
    await store.dispatch("ga", data)
  } catch (error) {
    console.log(error)
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
              <label class="fw-bold">GA
                <RequiredFieldMark />
              </label>
              <Field name="ga" type="text" class="form-control rounded-pill" />
              <span class="form-error">{{ errors.ga }}</span>
            </div>
            <div class="form-group">
              <button class="btn btn-dark mt-2 rounded-pill">Confirm</button>
            </div>
          </Form>
        </div>
      </div>
    </div>

    <ImageRef />
  </div>
</template>
