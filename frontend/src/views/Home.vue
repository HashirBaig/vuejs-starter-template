<script setup>
import { ref } from "vue"
import { Field, Form } from "vee-validate"
import { tableData, tableHeader } from "@/utils/common.js"
import Spinner from "@/components/common/Spinner.vue"
import AddToBlacklistModal from "../components/modals/AddToBlacklistModal.vue"

const isLoading = ref(false)

const initSearch = values => {
  try {
    isLoading.value = true
    console.log("form-values: ", values)
  } catch (error) {
    isLoading.value = false
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="card rounded shadow-sm mb-5">
    <div class="w-100 px-4 py-3">
      <div class="row my-4">
        <Form @submit="initSearch" v-slot="{ errors }">
          <div class="col-xl-12">
            <div class="row">
              <div class="col-xl-12">
                <h5>Search Customer</h5>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-xl-8 my-1">
                <Field type="text" name="filterSearch" class="form-control form-control-sm" autocomplete="off" />
              </div>
              <div class="col-xl-2 my-1">
                <button type="submit" class="btn btn-dark btn-sm w-100">
                  <i class="fas fa-search mx-2"></i>
                  Search
                </button>
              </div>
              <div class="col-xl-2 my-1">
                <button
                  type="button"
                  class="btn btn-primary btn-sm w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#addToBlacklistModal"
                >
                  <i class="fas fa-plus mx-2"></i>
                  Add
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>

      <div class="row my-4">
        <div class="col-xl-12">
          <div class="border rounded px-3 py-4">
            <div>
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th v-for="(item, idx) in tableHeader" :key="'header' + item.value + idx">
                        {{ item.label }}
                      </th>
                    </tr>
                  </thead>
                  <tbody v-if="!isLoading">
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
            <div v-if="isLoading" class="text-center">
              <Spinner size="md" color="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add To Blacklist Modal -->
    <AddToBlacklistModal id="addToBlacklistModal" />
  </div>
</template>
