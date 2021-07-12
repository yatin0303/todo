<template>
  <v-container>
    <v-row justify="center" >
      <v-col sm="6" md="5">
        <v-card width="300px" height="450px" class="mx-auto mt-10 pa-5 " >
          <v-form ref="form1" v-model="valid" v-if="mode === 'signin'">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
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
              :disabled="!valid||isloading"
              color="success"
              class="mr-4"
              @click="submit"
              :loading="isloading"
            >
              Login
            </v-btn>
          </v-form>

          <v-form ref="form" v-model="valid" v-else>
            <v-text-field
              v-if="mode === 'signup'"
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
                  :error="error"
                  :error-messages="Emessage"
                  @click="{valid=true,Emessage=''}"
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
              :loading="isloading"
            >
              SignUP
            </v-btn>
          </v-form>
          <br />
          <v-layout justify-center>
            <a class="primary--text text-decoration-underline" @click="switchMode">
              {{ modeText }}
            </a></v-layout
          >
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar top app v-model="snackbar">{{text}}    <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template></v-snackbar>
  </v-container>

</template>
<script>
import { format, parseISO } from "date-fns";
export default {
  data: () => ({
    error:false,
    Emessage:'',
    isloading:false,
    snackbar:false,
    text:'',
    valid: true,
    show1: false,
    password: "",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
    nameRules: [
      (v) => !!v || "Name is required",
      (v) =>
        (v && v.length >= 2 && v.length <= 25) ||
        "Name must be more than 2 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    DobRules: [(v) => !!v || "DOB is required"],

    date: format(parseISO(new Date().toISOString()), "yyyy-MM-dd"),

    menu2: false,
    name: "",
    email: "",
    mode: "signup",
    modeText: "Already a User? SignIn",
  }),

  methods: {
    validate() {
      if (this.mode === "signup") {
        this.$refs.form.validate();
        if(this.ageCalc<5){
          this.error=true
          this.Emessage="minimum age to resgiter is 5"
          this.valid=false
          
        }
      } else this.$refs.form1.validate();
    },
    switchMode() {
      this.password = "";
      if (this.mode === "signup") {
        this.mode = "signin";
        this.modeText = "New User? SignUP";
      } else if (this.mode === "signin") {
        this.mode = "signup";
        this.modeText = "already a User? SignIn";
      }

      
    },
    async submit() {
      this.validate();
      
      let userData = {};
      if (this.valid === true) {
        this.isloading=true;
        if (this.mode === "signup") {
          userData = {
            name: this.name,
            email: this.email,
            age: this.ageCalc,
            DOB: this.date,
            password: this.password,
          };
          try{
          await this.$store.dispatch("signup", userData);
          this.$router.replace(`/home/${this.$store.getters.getuserid}`)
          }catch(error){
            this.snackbar=true
            this.text=error.message
            
          }
          this.isloading=false

        } else {
          this.isloading=true;
          try {
            await this.$store.dispatch("signin", {
              email: this.email,
              password: this.password,
            });
            this.$router.replace(`/home/${this.$store.getters.getuserid}`)
          } catch (error) {
            this.snackbar=true
            this.text=error.message
          } 
          this.isloading=false
        }
      }
    },
  },
  computed: {
    computedDateFormattedDatefns() {
      return this.date ? format(parseISO(this.date), "MMMM do yyyy") : "";
    },
    ageCalc() {
      const currentDate = new Date().getTime();
      const dob = new Date(this.date).getTime();
      const age = (currentDate - dob) / 31536000000;
      return Math.floor(age);
    },
  },

};
</script>
