<template>
  <div class="home">
    <h1>Adopt a pet</h1>
    <button @click="togglePetForm" class="btn btn-primary">Add new pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="petForm">
      <b-form-group id="input-group-2" label="Pet Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Aga:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      petForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.petForm = !this.petForm
    },
    handleSubmit () {
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age,
          species
        }
      }
      this.addPet(payload)
    }
  }
}
</script>
