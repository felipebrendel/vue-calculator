<template>
  <div class="grid-container">
    <span class="grid-item input-area">{{input||0}}</span>
    <calc-butt
      :class="{'grid-item':true, 'wide-button':i=='0', 'gray-button': i >= '0' && i <= '9' || i == '.', 'darkgray-button': i == '+/-' || i == 'AC' || i == '%', 'light-button': ['+', '-', 'x', '/', '='].includes(i), 'active-operator': i == operator}"
      v-for="i in digits" 
      :key="i" 
      :label="i" 
      @click="inputDigit(i)" />

    <transition name="fade">
      <span v-if="nice" class="nice">nice!</span>
    </transition>
  </div>
</template>

<script>
import CalcButt from './components/CalcButt.vue'

export default {
  name: 'App',
  components: {
    CalcButt,
  },
  data: function() {
    return {
      digits: ['AC','+/-','%','/','7','8','9','x','4','5','6','-','1','2','3','+','0','.','=',],
      input: '',
      operand1: 0,
      operand2: undefined,
      operator: undefined,
      shouldReset: false,
      nice: false,
    }
  },
  computed: {
    numeric_input: function() {
      return Number(this.input);
    }
  },
  methods: {
    inputDigit: function(i) {
      switch (i) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          if (this.shouldReset) {this.input='';}
          this.input += i;
          this.shouldReset = false;
          break;
        case 'x':
        case '+':
        case '-':
        case '/':
          this.operator = i;
          this.operand1 = this.numeric_input;
          this.shouldReset = true;
          break;
        case '=':
          if (this.operand1 && this.operator) {
            this.operand2 = this.numeric_input;
            this.input = this.compute();
            this.operand1 = this.numeric_input;
            this.operand2 = undefined;
            this.operator = undefined;
            this.shouldReset = true;

            /* make text "nice!" appear for a short moment */
            if (this.input == "69") {
              this.nice = true;

              setTimeout(() => {
                this.nice = false;
              }, 800);
            }
          }
          break;
        case 'AC':
          this.operator = undefined;
          this.operand1 = 0;
          this.operand2 = undefined;
          this.input = undefined;
          this.shouldReset = true;
          break;
        case '+/-':
          this.input = (- this.numeric_input).toString();
          break;
        case '%':
          break;
      }      
    },
    round: function(number, decimalPlaces) {
        const factorOfTen = Math.pow(10, decimalPlaces);

        return Math.round(number * factorOfTen) / factorOfTen;
    },
    compute: function() {
      if (!(this.operand1 && this.operand2 && this.operator)) {
        return 0;
      }

      var result = 0;

      switch (this.operator) {
        case '+':
          result = this.operand1 + this.operand2;
          break;
        case '-':
          result = this.operand1 - this.operand2;
          break;
        case 'x':
          result = this.operand1 * this.operand2;
          break;
        case '/':
          result = this.operand1 / this.operand2;
          break;
        default:
          return 0;
      }

      return this.round(result, 6);
    }
  }
}
</script>

<style>
body {
  background: #E7E9EB;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
  margin: auto;
  width: 60%;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: #504E4F;
  clip-path: inset(12px round 25px);
  -webkit-clip-path: inset(12px round 25px);
}
.grid-item {
  color: #EDEDED;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #504F4F;
  padding: 20px;
  margin: 0;
  font-size: 30px;
  text-align: center;
}
.wide-button {
  grid-column: span 2;
}
.gray-button {
  background-color: #7B7A7A;
}
.darkgray-button {
  background-color: #61605F;
}
.light-button {
  background-color: #FF9F0A;
}
.input-area {
  background-color: #504F4F;
  grid-column: span 4;
  text-align: right;
  font-size: 60pt;
  padding-right: 100px;
}
.active-operator {
  background: #ffc10a;
}
.nice {
  font-family: 'Phosphate Solid';
  font-size: 36pt;
  position: absolute;
  top: 100px;
  left: 100px;
  color: orange;
  left: 50px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
