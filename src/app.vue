<script setup>


import {ref} from "vue";
import {Developer} from "./greetings/domain/model/developer.entity.js";
import DeveloperCountShow from "./greetings/presentation/components/developer-count-show.vue";

const  firstName =ref('');
const lastName =ref('');
const developerCount = ref(0);
const hasRegistered = ref(false);


function updateRegisteredDeveloperInfo(developer) {

  firstName.value = developer.firstName;
  lastName.value = developer.lastName;
  hasRegistered.value = true;
  console.log('Developer registered', developer);
}

function resetRegisteredDeveloperInfo() {
  firstName.value = '';
  lastName.value = '';
  hasRegistered.value = false;
  console.log('Registered reset');


}


function updateDeveloperInfo(developer) {

  const dev= new Developer(developer.firstname, developer.lastname);
  if (dev.fullName !== 'Unknown') developer.Count.value++;
}
</script>

<template>

  <h1>Hello Vue Developer Application</h1>
    <developer-registration
     @developer-registration="updateRegisteredDeveloperInfo"
     @developer-deferred="resetRegisteredDeveloperInfo"
    />
    <developer-count-show : developer-count="developerCount"/>
</template>
