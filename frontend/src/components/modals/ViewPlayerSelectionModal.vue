<script setup>
const { id, match, selection, site } = defineProps({
  id: String,
  match: String,
  selection: String,
  site: String,
})
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
                      <td>{{ match || "-" }}</td>
                      <td>{{ selection || "-" }}</td>
                      <td>{{ site || "-" }}</td>
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
</template>
