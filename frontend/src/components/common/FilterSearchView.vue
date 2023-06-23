<script setup>
import { onMounted, ref } from 'vue'
import { Field, Form } from 'vee-validate'
import { useRoute } from 'vue-router'
import { AllRoutesMap } from '@/router/routesConfig'


const route = useRoute()
const isBlacklistPage = ref(AllRoutesMap.blacklist === route?.path)


const handleFilterSearch = (values) => {
    console.log('form-values: ', values)
}
</script>

<template>
    <div class="row my-4">
        <Form @submit="handleFilterSearch" v-slot="{ errors }">
            <div class="col-xl-12">
                <div class="row">
                    <div class="col-xl-12">
                        <h5>Search Customer</h5>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-xl-8 my-1">
                        <Field type="text" name="filterSearch" class="form-control form-control-sm" />
                    </div>
                    <div class="col-xl-2 my-1">
                        <button type="submit" class="btn btn-dark btn-sm w-100">
                            <i class="fas fa-search mx-2"></i>
                            Search
                        </button>
                    </div>
                    <div v-if="!isBlacklistPage" class="col-xl-2 my-1">
                        <button type="button" class="btn btn-primary btn-sm w-100" data-bs-toggle="modal"
                            data-bs-target="#addToBlacklistModal">
                            <i class="fas fa-plus mx-2"></i>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </Form>
    </div>
</template>