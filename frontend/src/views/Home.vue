<script setup>
import { tableData, tableHeader } from '@/utils/common.js'
import FilterSearchView from '@/components/common/FilterSearchView.vue'
import RequiredFieldMark from '@/components/common/RequiredFieldMark.vue'

import * as yup from 'yup'
import { Field, Form } from 'vee-validate'

const schema = yup.object().shape({
  customer_code: yup.string().required("Customer code is required"),
  description: yup.string(),
})

/* Close modals after submitting data */
const closeAddToBlacklistModal = () => {
  document.getElementById("close-add-to-blacklist-modal").click()
}

const handleAddToBlacklist = (values, actions) => {
  console.log('form-values: ', values)
  actions.resetForm()
  closeAddToBlacklistModal()
}

</script>

<template>
  <div class="border rounded shadow-sm mb-5">
    <div class="w-100 px-4 py-3">
      <FilterSearchView />

      <div class="row my-4">
        <div class="col-xl-12">
          <div class="border rounded px-3 py-4">
            <div>
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th v-for="(item, idx) in tableHeader" :key="'header' + item.value + idx">{{ item.label }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, idx) in tableData" :key="'customer-' + item.name + '-' + idx">
                      <td>{{ idx + 1 }}</td>
                      <td>{{ item?.customer_code || "-" }}</td>
                      <td>{{ item?.name || "-" }}</td>
                      <td>{{ item?.surname || "-" }}</td>
                      <td>{{ item?.email || "-" }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- pagination -->

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add To Blacklist Modal -->
    <div class="modal fade" id="addToBlacklistModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                    <label for="customer_code">Customer Code
                      <RequiredFieldMark />
                    </label>
                    <Field class="form-control form-control-sm" type="text" name="customer_code" />
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
              <button type="button" id="close-add-to-blacklist-modal" class="btn btn-danger"
                data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Add</button>
            </div>
          </Form>
        </div>
      </div>
    </div>

  </div>
</template>
