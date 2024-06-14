<template>
    <div class="base-timer">
      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="base-timer-path-remaining"
            :stroke-dasharray="circleDasharray"
            :class="'base-timer__path-remaining ' + remainingPathColor"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="base-timer-label" class="base-timer__label">{{ formattedTime }}</span>
      
      <!-- Show repeat button only when timer completes -->
      <span v-if="timeLeft <= 0 && !isWaiting"  class="align-self-center btn " @click="repeatTimer" style="
    color: #a855f7;
">
        <i class="fa fa-repeat" aria-hidden="true" style="
    margin-top: 11px;
"></i>
      
      </span>
    </div>
  </template>
  
 
<script>
export default {
  data() {
    return {
      FULL_DASH_ARRAY: 283,
      WARNING_THRESHOLD: 10,
      ALERT_THRESHOLD: 5,
      COLOR_CODES: {
        info: { color: "green" },
        warning: { color: "orange", threshold: this.WARNING_THRESHOLD },
        alert: { color: "red", threshold: this.ALERT_THRESHOLD },
      },
      TIME_LIMIT: 12,
      timePassed: 0,
      timeLeft: 12,
      timerInterval: null,
      remainingPathColor: "green",
      isWaiting: false,
      showRepeatButton: false,
    };
  },
  computed: {
    circleDasharray() {
      const fraction = this.calculateTimeFraction();
      return `${(fraction * this.FULL_DASH_ARRAY).toFixed(0)} 283`;
    },
    formattedTime() {
      const minutes = Math.floor(this.timeLeft / 60);
      const seconds = this.timeLeft % 60;
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },
  },
  methods: {
    startTimer() {
      this.timerInterval = setInterval(() => {
        this.timePassed += 1;
        this.timeLeft = this.TIME_LIMIT - this.timePassed;

        if (this.timeLeft <= 0) {
          this.onTimesUp();
          this.showRepeatButton = true;
        }

        this.setCircleDasharray();
        this.setRemainingPathColor();
      }, 1000);
    },
    onTimesUp() {
      clearInterval(this.timerInterval);
      this.isWaiting = false;
    },
    setRemainingPathColor() {
      if (this.timeLeft <= this.COLOR_CODES.alert.threshold) {
        this.remainingPathColor = "red";
      } else if (this.timeLeft <= this.COLOR_CODES.warning.threshold) {
        this.remainingPathColor = "orange";
      } else {
        this.remainingPathColor = "green";
      }
    },
    calculateTimeFraction() {
      const rawTimeFraction = this.timeLeft / this.TIME_LIMIT;
      return rawTimeFraction - (1 / this.TIME_LIMIT) * (1 - rawTimeFraction);
    },
    setCircleDasharray() {
      const circleDasharray = `${(this.calculateTimeFraction() * this.FULL_DASH_ARRAY).toFixed(0)} 283`;
      document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray);
    },
    repeatTimer() {
      
      // Disable button and set waiting state
      this.isWaiting = true;

      if (this.isWaiting) {
        
        this.timePassed = 0
       this.TIME_LIMIT = 12
        this.startTimer();
        this.$emit("repeat-clicked");
      } else {
      
        this.$emit("repeat-clicked");
      }
    },
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    clearInterval(this.timerInterval);
  },
};


</script>
  <style scoped>
  .base-timer {
    position: relative;
    width: 49px;
    height: 49px;
  }
  
  .base-timer__svg {
    transform: scaleX(-1);
  }
  
  .base-timer__circle {
    fill: none;
    stroke: none;
  }
  
  .base-timer__path-elapsed {
    stroke-width: 7px;
    stroke: grey;
  }
  
  .base-timer__path-remaining {
    stroke-width: 7px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
  }
  
  .base-timer__path-remaining.green {
    color: rgb(65, 184, 131);
  }
  
  .base-timer__path-remaining.orange {
    color: orange;
  }
  
  .base-timer__path-remaining.red {
    color: red;
  }
  
  .base-timer__label {
    position: absolute;
    width: 0px;
    height: 49px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    left:-15px;
    color: #a855f7;

  }

  .base-timer__svg[data-v-2fc7aa4a] {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    display: none;
}


  </style>
  