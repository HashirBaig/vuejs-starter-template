<script setup>
import { ref } from "vue"
import * as yup from "yup"
import { Field, Form } from "vee-validate"

import RequiredFieldMark from "@/components/common/RequiredFieldMark.vue"
import Spinner from "@/components/common/Spinner.vue"

const schema = yup.object().shape({
  customer_code: yup.string().required("Customer code is required"),
  description: yup.string(),
})

const { id } = defineProps({
  id: String,
})
const isLoading = ref(false)

/* Close modals after submitting data */
const closeAddToBlacklistModal = () => {
  document.getElementById("close-add-to-blacklist-modal").click()
}

const handleAddToBlacklist = async (values, actions) => {
  try {
    isLoading.value = true
    console.log("form-values: ", values)
    actions.resetForm()
    closeAddToBlacklistModal()
  } catch (error) {
    isLoading.value = false
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div
    class="modal fade"
    :id="id"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-md modal-dialog-centered">
      <div class="modal-content">
        <Form @submit="handleAddToBlacklist" :validation-schema="schema" v-slot="{ errors }">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Add To Blacklist</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-xl-12">
                <div class="form-group">
                  <label for="customer_code"
                    >Customer Code
                    <RequiredFieldMark />
                  </label>
                  <Field class="form-control form-control-sm" type="text" name="customer_code" autocomplete="off" />
                  <span class="form-error">{{ errors.customer_code }}</span>
                </div>
                <div class="form-group">
                  <label for="description">Description</label>
                  <Field class="form-control" as="textarea" type="text" name="description" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" id="close-add-to-blacklist-modal" class="btn btn-danger" data-bs-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-primary" :disabled="isLoading">
              <Spinner v-if="isLoading" size="sm" color="light" />
              <span v-if="!isLoading">Add</span>
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
