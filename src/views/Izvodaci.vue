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
              autocomplete="off"
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
      hover
      small
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(profil)="row">
        <!-- s ovim dodem do adrese   // row.item.profil  // ako cu nastaviti rutu /kategorije koristim to=""-->
        <b-button
          style="background-color:#2677a7; border-color: #2677a7"
          size="sm"
          :to="row.item.profil"
        >
          Prikaži detalje
        </b-button>
      </template>
    </b-table>

    <div v-if="show" class="text-center mt-2">
      <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>

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
      label-cols-md="6"
      label-cols-lg="11"
      label-align-sm="right"
      label-size="sm"
      class="mb-0 mr-1"
    >
      <b-form-select
        id="per-page-select"
        v-model="perPage"
        :options="pageOptions"
        size="sm"
      ></b-form-select>
    </b-form-group>
  </b-container>
</template>

<script>
import { db } from "@/firebase";

export default {
  data() {
    return {
      show: true,
      items: [],
      fields: [
        {
          key: "ime",
          label: "Ime Firme",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "zupanija",
          label: "Županija",
          sortable: false,
          class: "",
        },
        {
          key: "avgOcjena",
          label: "Ocjena",
          sortable: true,
          class: "text-center",
        },
        {
          key: "mjesto",
          label: "Mjesto",
          class: "text-center",
          sortable: false,
          filterByFormatted: true,
        },
        {
          key: "oib",
          label: "OIB",
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
    dohvatiFirme() {
      db.collection("firme")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();

            this.items.push({
              ime: data.ime,
              zupanija: data.zupanija,
              mjesto: data.mjesto,
              oib: data.oib,
              profil: data.profil,
              avgOcjena: (data.ukOcjena / data.count || 0).toFixed(1),
            });
          });
          this.totalRows = this.items.length;
          this.show = false;
        });
    },
    // aritmSredina() {
    //   let sum = {};
    //   for (let i = 0; i < this.komentari.length; i++) {
    //     var ele = this.komentari[i];
    //     if (!sum[ele.ime]) {
    //       sum[ele.ime] = {};
    //       sum[ele.ime]["sum"] = 0;
    //       sum[ele.ime]["count"] = 0;
    //     }
    //     sum[ele.ime]["sum"] += ele.ocjena;
    //     sum[ele.ime]["count"]++;
    //   }
    //   for (var ime in sum) {
    //     this.result.push({
    //       ime: ime,
    //       ocjena: (sum[ime]["sum"] / sum[ime]["count"]).toFixed(1),
    //     });
    //   }
    //   //spajanje polja od objekta za tablicu
    //   this.items = this.podaciProfila.map((item) => {
    //     const obj = this.result.find((o) => o.ime === item.ime);
    //     return { ...item, ...obj };
    //   });
    // },
  },
  computed: {
    sortOptions() {
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    //dohvacanje iz firebasea
    this.dohvatiFirme();
  },
};
</script>
