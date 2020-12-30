<template>
  <v-container>
    <Ticket class="pb-12" />
    <v-divider class="pt-12"></v-divider>
    <v-responsive :aspect-ratio="16 / 9">
      <v-timeline align-center :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          fill-dot
        >
          <v-card :color="item.color" dark class="text-center">
            <div>
              <h2 style="text-align: center;">Lorem Ipsum Dolor</h2>
            </div>
            <v-card-text class="pt-8 white text--primary">
              <p style="text-align: center;">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                accusamus id eaque eum sed soluta suscipit temporibus
                consequuntur. Sequi quas dignissimos voluptate voluptatum in
                quam! Quod quis ab, aspernatur perspiciatis delectus possimus
                accusamus temporibus deserunt atque voluptas? Dolore, incidunt.
                Praesentium molestias ipsum autem amet in iusto aut iste itaque
                blanditiis!.
              </p>
              <v-btn
                :color="item.color"
                class="mx-0"
                outlined
                style="text-align: center;"
              >
                Button
              </v-btn>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-responsive>
    <v-divider></v-divider>
    <Sales class="pt-12 pb-12"/>
  </v-container>
</template>

<script>
/* eslint-disable */
import Ticket from "./Ticket";
import Sales from "./Sales";

export default {
  components: {
    Ticket,
    Sales
  },
  data: () => ({
    items: [
      {
        color: "light-blue darken-4",
        icon: "mdi-star",
      },
      {
        color: "orange darken-2",
        icon: "mdi-book-variant",
      },
      {
        color: "light-blue darken-4",
        icon: "mdi-airballoon",
      },
      {
        color: "orange darken-2",
        icon: "mdi-email",
      },
    ],
  }),
};
</script>
