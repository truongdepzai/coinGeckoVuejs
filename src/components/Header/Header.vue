<template>
 
    <div class="grid grid-cols-6 gap-5 border-b border-t border-[#dddddd] p-5 items-center ">
            <div class="flex col-start-2 col-span-3  items-center">
                <div class="mr-4 font-semibold hover:cursor-pointer  hover:text-[#6F6161]"><img class="h-10" src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png" alt=""></div>
                <div class="mr-4 font-semibold hover:cursor-pointer  hover:text-[#6F6161]">CryptoCurrencies</div>
                <div class="mr-4 font-semibold hover:cursor-pointer hover:text-[#6F6161]">Exchanges</div>
                <div class="mr-4 font-semibold hover:cursor-pointer hover:text-[#6F6161]">NFT</div>
                <div class="mr-4 font-semibold hover:cursor-pointer hover:text-[#6F6161]">Learn Crypto</div>
                <div class="mr-4 font-semibold hover:cursor-pointer hover:text-[#6F6161]">Products</div>
            
            </div>
            <div class="flex col-start-5 col-span-2 items-center flex-wrap">
                <div class="mr-4 flex items-center hover:cursor-pointer"><img class="h-5 mr-2" src="https://static.coingecko.com/s/candy_notification-62af2d17629b138154e3fac22a492b51d914d18461f9283ae4bd5ad5730d8763.svg" alt=""><span class="hover:text-[#6F6161]">Portfolio</span></div>
                <div class="mr-4  hover:cursor-pointer hover:text-[#6F6161]">Login</div>
                <div class="mr-4 hover:cursor-pointer "><Button class="border-none bg-green-500 rounded-lg h-full px-2 font-bold text-white py-2 hover:bg-green-300">Sign Up</Button></div>
                <div class=" hover:cursor-pointer flex items-center"><font-awesome-icon icon="fa-solid fa-search" class="absolute ml-2 " @click="getMsg(msg)"/><input v-model="msg" class="h-full border-2 bg-[#fff] rounded-lg pl-8 py-2 " type="text" placeholder="Search"></div>
            </div>

    </div>


</template>

<script>

    export default{
        data(){
            return{
                msg: []
            }

        },

        watch: {
            msg(newValue){
                console.log(newValue);

            }
        },
        methods:{
            getMsg(){
                this.emitter.emit("onGetMsg",this.msg)
            }
        },
        // mounted() {

        // },

}
</script>