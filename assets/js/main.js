let root = new Vue({

  el: "#root",

  data: {
    moviesData: [],
    search: null,
  },

  computed: {

  },

  methods: {
    searchApi: function(){
      console.log(this.search);

      axios.get("https://api.themoviedb.org/3/search/movie?api_key=101e0cd873c9360f9bc83e1b717d2943&language=en-US&query=" + this.search + "&page=1&include_adult=false")
      .then(resp => {
        console.log(resp.data.results);
        this.moviesData=(resp.data.results);
        this.search = null
      })

      console.log(this.moviesData);
    }
  },

  mounted(){

  }

});



















// fine
