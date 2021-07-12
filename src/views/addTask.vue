<template>
<v-container>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog 
        
        transition="dialog-bottom-transition"
        max-width="500"
        :value="value"
        @click:outside="value=false"
        @keydown.esc="value=false"
        
      >
        <template >
          <v-card >
           
            <v-toolbar
              color="dark"
              dark
            >
            <v-row justify="center">
              <v-col cols="auto">
                Add a Task
              </v-col>
            </v-row>
            </v-toolbar>
            
            <v-card-actions class="justify-end">
              <v-text-field v-model="task"
              :rules="taskRules"
              :error="error"
              ></v-text-field>
              <v-btn
                text
                @click="submit"
              >ADD</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>

    
  </v-row>
  </v-container>
</template>
<script>
export default {
  emits:['taskadded'],
  data(){
    return{
      taskRules: [
      (v) => !!v || "Task Cannot be empty"
      
    ],
    error:false,
      value:true,
      task:""
    }
  },
  
  methods:{
    submit(){
     this.value=false
      
      if(this.task===''){
        this.error=true
        this.value=true
      }
      else
      this.$emit('taskadded',this.task)
    }
  },
  watch:{
    value(){
      
      if(this.value===false){
       
       this.$router.push(`/home/${this.$route.params.user}`)
      }
    }
  },
};
</script>

