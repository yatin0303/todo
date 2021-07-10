<template><div >
<v-container>
  <v-row justify="center" v-for="task in tasks" :key="task.task" class="mb-n7">
    <v-col md="6" sm="6">
      <v-card flat class="mx-auto py-4 pl-4 pr-10" >
        <v-row justify="space-between" align="center">
          <v-col cols="1">
        <v-simple-checkbox
        v-model="task.completed"
        color="success"
        :ripple="false"
        ></v-simple-checkbox>
        </v-col>
        <v-col align-self="center" class="font-weight-light ">
        {{task.task}}
        </v-col>
        <v-col cols="1">
          <v-icon>favorite_border</v-icon>
        </v-col>
        </v-row>
      </v-card>
      <v-divider ></v-divider>
    </v-col>
  </v-row>
</v-container>
<v-layout justify-center>
      <v-btn class="mx-auto" fab dark color="indigo" bottom fixed large router :to="currentRoute">
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </v-layout>
    <v-main>
      <router-view @taskadded="addtask"></router-view>
    </v-main>
</div>
</template>
<script>
export default {
  data(){
    return{
      tasks:[
        {task:'driver license appointment',completed:false,favourite:false},
        {task:'ear doctor',completed:false,favourite:false},
        {task:'exercise',completed:false,favourite:false},
        {task:'sfdsdfsdf',completed:false,favourite:false},
        {task:'ear docdfsfstor',completed:false,favourite:false},
        {task:'exercsdfsdfise',completed:false,favourite:false},
       
      ]
    }
  },
  created(){
    console.log(this.currentRoute);
  },
  methods:{
    addtask(task){
      this.tasks.push({
        task:task,completed:false,favourite:false
      })
    }
  }
  ,
  computed:{
    currentRoute(){
      
      return `${this.$route.path}/addTask`;
    }
  }
};
</script>
