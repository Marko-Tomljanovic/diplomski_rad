<template>
  <b-container>
    <!-- User Interface controls -->
    <b-row>
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
          </b-input-group>
        </b-form-group>
      </b-col>
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

      <template #cell(profil)="row">
        <!-- s ovim dodem do adrese   // row.item.profil  // -->
        <b-button size="sm" @click="openPage(row.item.profil)">
          Prikaži detalje
        </b-button>
      </template>
    </b-table>

    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only>
      <pre>{{ infoModal.content }}</pre>
    </b-modal>

    <b-col sm="8" md="4" class="my-4 mx-auto">
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
    <b-form-group
      label="Po stranici"
      label-for="per-page-select"
      label-cols-sm="6"
      label-cols-md="4"
      label-cols-lg="11"
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
    <b-button variant="outline-primary" to="/NoviIzvodac"
      >Dodaj izođača</b-button
    >
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
          profil: "/profil1",
        },
        {
          ime: "Niskogradnja Jurčak",
          nesto: false,
          svasta: 21,
          profil: "/profil2",
        },
        { ime: "Nexe d.o.o.", nesto: false, svasta: 9, profil: "/profil3" },
        {
          ime: "Termo-gradnja d.o.o.",
          nesto: false,
          svasta: 89,
          profil: "/profil4",
        },
        {
          ime: "Rajič gradnja d.o.o.",
          nesto: true,
          svasta: 38,
          profil: "/profil5",
        },
        { ime: "Kid d.o.o.", nesto: false, svasta: 27, profil: "/profil6" },
        { ime: "STRABAG d.o.o.", nesto: true, svasta: 40, profil: "/profil7" },
        {
          ime: "Hoto grupa d.o.o.",
          nesto: true,
          svasta: 87,
          profil: "/profil8",
        },
        {
          ime: "Teh gradnja d.o.o.",
          nesto: false,
          svasta: 26,
          profil: "/profil9",
        },
        { ime: "Timont d.o.o.", nesto: false, svasta: 22, profil: "/profil10" },
        { ime: "Manas d.o.o.", nesto: true, svasta: 38, profil: "/profil11" },
        {
          ime: "Viadukt d.o.o.",
          nesto: false,
          svasta: 29,
          profil: "/profil12",
        },
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
          class: "text-center",
          sortable: false,
          sortByFormatted: true,
          filterByFormatted: true,
        },
        { key: "profil", label: "Profil", class: "text-center" },
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
    openPage(adresa) {
      window.open(adresa);
      //console.log(adresa);
      //alert(adresa);
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
