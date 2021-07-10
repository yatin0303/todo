<template>
<v-container>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
        :value="value"
      >
        <template >
          <v-card >
           
            <v-toolbar
              color="primary"
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
  emits:[],
  data(){
    return{
      value:true,
      task:""
    }
  },
  methods:{
    submit(){
     this.value=false
      console.log(this.value);
      this.$emit('taskadded',this.task)
    }
  },
  watch:{
    value(){
      console.log(this.value);
      if(this.value===false){
       console.log(this.$route.params);
       this.$router.push(`/home/${this.$route.params.user}`)
      }
    }
  }
};
</script>
