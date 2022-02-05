<template>
  <div class="grid-container">
    <calc-butt
      :class="{'grid-item':true, 'wide-button':i=='0'}"
      v-for="i in digits" 
      :key="i" 
      :label="i" 
      @click="inputDigit(i)" />
    <span class="grid-item input-area">{{input||0}}</span>
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
          }
          break;
        case 'AC':
          break;
        case '+/-':
          break;
        case '%':
          break;
      }
    },
    compute: function() {
      if (!(this.operand1 && this.operand2 && this.operator)) {
        return 0;
      }

      switch (this.operator) {
        case '+':
          return this.operand1 + this.operand2;
        case '-':
          return this.operand1 - this.operand2;
        case 'x':
          return this.operand1 * this.operand2;
        case '/':
          return this.operand1 / this.operand2;
        default:
          return 0;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
.wide-button {
  grid-column: span 2;
}
.input-area {
  grid-column: span 4;
  background: white;
}
</style>
