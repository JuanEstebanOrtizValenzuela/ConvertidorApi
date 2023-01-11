<script lang="ts" src="../services/api.ts">
</script>

<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-lg-12 text-center m-6">
        <h1>Convertidor de monedas</h1>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-lg-12 text-center">
        <form @submit.prevent="cli">
          <div class="container my-3 p-4">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <label class="form-label">Moneda Origen</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="form.type_moneda_one"
                  required
                >
                  <option
                    :value="index"
                    v-for="(moneda, index) in name_moneda"
                    :key="moneda"
                  >
                    {{ moneda }} ({{ index }})
                  </option>
                </select>
              </div>
              <div class="col-lg-8 col-md-6 col-sm-12">
                <label class="form-label">Monto</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="0"
                  aria-label="Username"
                  v-model="form.moneda_one"
                  min="1"
                  pattern="^[0-9]+"
                  required
                />
              </div>
            </div>
            <div class="row my-3">
              <div class="col-lg-12 col-md-6 col-sm-12 d-grid gap-2">
                <button type="submit" class="btn btn-success btn-block">
                  Convertir
                </button>
              </div>
              <div
                id="formCambio"
                class="col-lg-12 col-md-6 col-sm-12 d-grid gap-2"
              >
                <input
                  type="text"
                  class="form-control"
                  v-model="form.cambio"
                  readonly
                />
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <label class="form-label">Moneda Objetivo</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="form.type_moneda_two"
                  required
                >
                  <option
                    :value="index"
                    v-for="(moneda, index) in name_moneda"
                    :key="moneda"
                  >
                    {{ moneda }} ({{ index }})
                  </option>
                </select>
              </div>
              <div class="col-lg-8 col-md-6 col-sm-12">
                <label class="form-label">Resultado Conversion</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="0"
                  aria-label="Username"
                  v-model="form.moneda_two"
                  min="0"
                  pattern="^[0-9]+"
                  readonly
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
form {
  margin: 0 auto;
  background: #ecf0f1;
  position: relative;
  width: 60%;
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
}

#formCambio {
  margin: 0 auto;
  padding: 16px 2px;
  width: 98.4%;
}
.form-control:focus {
  border-color: #18a383;
}
.form-select:focus {
  border-color: #18a383;
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  form {
    margin: auto;
    width: 90%;
  }
}

@media screen and (min-width: 412px) {
  form {
    margin: auto;
    width: 80%;
  }
}

@media screen and (max-width: 360px) {
  form {
    margin: auto;
    width: 100%;
  }
}

@media screen and (min-width: 280px) and (max-width: 635px) {
  form {
    margin: auto;
    width: 100%;
  }
}
</style>