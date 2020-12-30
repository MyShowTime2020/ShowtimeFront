<template>
  <v-container>
    <v-row no-gutters>
      <v-col :cols="12">
        <v-card-text class="" tile outlined>
          <v-card-title style="text-align: center" class="subheading"
            ><strong>Last Minute Spectacles</strong></v-card-title
          >
          <div class="row">
            <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
              <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 16 : 2">
                  <v-img
                    class="white--text align-end"
                    height="500px"
                    src="https://i.pinimg.com/originals/0a/28/b9/0a28b928cfc91f1b3f5b72fc888db90d.jpg"
                  >
                    <v-card-title>Lorem, ipsum. </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 60% + Extra 10%</div>
                    <div>Baggit, Zara, Fossil</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn
                      href="/shop"
                      class="ma-2"
                      outlined
                      color="light-blue darken-4"
                    >
                      RESERVATION
                    </v-btn>
                  </div>
                </v-card>
              </v-hover>
            </div>
            <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
              <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 16 : 2">
                  <v-img
                    class="white--text align-end"
                    height="500px"
                    src="https://i.pinimg.com/originals/92/4e/62/924e620e663463f517c75c7486072856.jpg"
                  >
                    <v-card-title>T-Lorem, ipsum. </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 50%</div>
                    <div>Zara, Selected, Celio</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn href="/shop" class="ma-2" outlined color="orange">
                      RESERVATION
                    </v-btn>
                  </div>
                </v-card>
              </v-hover>
            </div>
            <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
              <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 16 : 2">
                  <v-img
                    class="white--text align-end"
                    height="500px"
                    src="https://www.toulouseblog.fr/wp-content/uploads/2019/02/disneysurglace2020.jpg"
                  >
                    <v-card-title>Lorem, ipsum. </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 60% + Extra 10%</div>
                    <div>Jack & Jones, Levis</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn
                      href="/shop"
                      class="ma-2"
                      outlined
                      color="light-blue darken-4"
                    >
                      RESERVATION
                    </v-btn>
                  </div>
                </v-card>
              </v-hover>
            </div>
            <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
              <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 16 : 2">
                  <v-img
                    class="white--text align-end"
                    height="500px"
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rock-n-roll-music-concert-poster-template-design-35c9265daf0bca4b66f04e4baba70a50_screen.jpg?ts=1561425163"
                  >
                    <v-card-title>Lorem, ipsum. </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 60% + Extra 10%</div>
                    <div>Nike, Adidas, Puma</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn href="/shop" class="ma-2" outlined color="orange">
                      RESERVATION
                    </v-btn>
                  </div>
                </v-card>
              </v-hover>
            </div>
          </div>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>