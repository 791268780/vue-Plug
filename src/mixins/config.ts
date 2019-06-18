import { Component, Vue, Emit } from 'vue-property-decorator';

@Component({
  name: 'mixin',
  components: {
  },
})

class Minxins extends Vue {
  public created() {
    const login = {
      0: {name: 'wcj' , password: 791268780 },
    };
    this.$store.dispatch('nameActions' , login );
  }
}

export default Minxins;
