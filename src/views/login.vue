<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="4" md="5">
        <v-card width="300px" height="500px" class="mx-auto mt-10 pa-5">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="user.name"
              :counter="25"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="user.email"
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
              label="Formatted with datefns"
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
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
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
  export default {
    data: () => ({
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 2 && v.length <= 25) || 'Name must be more than 2 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      user:{
        name:'',
        email:'',
        
      }
      
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
        console.log(this.user);
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
