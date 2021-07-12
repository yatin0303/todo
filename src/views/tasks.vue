<template
  ><div>
    <v-container>
      <v-row justify="center">
        <v-col sm="8" md="6">
      <h2 class="text-h4 success--text pl-4">
        Tasks:&nbsp;
        <v-fade-transition leave-absolute>
          <span :key="`tasks-${tasks.length}`">
            {{ tasks.length }}
          </span>
        </v-fade-transition>
      </h2>

      <v-divider class="mt-4"></v-divider>

      <v-row class="my-1" align="center">
        <strong class="mx-4 info--text text--darken-2">
          Remaining: {{ remainingTasks }}
        </strong>

        <v-divider vertical></v-divider>

        <strong class="mx-4 success--text text--darken-2">
          Completed: {{ completedTasks }}
        </strong>

        <v-spacer></v-spacer>

        <v-progress-circular
          :value="progress"
          class="mr-2"
        ></v-progress-circular>
      </v-row>

      <v-divider class="mb-4"></v-divider>

      <v-card v-if="tasks.length > 0">
        <v-slide-y-transition class="py-0" group tag="v-list">
          <template v-for="(task, i) in tasks">
            <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

            <v-list-item :key="`${i}-${task.task}`">
              <v-list-item-action>
                <v-checkbox
                  :disabled="!accessible"
                  v-model="task.completed"
                  :color="(task.completed && 'grey') || 'primary'"
                  @change="completed(task.id,task.completed)"
                >
                  <template v-slot:label>
                    <div
                      :class="
                        (task.completed && 'grey--text') || 'primary--text'
                      "
                      class="ml-4"
                      v-text="task.task"
                    ></div>
                  </template>
                </v-checkbox>
              </v-list-item-action>

              <v-spacer></v-spacer>

              <v-scroll-x-transition>
                <v-icon v-if="task.completed" color="success">
                  mdi-check
                </v-icon>
              </v-scroll-x-transition>
            </v-list-item>
          </template>
        </v-slide-y-transition>
      </v-card>
      </v-col>
    </v-row>
    </v-container>
    <v-layout justify-center>
      <v-btn
        v-if="accessible"
        class="mx-auto"
        fab
        dark
        color="indigo"
        bottom
        fixed
        large
        router
        :to="currentRoute"
      >
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </v-layout>
    <v-main>
      <router-view @taskadded="addtask" v-if="accessible"></router-view>
    </v-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tasks: [],
      accessible:false
    };
  },

  created() {
    //  this.$store.dispatch('tasks/getTask',this.currentUser)
    //   this.tasks=this.$store.getters['tasks/getTasks'];
    this.getdata();
  
    const browsedUser=this.$route.params.user;
    const currentUser=this.$store.getters.getuserid;
    if(browsedUser===currentUser){
      this.accessible=true
    }
    else
    this.accessible=false

  },
  methods: {
    async addtask(addedTask) {
      await this.$store.dispatch("tasks/addTask", {
        user: this.currentUser,
        task: addedTask,
        completed: false,
        favourite: false,
      });
    },
    async getdata() {
      await this.$store.dispatch("tasks/getTask", this.currentUser);
      this.tasks = this.$store.getters["tasks/getTasks"];
     
    },
    completed(id, value) {
    
      this.$store.dispatch("tasks/Update", {
        user: this.currentUser,
        id: id,
        value: value,
      });
    },
  },
  computed: {
    currentRoute() {
      return `${this.$route.path}/addTask`;
    },
    currentUser() {
      return this.$route.params.user;
    },
    completedTasks() {
      return this.tasks.filter((task) => task.completed).length;
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100;
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks;
    },
  },
};
</script>
