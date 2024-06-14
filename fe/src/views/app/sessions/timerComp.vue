<template>
    <div class="d-flex flex-row justify-content-between">
   
      <div  class="align-self-center btn pw px-1" > 
<span>Don't receive the OTP?&nbsp;</span>



<a >
          <span class=" px-1 pw" style="
    color: #a855f7;
"  v-if="timeLeft <= 0 && !isWaiting" @click="repeatTimer" >Resend</span>
        </a>
      <!-- <span  class=" px-1 pw"> Resend</span> -->
      </div>
      <div id="base-timer-label" class="pw align-self-center px-1" style="
    color: #a855f7;
" >{{ formattedTime }}</div>
 
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
      TIME_LIMIT: 120,
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
       this.TIME_LIMIT = 120
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
    height: 37px;
    top: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 15px;
    left: 29px;
    color: #a855f7;
}

  .base-timer__svg[data-v-2fc7aa4a] {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    display: none;
}





/* Small smartphones (portrait) */
@media only screen and (max-width: 320px) {
  .lapTopResend
{
    position: absolute;
    right: 249px;
    top: 2px;
}
}

/* Smartphones (portrait) */
@media only screen and (max-width: 480px) {
  .lapTopResend
{
    position: absolute;
    right: 36px;
    top: 2px;
}
 
}


/* Smartphones (landscape) */
@media only screen and (min-width: 481px) and (max-width: 767px) and (orientation: landscape) {
  .lapTopResend
{
    position: absolute;
    right: 249px;
    top: 2px;
}
}


/* Tablets (portrait) */
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .lapTopResend
{
    position: absolute;
    right: 38px;
    top: 2px;
}
}

/* Desktops and laptops */
@media only screen and (min-width: 1024px) {
  .lapTopResend
{
    position: absolute;
    right: 249px;
    top: 2px;
}
 
}

/* Large screens */
@media only screen and (min-width: 1200px) {
  .lapTopResend
{
    position: absolute;
    right: 244px;
    top: 3px;
}

}



.pw {


  color: #6f6b7d;
  font-size: 0.9375rem;
  font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}



  </style>
  