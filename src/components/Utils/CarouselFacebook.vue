<template>
  <div class="facebook-reviews-global" style="border: 1px solid #d9c5a0">
    <div class="facebook-title">
      <h2 class="text-primary text-center">Facebook Reviews</h2>
    </div>

    <div class="facebook-buttons facebook-buttons-prev">
      <img
        class="prev-arrow"
        src="~assets/freccia.svg"
        alt=""
        @click="count--"
        style="width: 4vw; transform: rotate(180deg)"
      />
    </div>

    <div class="facebook-body">
      <div
        class="review-first flex div-review"
        v-if="count === 0"
        style="flex-wrap: nowrap"
      >
        <div class="facebook-slide flex">
          <p class="text-center body-review">
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p class="text-center body-review">
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff text-center text-primary">Mario Rossi</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>

        <hr color="#D9C5A0" />

        <div class="facebook-slide flex">
          <p class="text-center body-review">
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p class="text-center body-review">
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff text-center text-primary">Mario Rossi</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>
      </div>

      <div
        class="review-first flex div-review"
        v-if="count === 1"
        style="flex-wrap: nowrap"
      >
        <div class="facebook-slide flex">
          <p class="text-center body-review">
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p class="text-center body-review">
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff text-center text-primary">Mario Rossi</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>

        <hr color="#D9C5A0" />

        <div class="facebook-slide flex">
          <p class="text-center body-review">
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p class="text-center body-review">
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff text-center text-primary">Pietro Binachi</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>
      </div>

      <div
        class="review-first flex div-review"
        v-if="count === 2"
        style="flex-wrap: nowrap"
      >
        <div class="facebook-slide flex">
          <p class="text-center body-review">
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p class="text-center body-review">
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff text-center text-primary">Giuseppe Verdi</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>

        <hr color="#D9C5A0" />

        <div class="facebook-slide flex">
          <p class="text-center body-review">
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p class="text-center body-review">
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff text-center text-primary">Mario Rossi</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>
      </div>
    </div>

    <div class="facebook-buttons facebook-buttons-next">
      <img
        class="next-arrow"
        src="~assets/freccia.svg"
        alt=""
        @click="count++"
        style="width: 4vw"
      />
    </div>
  </div>
</template>

<script>
import { ref, onUpdated } from "vue";

export default {
  setup() {
    const count = ref(0);

    onUpdated(() => {
      if (count.value < 0) {
        count.value = 2;
      } else if (count.value > 2) {
        count.value = 0;
      } else {
        return null;
      }
    });
    return {
      count,
    };
  },
};
</script>

<style lang="scss" scoped>
hr {
  height: 50vh;
}

.facebook-reviews-global {
  margin: 4% 6%;
}

.facebook-slide {
  flex-direction: column;
}

.payoff {
  font-family: "Hatton-Medium";
  font-size: 20px;
  margin-bottom: 0;
  margin-top: 10%;
}

.payoff-echo {
  font-size: 17px;
  margin-bottom: 20%;
}

.body-review {
  font-family: "CommutersSans-Regular";
  font-size: 17px;
  padding: 0 15%;
}

.facebook-body {
  padding: 0 10%;
}

.facebook-buttons-prev {
  position: relative;
  top: 38vh;
  left: 5%;
}

.facebook-buttons-next {
  position: relative;
  top: -30vh;
  left: 90%;
}
</style>
