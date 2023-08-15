<template>
  <div class="grid grid-cols-6 gap-4">
    <div class="col-start-2 col-span-4 w-full">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 w-full">
          <div class="grid grid-cols-2 gap-4 mt-5">
            <div class="content-top">
              <div class="rank border-2 w-1/6 rounded-lg text-center bg-black text-white font-semibold text-[12px] m-1 mb-2" > Rank #{{ dataCoin.market_cap_rank }} </div>
              <div class="flex items-center gap-2">
                <img :src="dataCoin.image.small" class="icon w-[50px]" /> <span class="name font-bold text-[20px]">{{ dataCoin.name }}</span>
                <span class="BTC uppercase text-[20px] text-[#B0A1A1]">{{ dataCoin.symbol }}</span>
              </div>
              <div class="price text-[40px] font-bold"> {{ dataCoin.market_data.current_price.usd }} US$</div>
              <div class="price2 uppercase text-[12px] text-[#B0A1A1] mb-2" >1.00000000 {{ dataCoin.symbol }} </div>
              <div class="button-group mb-2">
                <button
                  class="border-2 mr-1 px-2 rounded-md border-black-100 w-[50px] h-[30px] items-center justify-center hover:bg-[#ddd]"
                >
                  <font-awesome-icon icon="fa-solid fa-share" />
                </button>
                <button
                  class="border-2 mr-1 px-2 rounded-md border-black-100 w-[50px] h-[30px] items-center justify-center hover:bg-[#ddd]"
                >
                  <font-awesome-icon icon="fa-solid fa-bell" />
                </button>
                <button
                  class="border-2 mr-1 px-2 rounded-md border-black-100 w-[50px] h-[30px] items-center justify-center hover:bg-[#ddd]"
                >
                  <font-awesome-icon icon="fa-solid fa-star" />
                </button>
              </div>
              <div
                class="price-24h flex w-full justify-between border-b-[5px] border-[#dddddd] mb-2" 
              >
                <div class="text-[12px] font-bold">$ {{ dataCoin.market_data.low_24h.usd }}</div>
                <div class="text-[12px] font-bold">24h range</div>
                <div class="text-[12px] font-bold">$ {{ dataCoin.market_data.high_24h.usd}}</div>
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
                <span class="text-[12px]">{{ dataCoin.market_data.market_cap.usd }}</span>
              </div>
              <div
                class="flex w-full justify-between border-b-[1px] border-[#dddddd] mb-2 pb-2"
              >
                <span class="text-[12px]">24 Hour Trading Vol</span>
                <span class="text-[12px]">{{ dataCoin.market_data.total_volume.usd }}</span>
              </div>
              <div
                class="flex justify-between border-b-[1px] border-[#dddddd] mb-2 pb-2"
              >
                <span class="text-[12px]">Fully Diluted Valuation</span>
                <span class="text-[12px]">{{ dataCoin.market_data.fully_diluted_valuation.usd }}</span>
              </div>
            </div>
            <div class="content-bottom-right col-start-2 w-full">
              <div class="flex w-full justify-between border-b-[1px] border-[#dddddd] mb-2 pb-2 ">
                <div class="text-[12px]">Circulating Supply</div>
                <div class="text-right text-[12px]">{{ dataCoin.market_data.market_cap.btc }}</div>
              </div>
              <div class="flex w-full justify-between border-b-[1px] border-[#dddddd] mb-2 pb-2">
                <div class="text-[12px]">Total Supply</div>
                <div class="text-right text-[12px]">{{ dataCoin.market_data.total_supply }}</div>
              </div>
              <div class="flex w-full justify-between border-b-[1px] border-[#dddddd] mb-2 pb-2">
                <div class="text-[12px]">Max Supply</div>
                <div class="text-right text-[12px]">{{  dataCoin.market_data.max_supply }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-start-3 w-full mt-5">
          <div class="flex w-full gap-1">
            <div class="font-bold  bg-green-400 rounded-lg px-2 mr-1 text-[12px] hover:bg-green-300 hover:cursor-pointer py-1 px-2 ">Buy/Shell</div>
            <div class="font-bold  bg-green-400 rounded-lg px-2 mr-1 text-[12px] hover:bg-green-300 hover:cursor-pointer py-1 px-2 ">Wallet</div>
            <p class="font-bold  bg-green-400 rounded-lg px-2 mr-1 text-[12px] hover:bg-green-300 hover:cursor-pointer py-1 px-2 ">Earn Crypto</p>
          </div>

          <div class="info w-full font-bold text-[20px] m-1">Infor</div>

          <div class="grid grid-cols-4 gap-4 flex items-center m-2">
            <div class="text-[12px]">Website</div>
            <div class="flex col-start-2 col-span-3 mb-1 bt-1">
              <a href="https://bitcoin.org/en/"><span class="font-semibold mr-2  rounded-lg bg-[#dddddd]  hover:cursor-pointer hover:bg-black hover:text-white px-3 py-1 text-[13px]"
                >bitcoin.org</span
              ></a>
              <a href="https://bitcoin.org/bitcoin.pdf"><span class="font-semibold mr-2  rounded-lg bg-[#dddddd] hover:cursor-pointer hover:bg-black hover:text-white px-3 py-1 text-[13px]"
                >Whitepaper</span
              ></a>
            </div>
          </div>
          <div class="grid grid-cols-4 gap-4 flex items-center m-2">
            <div class="text-[12px]">Explorers</div>
            <div class="flex col-start-2 col-span-3 mb-1 bt-1">
              <a href="https://blockchair.com/bitcoin/"><span class="font-semibold mr-2  rounded-lg bg-[#dddddd] px-3 py-1 text-[13px] hover:cursor-pointer hover:bg-black hover:text-white "
                >BlockChair</span
              ></a>
            </div>
          </div>

          <div class="grid grid-cols-4 gap-4 flex items-center m-2">
            <div class="text-[12px]">Wallets</div>
            <div class="flex col-start-2 col-span-3 mb-1 bt-1 flex-wrap">
              <a href="https://shop.ledger.com/pages/ledger-nano-x?utm_source=CoinGecko&utm_campaign=ADS-wallet&utm_medium=affiliate_button&r=bafa"><span class="font-semibold mr-2  rounded-lg bg-[#dddddd] px-3 py-1 text-[13px] hover:cursor-pointer hover:bg-black hover:text-white "
                >Ledger</span
              ></a>
              <a href="https://gcko.io/trezor"><span class="font-semibold mr-2  rounded-lg bg-[#dddddd] px-3 py-1 text-[13px] hover:cursor-pointer hover:bg-black hover:text-white px-3 py-1 text-[13px]"
                >Trezor</span
              ></a>
              <a href="https://electrum.org/"><span class="font-semibold mr-2  rounded-lg bg-[#dddddd] px-3 py-1 text-[13px] hover:cursor-pointer hover:bg-black hover:text-white px-3 py-1 text-[13px]"
                >Electrum</span
              ></a>
              <a href="https://www.xdefi.io/"><span class="font-semibold mr-2  rounded-lg bg-[#dddddd] px-3 py-1 text-[13px] hover:cursor-pointer hover:bg-black hover:text-white px-3 py-1 text-[13px]"
                >Xdefi</span
              ></a>
              <a class="mt-2" href="https://store.safepal.com/safepal-s1-hardware-wallet.html?utm_campaign=ADS-wallet&ref=coingecko&tap_s=3202940-e830c8&tm_subid1=wallet"><span class=" font-semibold mr-2  rounded-lg bg-[#dddddd]  hover:cursor-pointer hover:bg-black hover:text-white px-3 py-1 text-[13px]"
                >SafePal</span
              ></a>
            </div>
          </div>
          <div class="grid grid-cols-4 gap-4 flex items-center m-2">
            <div class="text-[12px]">Community</div>
            <div class="flex col-start-2 col-span-3 mb-1 bt-1 flex-wrap">
              <a href="https://www.reddit.com/r/Bitcoin"><span class="font-semibold mr-2  rounded-lg bg-[#dddddd] px-3 py-1 text-[13px] hover:cursor-pointer hover:bg-black hover:text-white "
                ><font-awesome-icon class="mr-1" icon="fa-brands fa-reddit"/>Reddit</span
              ></a>
              <a href="https://twitter.com/bitcoin"><span class="font-semibold mr-2  rounded-lg bg-[#dddddd] px-3 py-1 text-[13px] hover:cursor-pointer hover:bg-black hover:text-white "
                ><font-awesome-icon class="mr-1" icon="fa-brands fa-twitter"/>Twitter</span
              ></a>
              <a href="https://www.facebook.com/bitcoins/"><span class="font-semibold mr-2  rounded-lg bg-[#dddddd] px-3 py-1 text-[13px] hover:cursor-pointer hover:bg-black hover:text-white "
                ><font-awesome-icon class="mr-1" icon="fa-brands fa-facebook"/>Facebook</span
              ></a>
              <a class="mt-2" href="https://bitcointalk.org/"><span class="font-semibold mr-2  rounded-lg bg-[#dddddd] px-3 py-1 text-[13px] hover:cursor-pointer hover:bg-black hover:text-white "
                >Bitcointalk.org</span
              ></a>
              
            </div>
          </div>
          <div class="grid grid-cols-4 gap-4 flex items-center m-2">
            <div class="text-[12px]">Search on</div>
            <div class="flex col-start-2 col-span-3 mb-1 bt-1 flex-wrap">
              <a href="https://twitter.com/i/flow/login"><span class="font-semibold mr-2  rounded-lg bg-[#dddddd] px-3 py-1 text-[13px] hover:cursor-pointer hover:bg-black hover:text-white "
                ><font-awesome-icon class="mr-1" icon="fa-solid fa-search"/>Twitter</span
              ></a>
            </div>
          </div>
          <div class="grid grid-cols-4 gap-4 flex items-center m-2">
            <div class="text-[12px]">Source Code</div>
            <div class="flex col-start-2 col-span-3 mb-1 bt-1 flex-wrap">
              <a href="https://github.com/bitcoin "><span class="font-semibold mr-2  rounded-lg bg-[#dddddd] px-3 py-1 text-[13px] hover:cursor-pointer hover:bg-black hover:text-white "
                ><font-awesome-icon class="mr-1" icon="fa-brands fa-github"/>Github</span
              ></a>
            </div>
          </div>
          <div class="grid grid-cols-4 gap-4 flex items-center m-2">
            <div class="text-[12px] ">API id</div>
            <div class="flex col-start-2 col-span-3 mb-1 bt-1">
              <span class="mr-2  rounded-lg bg-[#dddddd] px-3 py-1 text-[13px] hover:cursor-pointer hover:bg-black hover:text-white font-semibold"
                >Bitcoin</span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- Trending -->
      <Trending :dataTrending="dataTrending"/>


      <!-- news -->
      <div class="news">
        <div class="font-bold text-[20px] mb-5">Bitcoin Guides</div>
        <div class="grid grid-cols-3 gap-4">
          <a href="https://coin68.com/binance-connect-dung-hoat-dong-tu-ngay-1608/"><div class="border-2 rounded-xl m-4 w-full drop-shadow-xl hover:cursor-pointer hover:bg-[#ddd]">
            <img class="rounded-xl mb-4" src="https://assets.coingecko.com/posts/images/1048/large/What_is_Stacks.png?1691639263" >
            <div class="content-bottom block mx-4">
              <p class="text-[12px] text-[#BAB2B2]">Coin&token</p>
              <div class="font-semibold text-[20px] mb-4">What is Stacks (STX) And How Does It Scale Bitcoin?</div>
              <div class="mb-10 text-[#BAB2B2] ">Stacks is a layer for smart contracts designed to scale the Bitcoin blockchain, which utilizes the proof of transfer consensus mechanism.</div>
              <div class="block mb-2"><div class="font-semibold">Bitcoinist</div><div class="text-[#BAB2B2]">about 1 hour ago</div></div>
            </div>
          </div></a>

          <a href="https://blogtienao.com/shiba-inu-dat-ky-luc-moi-voi-so-luong-dia-chi-cao-nhat-moi-thoi-dai/"><div class="border-2 rounded-xl m-4 col-start-2 w-full drop-shadow-2xl hover:cursor-pointer hover:bg-[#ddd]">
            <img class="rounded-xl mb-4" src="https://assets.coingecko.com/article-images/1017268.jpg" >
            <div class="content-bottom block mx-4">
              <p class="text-[12px] text-[#BAB2B2]">Coin&token</p>
              <div class="font-semibold text-[20px] mb-4">What is Stacks (STX) And How Does It Scale Bitcoin?</div>
              <div class="mb-10 text-[#BAB2B2]">Stacks is a layer for smart contracts designed to scale the Bitcoin blockchain, which utilizes the proof of transfer consensus mechanism.</div>
              <div class="block mb-2"><div class="font-semibold">Bitcoinist</div><div class="text-[#BAB2B2]">about 1 hour ago</div></div>
            </div>
          </div></a>

          <a href="https://blogtienao.com/chainlink-tiep-tuc-mo-hinh-tang-gia-giua-12-tich-hop-moi/"><div class="border-2 rounded-xl m-4 col-start-3 w-full drop-shadow-2xl hover:cursor-pointer hover:bg-[#ddd]">
            <img class= "rounded-xl mb-4" src="https://assets.coingecko.com/posts/images/1033/large/Top_Banks_Worldwide_that_are_Crypto_Friendly.png?1690260781" >
            <div class="content-bottom block mx-4">
              <p class="text-[12px] text-[#BAB2B2]">Coin&token</p>
              <div class="font-semibold text-[20px] mb-4">What is Stacks (STX) And How Does It Scale Bitcoin?</div>
              <div class="mb-10 text-[#BAB2B2]">Stacks is a layer for smart contracts designed to scale the Bitcoin blockchain, which utilizes the proof of transfer consensus mechanism.</div>
              <div class="block mb-2"><div class="font-semibold">Bitcoinist</div><div class="text-[#BAB2B2]">about 1 hour ago</div></div>
            </div>
          </div></a>
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
      axios.get(`${this.APIUrl}/coins/${this.id}`)
      .then((response) =>{
        this.dataCoin = response.data;
        
      })
    },

  },
  beforeMount(){
    this.getTrendingData(),
    this.getCoinData()

  
  }
}

</script>