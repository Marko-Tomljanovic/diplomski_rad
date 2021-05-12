<template>
  <b-container>
    <!-- User Interface controls -->
    <b-row>
      <b-col lg="6" class="my-1">
        <b-form-group
          label="Poredaj po"
          label-for="sort-by-select"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
          v-slot="{ ariaDescribedby }"
        >
          <b-input-group size="sm">
            <b-form-select
              id="sort-by-select"
              v-model="sortBy"
              :options="sortOptions"
              :aria-describedby="ariaDescribedby"
              class="w-75"
            >
              <template #first>
                <option value="">-- none --</option>
              </template>
            </b-form-select>

            <b-form-select
              v-model="sortDesc"
              :disabled="!sortBy"
              :aria-describedby="ariaDescribedby"
              size="sm"
              class="w-25"
            >
              <option :value="false">Ulazno</option>
              <option :value="true">Silazno</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          label="Pretraži"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Upisati pojam"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''"
                >Očisti</b-button
              >
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col sm="5" md="6" class="my-1">
        <b-form-group
          label="Per page"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      stacked="md"
      show-empty
      small
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(actions)="row">
        <b-button size="sm" @click="row.toggleDetails">
          Prikaži detalje
        </b-button>
        <b-button @click="opcija()" type="button" class="btn btn-primary">
          <i class="far fa-eye"></i>
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">
              {{ key }}: {{ value }}
            </li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <!-- Info modal -->
    <b-modal
      :id="infoModal.id"
      :title="infoModal.title"
      ok-only
      @hide="resetInfoModal"
    >
      <pre>{{ infoModal.content }}</pre>
    </b-modal>

    <b-col sm="7" md="6" class="my-4 mx-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        align="fill"
        size="sm"
        pills
        class="my-1"
      ></b-pagination>
    </b-col>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          ime: "Presoflex gradnja d.o.o.",
          nesto: true,
          svasta: 40,
          profil: "www.marko.hr",
        },
        {
          ime: "Niskogradnja Jurčak",
          nesto: false,
          svasta: 21,
          profil: "/janko1",
        },
        { ime: "Nexe d.o.o.", nesto: false, svasta: 9 },
        { ime: "Termo-gradnja d.o.o.", nesto: false, svasta: 89 },
        { ime: "Rajič gradnja d.o.o.", nesto: true, svasta: 38 },
        { ime: "Kid d.o.o.", nesto: false, svasta: 27 },
        { ime: "STRABAG d.o.o.", nesto: true, svasta: 40 },
        { ime: "Hoto grupa d.o.o.", nesto: true, svasta: 87 },
        { ime: "Teh gradnja d.o.o.", nesto: false, svasta: 26 },
        { ime: "Timont d.o.o.", nesto: false, svasta: 22 },
        { ime: "Manas d.o.o.", nesto: true, svasta: 38 },
        { ime: "Viadukt d.o.o.", nesto: false, svasta: 29 },
      ],
      fields: [
        {
          key: "ime",
          label: "Ime Firme",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "svasta",
          label: "Svašta",
          sortable: false,
          class: "text-center",
        },
        {
          key: "nesto",
          label: "Nešto",
          sortable: false,
          sortByFormatted: true,
          filterByFormatted: true,
        },
        { key: "actions", label: "Actions" },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 7,
      pageOptions: [7, 10, 15, { value: 100, text: "Prikaži sve" }],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
    };
  },
  methods: {
    opcija() {
      alert(this.items[0].profil);
    },
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
};
</script>
