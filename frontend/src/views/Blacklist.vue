<script setup>
import { reactive } from 'vue';

import { blTableData, blTableHeader } from '@/utils/common.js'
import FilterSearchView from '@/components/common/FilterSearchView.vue'


const playerData = reactive({
    site: "",
    match: "",
    selection: "",
})


const handleViewPlayerMatchSelection = (item) => {
    playerData.site = item?.site || ""
    playerData.match = item?.match || ""
    playerData.selection = item?.selection || ""
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
                                            <th v-for="(item, idx) in blTableHeader" :key="'header' + item.value + idx">{{
                                                item.label }}</th>
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
                                                <button data-bs-toggle="modal"
                                                    data-bs-target="#viewPlayerMatchSelectionModal"
                                                    class="btn btn-outline-primary btn-sm" @click="() => {
                                                        handleViewPlayerMatchSelection(item)
                                                    }">
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
        <div class="modal fade" id="viewPlayerMatchSelectionModal" data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-md modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Player Match Selection</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="border rounded">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Match</th>
                                                <th>Selection</th>
                                                <th>Site</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{{ playerData?.match }}</td>
                                                <td>{{ playerData?.selection }}</td>
                                                <td>{{ playerData?.site }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
