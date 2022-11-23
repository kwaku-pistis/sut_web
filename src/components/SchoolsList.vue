<template>
  <div>
    <!-- Pistis -->
    <el-skeleton style="width: 100%" :loading="loading" animated>
      <template #template>
        <div style="padding: 14px">
          <el-skeleton-item variant="h3" style="width: 50%" />
          <div class="school_skeleton">
            <el-skeleton-item variant="text" style="margin-right: 16px" />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
          <div class="school_skeleton">
            <el-skeleton-item variant="text" style="margin-right: 16px" />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
      <template #default>
        <el-menu default-active="1" class="el-menu-vertical-demo">
          <el-sub-menu
            v-for="(school, index) in schoolRegions"
            :key="index"
            :index="toString(index++)"
          >
            <template v-slot:title>
              {{ school.district.region.name }}
            </template>
            <el-menu-item-group title="District">
              <el-sub-menu :index="toString(index)">
                <template v-slot:title>{{ school.district.name }}</template>
                <el-menu-item @click="setLocalStorage(school)">
                  » {{ school.name }}</el-menu-item
                >
              </el-sub-menu>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </template>
    </el-skeleton>
  </div>
</template>

<script>
import schoolsApi from '@/api/schools';

export default {
  name: 'SchoolsList',
  data() {
    return {
      loading: true,
      schoolRegions: [],
    };
  },
  created() {
    this.getSchools();
  },
  methods: {
    getSchools() {
      schoolsApi
        .getSchoolsList()
        .then(response => {
          this.schoolRegions = response;
          console.log('School List', this.schoolRegions)
          this.loading = false;
        })
        .catch(error => console.log(error));
    },
    setLocalStorage(school) {
      localStorage.setItem('selectedSchool', JSON.stringify(school));
      this.$router.replace({ name: 'School', params: { name: school.name } });
    },
    toString(num) {
      return num.toString();
    },
  },
};
</script>
