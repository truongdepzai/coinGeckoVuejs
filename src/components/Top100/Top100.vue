<template>
    <div class="bxh">

        <div>
            <div class="font-bold text-[1.5rem]  border-b border-[#dddddd] p-2">Top 100 Coins Today</div>
            <table class="w-full ">
 
                <thead >
                    <tr class=" border-b border-[#dddddd] h-[50px] ">
                        <th class="text-center">#</th>
                        <th class="text-left text-[15px] font-bold">Coin</th>
                        <th class="text-right text-[15px] font-bold">Price </th>
                        <th class="text-right text-[15px] font-bold">24h</th>
                        <th class="text-right text-[15px] font-bold">7d</th>                        
                        <th class="text-right text-[15px] font-bold">Market cap</th>    

                    </tr>
                </thead>
                <tbody >
                    <tr class="border-b-2 h-[60px] hover:bg-[#dddddd] delay-50 duration-500 " v-for="coins in dataTop100" :key="coins.id" >
                        <td class="" ><font-awesome-icon icon="fa-solid fa-star" class="mr-2"/>{{ coins.market_cap_rank }}</td>
                        <RouterLink :to='`/detailsPage/${coins.id }`'>
                            <td class="flex h-[60px] items-center" >
                                <img class="w-[25px]" :src="coins.image" >
                                <div class="font-bold ml-2">{{ coins.name }}</div>
                                <div class="ml-4 font-italic uppercase text-[12px] text-[#B0A1A1]">{{ coins.symbol }}</div>
                            </td>
                        </RouterLink>
                        <td class=" text-right">$ {{ coins.current_price }}</td>

                        <td class=" text-right break-words">{{ coins.market_cap_change_percentage_24h }} %</td>

                        <td class="text-right break-words" >$ {{ coins.price_change_24h.toFixed(4) }}</td>
                        <td class="text-right ">$ {{ coins.total_volume }}</td>


                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

export default {
    name:'Top100',
    data(){
        return{
            msg: []
 
        }
    },
    props:{
        dataTop100:[]
    },

   
    methods:{
        
    },
    mounted(){
        
        
    }
}
</script>