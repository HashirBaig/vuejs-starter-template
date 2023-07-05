<script setup>
import { reactive } from "vue"

import { blTableData, blTableHeader } from "@/utils/common.js"
import FilterSearchView from "@/components/common/FilterSearchView.vue"
import ViewPlayerSelectionModal from "@/components/modals/ViewPlayerSelectionModal.vue"

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
</script>

<template>
  <div class="card rounded shadow-sm mb-5">
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
                      <th v-for="(item, idx) in blTableHeader" :key="'header' + item.value + idx">
                        {{ item.label }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
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
