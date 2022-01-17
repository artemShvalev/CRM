<template>
  <div class="text-center mt-10">
    <v-progress-linear
      indeterminate
      absolute
      color="yellow darken-2"
    ></v-progress-linear>
    <br />
    <v-progress-linear indeterminate color="green">
    </v-progress-linear>
    <br />
    <v-progress-linear
      indeterminate
      color="teal"
      :reverse="true"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      indeterminate
      color="cyan"
      :reverse="true"
    ></v-progress-linear>

      <v-progress-circular
      :size="70"
      :width="7"
      rotate="10"
      :color="colors"
      indeterminate
      />

    <v-progress-linear
      indeterminate
      absolute
      color="yellow darken-2"
    ></v-progress-linear>
    <br />
    <v-progress-linear indeterminate color="green"></v-progress-linear>
    <br />
    <v-progress-linear
      indeterminate
      color="teal"
      :reverse="true"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      indeterminate
      color="cyan"
      :reverse="true"
    ></v-progress-linear>
  </div>
</template>

<script>
export default {
    computed:{
      colors(){
        const colors = ['#3949AB','#26A69A','#FFA000','#F4511E']
        return colors[Math.floor(Math.random() * 3)]
      }
    }
};
</script>
