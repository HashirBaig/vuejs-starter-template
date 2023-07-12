<script setup>
import { reactive, ref } from "vue"
import { Field, Form } from "vee-validate"
import { blTableData, blTableHeader } from "@/utils/common.js"
import ViewPlayerSelectionModal from "@/components/modals/ViewPlayerSelectionModal.vue"
import Spinner from "@/components/common/Spinner.vue"

const isLoading = ref(false)
const playerData = reactive({
  site: "",
  match: "",
  selection: "",
})

const handleViewPlayerMatchSelection = item => {
  playerData.site = item?.site || ""
  playerData.match = item?.match || ""
  playerData.selection = item?.selection || ""
}

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
                <button type="submit" class="btn btn-dark btn-sm w-100" :disabled="isLoading">
                  <i class="fas fa-search mx-2"></i>
                  Search
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
                      <th v-for="(item, idx) in blTableHeader" :key="'header' + item.value + idx">
                        {{ item.label }}
                      </th>
                    </tr>
                  </thead>
                  <tbody v-if="!isLoading">
                    <tr v-for="(item, idx) in blTableData" :key="'customer-' + item.name + '-' + idx">
                      <td>{{ idx + 1 }}</td>
                      <td>{{ item?.site || "-" }}</td>
                      <td>{{ item?.name || "-" }}</td>
                      <td>{{ item?.surname || "-" }}</td>
                      <td>{{ item?.last_bet || "-" }}</td>
                      <td>{{ "-" }}</td>
                      <td>
                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#viewPlayerMatchSelectionModal"
                          class="btn btn-outline-primary btn-sm"
                          @click="
                            () => {
                              handleViewPlayerMatchSelection(item)
                            }
                          "
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </td>
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

    <!-- View Player Match Selection Modal -->
    <ViewPlayerSelectionModal
      id="viewPlayerMatchSelectionModal"
      :selection="playerData.selection"
      :match="playerData.match"
      :site="playerData.site"
    />
  </div>
</template>
