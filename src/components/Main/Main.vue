<script>
import Trending from "../Trending/Trending.vue";
import Top100 from "../Top100/Top100.vue";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    Trending,
    Top100,
    FontAwesomeIcon
},
  data() {
    return {
      dataTrending: [],
      dataTop100: [],
      APIUrl: "https://api.coingecko.com/api/v3",
      page: 1,
      msg : []
    };
  },
  props:{

  },
  mounted() {
    this.getTrendingData();
    this.getTop100Data();
    this.emitter.on("onGetMsg", msg =>{
            // this.msg = msg;
            this.getMsg(msg)
        
            
        })
  },

  methods: {
    getTrendingData() {
      axios.get(`${this.APIUrl}/search/trending`).then((response) => {
        this.dataTrending = response.data.coins;
      });
    },
    getTop100Data() {
      axios
        .get(
          `${this.APIUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${this.page}&sparkline=false`
        )
        .then((response) => {
          this.dataTop100 = response.data;
        });
    },
    nextPage(){
      this.page = this.page + 1;
      this.getTop100Data()
    },
    prePage(){
      this.page = this.page - 1;
      this.getTop100Data()
    },
    async getMsg(msg){
      console.log(msg);
      this.dataTop100 = await this.dataTop100.filter(item => item.name === msg)
      console.log(this.dataTop100)
      
     
    }

  },

};
</script>

<template>
  <div class="grid grid-cols-6 gap-4">
    <div class="col-start-2 col-span-4">
      <Top100 :dataTop100="dataTop100" />
      <div class=" flex btn-group items-end w-full justify-center gap-2 mt-5">
        <button class="btn-left border-2 border-black rounded-lg w-[50px] hover:bg-[#ddd]" @click="prePage()"><font-awesome-icon icon="fa-solid fa-arrow-left"/></button>
        <button class="btn-right border-2 border-black rounded-lg w-[50px] hover:bg-[#ddd]" @click="nextPage()"><font-awesome-icon icon="fa-solid fa-arrow-right"/></button>
      </div>
      <Trending :dataTrending="dataTrending" />
    </div>
  </div>
</template>
