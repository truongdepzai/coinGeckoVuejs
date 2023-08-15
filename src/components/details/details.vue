<template>
  <div class="grid grid-cols-6 gap-4">
    <div class="col-start-2 col-span-4 w-full">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 w-full">
          <div class="grid grid-cols-2 gap-4">
            <div class="content-top">
              <div class="rank border-2 w-1/6 rounded-lg text-center bg-black text-white font-semibold text-[12px] m-1" > Rank #{{ bitCoin.market_cap_rank }} </div>
              <div class="flex items-center gap-2">
                <img :src="bitCoin.image" class="icon w-[50px]" /> <span class="name font-bold text-[20px]">{{ bitCoin.name }}</span>
                <span class="BTC uppercase text-[20px] text-[#B0A1A1]">{{ bitCoin.symbol }}</span>
              </div>
              <div class="price text-[40px] font-bold">$ {{ bitCoin.current_price }}</div>
              <div class="price2 uppercase text-[12px] text-[#B0A1A1] mb-2" >1.00000000 {{ bitCoin.symbol }} </div>
              <div class="button-group mb-2">
                <button
                  class="border-2 mr-1 px-2 rounded-md border-black-100 w-[50px] h-[30px] items-center justify-center"
                >
                  <font-awesome-icon icon="fa-solid fa-share" />
                </button>
                <button
                  class="border-2 mr-1 px-2 rounded-md border-black-100 w-[50px] h-[30px] items-center justify-center"
                >
                  <font-awesome-icon icon="fa-solid fa-bell" />
                </button>
                <button
                  class="border-2 mr-1 px-2 rounded-md border-black-100 w-[50px] h-[30px] items-center justify-center"
                >
                  <font-awesome-icon icon="fa-solid fa-star" />
                </button>
              </div>
              <div
                class="price-24h flex w-full justify-between border-b-[5px] border-[#dddddd] mb-2" 
              >
                <div class="text-[12px] font-bold">$ {{ bitCoin.low_24h }}</div>
                <div class="text-[12px] font-bold">24h range</div>
                <div class="text-[12px] font-bold">$ {{ bitCoin.high_24h }}</div>
              </div>
            </div>
            <div class="content-bottom col-start-2 w-full"></div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="content-bottom-left w-full">
              <div
                class="flex w-full justify-between border-b-[1px] border-[#dddddd] mb-2 pb-2"
              >
                <span class="text-[12px]">Market Cap</span>
                <span class="text-[12px]">price</span>
              </div>
              <div
                class="flex w-full justify-between border-b-[1px] border-[#dddddd] mb-2 pb-2"
              >
                <span class="text-[12px]">24 Hour Trading Vol</span>
                <span class="text-[12px]">price</span>
              </div>
              <div
                class="flex justify-between border-b-[1px] border-[#dddddd] mb-2 pb-2"
              >
                <span class="text-[12px]">Fully Diluted Valuation</span>
                <span class="text-[12px]">price</span>
              </div>
            </div>
            <div class="content-bottom-right col-start-2 w-full">
              <div class="flex w-full justify-between border-b-[1px] border-[#dddddd] mb-2 pb-2 ">
                <div class="text-[12px]">Circulating Supply</div>
                <div class="text-right text-[12px]">price</div>
              </div>
              <div class="flex w-full justify-between border-b-[1px] border-[#dddddd] mb-2 pb-2">
                <div class="text-[12px]">Total Supply</div>
                <div class="text-right text-[12px]">price</div>
              </div>
              <div class="flex w-full justify-between border-b-[1px] border-[#dddddd] mb-2 pb-2">
                <div class="text-[12px]">Max Supply</div>
                <div class="text-right text-[12px]">price</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-start-3 w-full">
          <div class="flex w-full">
            <div class="font-bold border-2 bg-green-400 rounded-lg px-2 mr-1 text-[12px]">Buy/Shell</div>
            <div class="font-bold border-2 bg-green-400 rounded-lg px-2 mr-1 text-[12px]">Wallet</div>
            <p class="font-bold border-2 bg-green-400 rounded-lg px-2 mr-1 text-[12px]">Earn Crypto</p>
          </div>

          <div class="info w-full font-bold text-[20px] m-1">Infor</div>

          <div class="grid grid-cols-4 gap-4 flex items-center">
            <div class="text-[12px]">Website</div>
            <div class="flex col-start-2 col-span-3 mb-1 bt-1">
              <span class="mr-2 border-2 rounded-lg bg-[#dddddd] pl-1 pr-1 text-[12px]"
                >Whitepaper</span
              >
              <span class="mr-2 border-2 rounded-lg bg-[#dddddd] pl-1 pr-1 text-[12px]"
                >bitcoin.org</span
              >
            </div>
          </div>
          <div class="grid grid-cols-4 gap-4 flex items-center">
            <div class="text-[12px]">Explorers</div>
            <div class="flex col-start-2 col-span-3 mb-1 bt-1">
              <span class="mr-2 border-2 rounded-lg bg-[#dddddd] pl-1 pr-1 text-[12px]"
                >BlockChair</span
              >
            </div>
          </div>

          <div class="grid grid-cols-4 gap-4 flex items-center">
            <div class="text-[12px]">Wallets</div>
            <div class="flex col-start-2 col-span-3 mb-1 bt-1 flex-wrap">
              <span class="mr-2 border-2 rounded-lg bg-[#dddddd] pl-1 pr-1 text-[12px]"
                >Ledger</span
              >
              <span class="mr-2 border-2 rounded-lg bg-[#dddddd] pl-1 pr-1 text-[12px]"
                >Trezor</span
              >
              <span class="mr-2 border-2 rounded-lg bg-[#dddddd] pl-1 pr-1 text-[12px]"
                >Electrum</span
              >
              <span class="mr-2 border-2 rounded-lg bg-[#dddddd] pl-1 pr-1 text-[12px]"
                >Xdefi</span
              >
              <span class="mr-2 border-2 rounded-lg bg-[#dddddd] pl-1 pr-1 text-[12px]"
                >SafePal</span
              >
            </div>
          </div>
          <div class="grid grid-cols-4 gap-4 flex items-center">
            <div class="text-[12px]">Community</div>
            <div class="flex col-start-2 col-span-3 mb-1 bt-1 flex-wrap">
              <span class="mr-2 border-2 rounded-lg bg-[#dddddd] pl-1 pr-1 text-[12px]"
                >Reddit</span
              >
              <span class="mr-2 border-2 rounded-lg bg-[#dddddd] pl-1 pr-1 text-[12px]"
                >Twitter</span
              >
              <span class="mr-2 border-2 rounded-lg bg-[#dddddd] pl-1 pr-1 text-[12px]"
                >Facebook</span
              >
              <span class="mr-2 border-2 rounded-lg bg-[#dddddd] pl-1 pr-1 text-[12px]"
                >Bitcointalk.org</span
              >
              
            </div>
          </div>
          <div class="grid grid-cols-4 gap-4 flex items-center">
            <div class="text-[12px]">Search on</div>
            <div class="flex col-start-2 col-span-3 mb-1 bt-1 flex-wrap">
              <span class="mr-2 border-2 rounded-lg bg-[#dddddd] pl-1 pr-1 text-[12px]"
                >Twitter</span
              >
            </div>
          </div>
          <div class="grid grid-cols-4 gap-4 flex items-center">
            <div class="text-[12px]">Source Code</div>
            <div class="flex col-start-2 col-span-3 mb-1 bt-1 flex-wrap">
              <span class="mr-2 border-2 rounded-lg bg-[#dddddd] pl-1 pr-1 text-[12px]"
                >Github</span
              >
            </div>
          </div>
          <div class="grid grid-cols-4 gap-4 flex items-center">
            <div class="text-[12px]">API id</div>
            <div class="flex col-start-2 col-span-3 mb-1 bt-1">
              <span class="mr-2 border-2 rounded-lg bg-[#dddddd] pl-1 pr-1 text-[12px]"
                >Bitcoin</span
              >
            </div>
          </div>
        </div>
      </div>
