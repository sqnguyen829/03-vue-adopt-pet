<template>
    <div>
        <h1>{{ species }}</h1>
        <b-table striped hover :items="pets">
            <template #cell(name)="data">
                <a :href="`/pets/${species}/${data.index}`">{{ data.value }}</a>
            </template>
        </b-table>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  props: {
    species: String,
    pets: Array
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
