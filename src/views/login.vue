<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="4" md="5">
        <v-card width="300px" height="500px" class="mx-auto mt-10 pa-5">
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="name"
              :counter="25"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          max-width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :value="computedDateFormattedDatefns"
              clearable
              :rules="DobRules"
              label="Date Of Birth"
              readonly
              v-bind="attrs"
              v-on="on"
              @click:clear="date = null"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @change="menu2 = false"
          ></v-date-picker>
        </v-menu>
        <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            @click:append="show1 = !show1"
          ></v-text-field>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="submit"
            >
             
              Submit
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { format, parseISO } from 'date-fns'
  export default {
    data: () => ({
      valid: true,
      show1: false,
      password: '',
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 2 && v.length <= 25) || 'Name must be more than 2 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      DobRules:[
        v => !!v || 'DOB is required',
      ],

      date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
    
      menu2: false,
      name:'',
      email:'',

      
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      submit(){
        this.validate();
        console.log(this.valid);
        let userData={};
        if(this.valid===true){
          userData={
            name:this.name,
            email:this.email,
            age:this.ageCalc,
            DOB:this.date,
            password:this.password
          }
          this.$store.dispatch('signup',userData)
          console.log(userData);
        }
      }
    },
    computed: {
      computedDateFormattedDatefns () {
        return this.date ? format(parseISO(this.date), 'MMMM do yyyy') : ''
      },
       ageCalc(){
        const currentDate= new Date().getTime();
        const dob=new Date(this.date).getTime();
        const age=(currentDate-dob)/31536000000;
        return Math.floor(age);
      }
    },
    // watch:{
    //   valid(){
    //     console.log(this.valid);
    //   }
    // }
  }
</script>
