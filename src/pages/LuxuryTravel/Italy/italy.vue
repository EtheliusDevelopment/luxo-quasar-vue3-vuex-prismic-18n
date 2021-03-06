<template>
  <q-page>
    <PreLoader />

    <div class="header-block">
      <q-img
        class="img1"
        img-class="img1-luxury"
        src="~assets/umbria_luxo.jpg"
        :ratio="16 / 9"
        spinner-color="primary"
        spinner-size="82px"
        height="600px"
      >
        <div class="figcaption">
          <h6 class="text-white">LUXURY TRAVEL DESIGNERS</h6>
          <q-separator color="white" inset />
          <h1 class="text-white text-center">PAUL &amp; ANDREA</h1>
        </div>
      </q-img>

      <div class="breadcrumbs">
        <q-breadcrumbs
          separator="---"
          class="text-orange"
          active-color="primary"
        >
          <q-breadcrumbs-el icon="home" />
          <q-breadcrumbs-el label="Components" icon="widgets" to="/" />
          <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
        </q-breadcrumbs>
      </div>
    </div>

    <div class="first-block">
      <div class="sub-section-first">
        <div class="first-component component-box">
          <q-img
            class="img-component"
            src="~assets/calendar.svg"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
            height="6vh"
            width="3vw"
            style="
              filter: invert(83%) sepia(9%) saturate(836%) hue-rotate(0deg)
                brightness(94%) contrast(93%);
            "
          />

          <h4 class="title-component text-primary">WHEN TO GO</h4>
          <p class="p-component">
            {{ responseObj.from }} - {{ responseObj.to }}
          </p>
        </div>

        <div class="second-component component-box">
          <q-img
            class="img-component"
            src="~assets/price.svg"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
            width="3.2vw"
            height="6vh"
            style="
              filter: invert(83%) sepia(9%) saturate(836%) hue-rotate(0deg)
                brightness(94%) contrast(93%);
            "
          />

          <h4 class="title-component text-primary">PRICE</h4>
          <p class="p-component">{{ responseObj.price }} € PP</p>
        </div>

        <div class="third-component component-box">
          <q-img
            class="img-component"
            src="~assets/time.svg"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
            height="6vh"
            width="3vw"
            style="
              filter: invert(83%) sepia(9%) saturate(836%) hue-rotate(0deg)
                brightness(94%) contrast(93%);
            "
          />

          <h4 class="title-component text-primary">IDEAL LENGTH</h4>
          <p class="p-component">{{ responseObj.ideal_length }}</p>
        </div>

        <div class="fourth-component component-box">
          <button class="general-btn-1" style="padding: 4% 4%">
            DOWNLOAD JOURNEY DETAIL
          </button>
        </div>
      </div>
    </div>

    <div class="second-block-carousel-luxury">
      <CarouselLuxurySingle />
    </div>

    <div class="third-block">
      <div class="sub-section-first-third">
        <div class="header-component flex flex-center">
          <p
            :class="active"
            class="span-header-component p-header-component"
            @click="clickMenu"
            style="cursor: pointer; margin-right: 5%"
          >
            At A Glance
          </p>
          <p
            class="p-header-component text-center"
            :class="activeItin"
            @click="clickMenuItin"
            style="cursor: pointer"
          >
            Itinerary
          </p>
        </div>

        <div class="body-component">
          <div class="at-glance-exc" v-if="atglance">
            <ul>
              <li v-for="(text, index) in bulletPoints" :key="index">
                {{ text.bullet_point[0].text }}
              </li>
            </ul>

            <p
              class="excerpt"
              v-for="(execrpt, index) in responseObj.at_glance_excerpt"
              :key="index"
            >
              {{ execrpt.text }}
            </p>
          </div>

          <div
            v-if="!atglance"
            class="par-body"
            v-for="(text, index) in responseObj.itinerary_field"
            :key="index"
          >
            <h6 class="h6-body-title text-primary">
              {{ text.itinerary_title[0].text }}
            </h6>
            <p class="p-body-component">
              {{ text.itinerary_paragraph[0].text }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="fourth-block">
      <div class="sub-section-first-fourth bg-info">
        <h2 class="text-primary h2-fourth-block">MAKE THIS ITINERARY YOURS</h2>
        <p class="p-fourth-block">
          Like what you see? Book a call with us today to find out more about
          this exclusive itinerary and get a quote. Remember: we can tailor to
          your needs each and every Luxo Italia trip. So, if you are looking for
          a tailor-made experience, we highly suggest you to book a call for our
          premium service!
        </p>

        <div class="btn-box-fourth-block">
          <button
            class="general-btn-2 btn-fifth-block"
            style="padding: 2% 4%; width: 80%; margin-bottom: 5%"
          >
            BOOK NOW
          </button>

          <button class="general-btn-2 btn-fifth-block" style="padding: 2% 4%">
            CUSTOMIZE THIS TOUR
          </button>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import CarouselLuxurySingle from "src/components/Utils/CarouselLuxurySingle.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { api } from "boot/axios";

export default {
  components: {
    PreLoader,
    CarouselLuxurySingle,
  },
  setup() {
    const route = useRoute();
    const thisRoute = route.params.slug;
    const dataResponse = ref([]);
    const responseObj = ref({});
    const bulletPoints = ref([]);
    const execrpt = ref("");
    const atglance = ref(true);
    const active = ref("active-header-component");
    const activeItin = ref("");

    const endPoint =
      "https://luxobackend.cdn.prismic.io/api/v2/documents/search?ref=YRkXHRIAAC4A4F15";

    api.get(`${endPoint}&q=[[at(my.pacchetti.uid, "${thisRoute}")]]`).then(
      (response) => {
        let dataRes = response.data.results;
        dataResponse.value = dataRes;
        responseObj.value = dataRes[0].data;
        bulletPoints.value = dataRes[0].data.at_glance_bullet_point;

        console.log(dataResponse.value);
      },
      (error) => {
        console.log(error);
      }
    );

    return {
      slide: ref(1),
      autoplay: ref(true),
      thisRoute,
      dataResponse,
      responseObj,
      bulletPoints,
      execrpt,
      atglance,
      active,
      activeItin,
      clickMenu() {
        atglance.value = true;
        activeItin.value = "";
        active.value = "active-header-component";
      },

      clickMenuItin() {
        atglance.value = false;
        active.value = "";
        activeItin.value = "active-header-component-itin";
      },
    };
  },
};
</script>

<style lang="scss" scoped>
// **********HEADER BLOCK**********

// TYPO*************
.title-component {
  font-family: "Commuters-Sans-Bold";
  font-size: 17px;
  margin: 5% 0;
}

.p-component {
  font-family: "CommutersSans-Regular";
  font-size: 14px;
  opacity: 0.6;
  margin: unset;
}

.span-header-component {
  margin-right: 1%;
}

.active-header-component {
  color: $info;
}

.active-header-component-itin {
  color: $info;
}

.p-header-component {
  font-family: "Hatton-Semibold";
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.5px;
}

.h2-fourth-block {
  font-family: "Hatton-Medium";
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.5px;
}

.p-fourth-block {
  font-family: "Commuters-Sans-Light";
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.5px;
}

.h6-body-title {
  font-family: Commuters-Sans-Bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  margin-bottom: 1%;
}

// ***HEADER BLOCK******

.header-block {
  margin-bottom: 10%;
}

.figcaption {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 6%;
}

.figcaption h6.text-white {
  margin-bottom: 0;
}

.figcaption h1.text-white.text-center {
  margin-top: 0;
  margin-bottom: 7vh;
}

hr {
  height: 2px;
  width: 20%;
  margin: 2%;
}

// **********FIRST BLOCK**********
.first-block {
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin: 0 10% 10% 10%;
  padding: 1.5% 0;
}

.first-block .sub-section-first {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2%;
  // grid-auto-rows: auto;
}

.component-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

// **********SECOND BLOCK**********

.second-block-carousel-luxury {
  margin-bottom: 10%;
  overflow: hidden;
}

// **********THIRD BLOCK**********
.header-component {
  border-bottom: 1.5px solid $primary;
}

.third-block {
  margin-bottom: 3%;
}

.third-block .sub-section-first-third {
  margin: 0 9%;
}

// **********FOURTH BLOCK**********

.fourth-block {
  margin-bottom: 10%;
}
.btn-box-fourth-block {
  margin-top: 3%;
  width: 60%;
  display: flex;
}

.sub-section-first-fourth {
  margin: 0 9%;
  padding: 2.5% 5%;
}

ul {
  font-family: "Commuters-Sans-Light";
  font-size: 16px;
}

@media screen and (max-width: 1100px) {
  .img1 {
    height: 20% !important;
  }
  .figcaption h1.text-white.text-center {
    margin-top: 0;
    margin-bottom: 5vh;
  }

  // TYPO****************
  .title-component {
    transform: scale(0.9);
  }
  .p-component {
    transform: scale(0.9);
  }

  .h6-body-title {

  }

  // FIRST BLOCK*****************
  .img-component {
    transform: scale(0.8);
  }
}

@media screen and (max-width: 680px) {
  // TYPO****************
  .title-component {
    transform: scale(0.85);
    margin: 1% 0;
  }
  .p-component {
    transform: scale(0.85);
  }

  .img1 {
    height: 35vh !important;
  }

  .figcaption h1.text-white.text-center {
    margin-top: 0;
    margin-bottom: 3vh;
  }

  .h6-body-title {

  }

  // HEADER BLOCK****************

  .figcaption h1.text-white.text-center {
    margin-bottom: 3vh !important;
  }

  // FIRST BLOCK*****************
  .img-component {
    width: 20vw !important;
    height: 10vh !important;
  }

  .first-block .sub-section-first {
    display: flex;
    flex-direction: column;
  }

  .component-box {
    margin: 5% 0;
  }

  .header-component.flex.flex-center {
    justify-content: space-evenly !important;
  }

  ul {
    color: #4c4571;
  }

  .par-body {
    margin-top: 5%;
  }

  .btn-box-fourth-block {
    width: 100% !important;
    flex-direction: column;
    align-items: center;
  }
  .fourth-block {
    margin-top: 15%;
  }
}
</style>
