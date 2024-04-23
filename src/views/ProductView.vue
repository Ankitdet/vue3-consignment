<!-- <template>
  <div class="container">
    <b-jumbotron header="Bootstrap-Vue" lead="Bootstrap v4 Components for Vue.js 2">
      <p>Now running on @vue/compat and Vue.js 3</p>
      <b-button variant="primary" @click="showModal"> Click me! </b-button>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  methods: {
    showModal() {
      this.$bvModal.msgBoxOk('Modal from @vue/compat');
    },
  },
};
</script>
<style></style>

 -->

<!-- eslint-disable vue/return-in-computed-property -->
<template>
  <div>
    <!-- Filter input -->
    <div class="form-group">
      <input type="text" class="form-control" v-model="filterKeyword" placeholder="Search..." />
    </div>

    <button class="btn btn-primary" @click="openAddProductModal">
      Add New Product
    </button>

    <!-- Data table -->
    <table class="table">
      <thead>
        <tr>
          <th @click="sortByColumn('id')">ID</th>
          <th @click="sortByColumn('createdAt')">Created At</th>
          <th @click="sortByColumn('updatedAt')">Updated At</th>
          <th @click="sortByColumn('isActive')">Active</th>
          <th @click="sortByColumn('isArchived')">Archived</th>
          <th @click="sortByColumn('productionNo')">Production No</th>
          <th @click="sortByColumn('sampleNo')">Sample No</th>
          <th @click="sortByColumn('finishing')">Finishing</th>
          <th @click="sortByColumn('surface')">Surface</th>
          <th @click="sortByColumn('face')">Face</th>
          <th @click="sortByColumn('size')">Size</th>
          <th @click="sortByColumn('folderId')">Folder ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredItems" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.createdAt }}</td>
          <td>{{ item.updatedAt }}</td>
          <td>{{ item.isActive }}</td>
          <td>{{ item.isArchived }}</td>
          <td>{{ item.productionNo }}</td>
          <td>{{ item.sampleNo }}</td>
          <td>{{ item.finishing }}</td>
          <td>{{ item.surface }}</td>
          <td>{{ item.face }}</td>
          <td>{{ item.size }}</td>
          <td>{{ item.folderId }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="prevPage">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
          <a class="page-link" href="#" @click.prevent="gotoPage(page)">{{
            page
          }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPage">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import apiClient from "@/http-common";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      items: [],
      sortBy: null,
      sortDesc: false,
      filterKeyword: "",
      pageSize: 5,
      currentPage: 1,
      isAddProductModalVisible: false,
      newProduct: {
        isActive: false,
        isArchived: false,
        productionNo: "",
        sampleNo: "",
        finishing: "",
        surface: "",
        face: "",
        size: "",
        folderId: "",
      },
    };
  },
  computed: {
    filteredItems() {
      let filtered = this.items;
      if (this.filterKeyword) {
        const keyword = this.filterKeyword.toLowerCase();
        filtered = filtered.filter((item) => {
          return Object.values(item).some((value) => {
            return (
              typeof value === "string" && value.toLowerCase().includes(keyword)
            );
          });
        });
      }
      return this.sortItems(filtered);
    },
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.pageSize);
    },
  },
  methods: {
    openAddProductModal() {
      // eslint-disable-next-line no-undef
      this.isAddProductModalVisible = true;
    },
    async addNewProduct() {
      // Simulate adding a new product via API call
      apiClient
        .post("/product", { ...this.newProduct })
        .then((response) => {
          // If successful, fetch updated data
          this.loadData();
        })
        .catch((error) => {
          console.error("Error adding new product:", error);
        });
    },
    async loadData() {
      try {
        const response = await apiClient.get("/product/all");
        this.items = response.data?.data.result;
      } catch (error) {
        console.error("Error loading data:", error);
      }
    },
    sortByColumn(column) {
      if (column === this.sortBy) {
        this.sortDesc = !this.sortDesc;
      } else {
        this.sortBy = column;
        this.sortDesc = false;
      }
    },
    sortItems(items) {
      if (!this.sortBy) {
        return items;
      }
      return items.slice().sort((a, b) => {
        const modifier = this.sortDesc ? -1 : 1;
        if (a[this.sortBy] < b[this.sortBy]) return -1 * modifier;
        if (a[this.sortBy] > b[this.sortBy]) return 1 * modifier;
        return 0;
      });
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    gotoPage(page) {
      this.currentPage = page;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
<style></style>