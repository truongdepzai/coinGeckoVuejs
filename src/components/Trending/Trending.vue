<template>

    <div class="my-16 ">
        <div class="font-bold text-[1.5rem] mb-[20px] border-b border-[#dddddd] pb-2">Xu hướng</div>
        <div class="grid grid-cols-4 gap-2 justify-center px-2">
            <div class="flex w-full h-30 p-2 mb-2 mr-2 shadow-md hover:cursor-pointer hover:shadow-xl duration-500  delay-50  rounded-2xl hover:bg-[#dddddd] justify-center border-4 justify-center items-center " v-for="coins in dataTrending" :key="coins.item.coin_id" >

   
                <img :src="coins.item.small" class="ml-5 w-[30px] rounded-3xl">
          
                <div class="flex-wrap w-full px-2">
                    <div class="italic text-[15px] justify-center font-bold w-full flex-wrap mx-2"> {{ coins.item.symbol}}</div>
                    <div class="italic text-[12px] justify-center  w-full flex-wrap mx-2">Rank: {{ coins.item.market_cap_rank}}</div>
                    <div class="italic text-[12px] justify-center  flex-wrap px-2">Price: {{ coins.item.price_btc }}  BTC</div>
                    </div>
                
            </div>
            
           
        </div>
    </div>
</template>


<script>



    export default{
        name: 'Trending',
        data(){
            return{

            }
        },
        props:{
            dataTrending:[]
        },
       
    }
</script>