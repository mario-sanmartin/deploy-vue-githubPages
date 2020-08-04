<template>
    <v-container>
        
        <img src="../assets/larry.jpg" >
        <h1>{{ msg }}</h1>
    </v-container>
</template>

<script>
export default {
    name: 'Madara',
      props: {
    msg: String
  }
}
</script>