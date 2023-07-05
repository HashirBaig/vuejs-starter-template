<script setup>
import { tableData, tableHeader } from "@/utils/common.js"
import FilterSearchView from "@/components/common/FilterSearchView.vue"
import AddToBlacklistModal from "../components/modals/AddToBlacklistModal.vue"
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
                      <th v-for="(item, idx) in tableHeader" :key="'header' + item.value + idx">
                        {{ item.label }}
                      </th>
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
    <AddToBlacklistModal id="addToBlacklistModal" />
  </div>
</template>
