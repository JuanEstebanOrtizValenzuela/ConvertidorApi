import axios from 'axios';

export default {
  data() {
    return {
      form: {
        type_moneda_one: "",
        type_moneda_two: "",
        moneda_one: "",
        moneda_two: "",
        taza: "",
        cambio: "",
      },
      name_moneda: [],
    };
  },
  mounted() {
    this.name();
  },
  methods: {
    getApi() {
      try {
        axios.get(
          `https://openexchangerates.org/api/latest.json?app_id=ce73408e6be2449987632e8771555f8a`
        )
          .then(res => (res.data))
          .then((data) => {
            const taza = data.rates[this.form.type_moneda_two];
            const taza2 = data.rates[this.form.type_moneda_one];
            this.form.cambio = `${taza2} ${this.form.type_moneda_one} = ${taza} ${this.form.type_moneda_two}`;
            this.form.moneda_two = (this.form.moneda_one / taza2 * taza).toFixed(2);
            let total = this.currencyFormatter(this.form.type_moneda_two, parseFloat(this.form.moneda_two));
            this.form.moneda_two = total;
          })
          .catch((e) => console.log(e));
      } catch (error) {
        // manejo del error\
        console.error(error);
      }
    },
    cli() {
      // console.log("funciona");
      this.getApi();
    },
    name() {
      try {
        axios.get(
          `https://openexchangerates.org/api/currencies.json?app_id=ce73408e6be2449987632e8771555f8a`
        )
          .then(res => (res.data))
          .then((data) => (this.name_moneda = data))
          .catch((e) => console.log(e));
      } catch (error) {
        // manejo del error\
        console.error(error);
      }
    },
    currencyFormatter( currency: any, value: number | bigint) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        minimumFractionDigits: 2,
        currency
      }) 
      return formatter.format(value)
    }
  },
};