<!-- Top100 -->
      <Top100 />
      <!-- Trending -->
      <Trending :dataTrending="dataTrending"/>


      <!-- news -->
      <div class="news">
        <div class="font-bold text-[20px] mb-5">Bitcoin Guides</div>
        <div class="grid grid-cols-3 gap-4">
          <div class="border-2 rounded-xl m-4 w-full drop-shadow-xl hover:cursor-pointer hover:bg-[#ddd]">
            <img class="rounded-xl mb-4" src="https://assets.coingecko.com/posts/images/1048/large/What_is_Stacks.png?1691639263" >
            <div class="content-bottom block mx-4">
              <p class="text-[12px] text-[#BAB2B2]">Coin&token</p>
              <div class="font-semibold text-[20px] mb-4">What is Stacks (STX) And How Does It Scale Bitcoin?</div>
              <div class="mb-10 text-[#BAB2B2] ">Stacks is a layer for smart contracts designed to scale the Bitcoin blockchain, which utilizes the proof of transfer consensus mechanism.</div>
              <div class="block mb-2"><div class="font-semibold">Bitcoinist</div><div class="text-[#BAB2B2]">about 1 hour ago</div></div>
            </div>


          </div>
          <div class="border-2 rounded-xl m-4 col-start-2 w-full drop-shadow-2xl hover:cursor-pointer hover:bg-[#ddd]">
            <img class="rounded-xl mb-4" src="https://assets.coingecko.com/article-images/1017268.jpg" >
            <div class="content-bottom block mx-4">
              <p class="text-[12px] text-[#BAB2B2]">Coin&token</p>
              <div class="font-semibold text-[20px] mb-4">What is Stacks (STX) And How Does It Scale Bitcoin?</div>
              <div class="mb-10 text-[#BAB2B2]">Stacks is a layer for smart contracts designed to scale the Bitcoin blockchain, which utilizes the proof of transfer consensus mechanism.</div>
              <div class="block mb-2"><div class="font-semibold">Bitcoinist</div><div class="text-[#BAB2B2]">about 1 hour ago</div></div>
            </div>
          </div>
          <div class="border-2 rounded-xl m-4 col-start-3 w-full drop-shadow-2xl hover:cursor-pointer hover:bg-[#ddd]">
            <img class= "rounded-xl mb-4" src="https://assets.coingecko.com/posts/images/1033/large/Top_Banks_Worldwide_that_are_Crypto_Friendly.png?1690260781" >
            <div class="content-bottom block mx-4">
              <p class="text-[12px] text-[#BAB2B2]">Coin&token</p>
              <div class="font-semibold text-[20px] mb-4">What is Stacks (STX) And How Does It Scale Bitcoin?</div>
              <div class="mb-10 text-[#BAB2B2]">Stacks is a layer for smart contracts designed to scale the Bitcoin blockchain, which utilizes the proof of transfer consensus mechanism.</div>
              <div class="block mb-2"><div class="font-semibold">Bitcoinist</div><div class="text-[#BAB2B2]">about 1 hour ago</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Trending from '../Trending/Trending.vue'
import Top100 from '../Top100/Top100.vue';
import axios from "axios";
export default{
  components:{
    Trending,
    Top100,
  },
  data(){
    return{
      id: this.$route.params.id,
      dataTrending:[],
      dataCoin: [],
      bitCoin:[],
      coin: Object,
      APIUrl: "https://api.coingecko.com/api/v3",
    }
  },
  methods:{
    getTrendingData(){
      axios.get(`${this.APIUrl}/search/trending`).then((response) =>{
        this.dataTrending = response.data.coins;
      })
    },
    getCoinData(){
      axios.get(`${this.APIUrl}/coins/${this.id}`).then((response) =>{
        this.dataCoin = response.data;
        console.log(this.dataCoin.id)

      })
    },
    // getCoin(id){
    //   for(coins in dataTop100 ){
    //     if (id === coins.id){
    //       this.coin.push(coins)
    //       console.log(coins)
    //     }
    //   }
    // }
  },
  mounted(){
    this.getTrendingData(),
    this.getCoinData()
    
  
  }
}

</script>