let root = new Vue({

  el: "#root",

  data: {
    moviesData: [],
    tvShowData: [],
    search: null,
    lingua: "",
  },



  methods: {
    searchApiMovie: function() {

      axios.get("https://api.themoviedb.org/3/search/movie?api_key=101e0cd873c9360f9bc83e1b717d2943&language=it-IT&query=" + this.search + "&page=1&include_adult=false")
        .then(resp => {
          console.log(resp.data.results);
          this.moviesData = (resp.data.results);
          this.search = null
          this.moviesData.forEach(item => {
            let voto = Math.ceil(item.vote_average / 2);
            item.vote_average = voto;
            if (item.original_language == "en") {
              item.original_language = "gb";
            } else if (item.original_language == "zh") {
              item.original_language = "cn"
            } else if (item.original_language == "ko") {
              item.original_language = "kr"
            } else if (item.original_language == "vi") {
              item.original_language = "vn";
            } else if (item.original_language == "et") {
              item.original_language = "ee";
            } else if (item.original_language == "ja") {
              item.original_language = "jp";
            } else if (item.original_language == "da") {
              item.original_language = "dk";
            } else if (item.original_language == "hu") {
              item.original_language = "ua";
            }
          });
        }),

        axios.get("https://api.themoviedb.org/3/search/tv?api_key=101e0cd873c9360f9bc83e1b717d2943&language=it-IT&page=1&query=" + this.search + "&include_adult=false")
        .then(resp => {
          this.tvShowData = (resp.data.results);
          this.search = null
          this.tvShowData.forEach(item => {
            let voto = Math.ceil(item.vote_average / 2);
            item.vote_average = voto;
            if (item.original_language == "en") {
              item.original_language = "gb";
            } else if (item.original_language == "zh") {
              item.original_language = "cn"
            } else if (item.original_language == "ko") {
              item.original_language = "kr"
            } else if (item.original_language == "vi") {
              item.original_language = "vn";
            } else if (item.original_language == "et") {
              item.original_language = "ee";
            } else if (item.original_language == "ja") {
              item.original_language = "jp";
            } else if (item.original_language == "da") {
              item.original_language = "dk";
            } else if (item.original_language == "hu") {
              item.original_language = "ua";
            }
          });
        });

    }

  },


});









// fine
