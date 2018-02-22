<template>
    <div class="benchmark">
        <h1>{{ header }}</h1>
    
        <b-navbar toggleable="md" type="light" variant="light">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#"> Showing datasets for {{ datasize }} datasets {{ image ? "with image" : "without image" }} {{ search != "" ? " | search for " + search : ""}} </b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                  <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" v-model="search"/>
                    
                  </b-nav-form>

                  <b-nav-item-dropdown text="Dataset" right @click.native="showMore">
                    <b-dropdown-item href="#">10</b-dropdown-item>
                    <b-dropdown-item href="#">100</b-dropdown-item>
                    <b-dropdown-item href="#">200</b-dropdown-item>
                    <b-dropdown-item href="#">500</b-dropdown-item>
                    <b-dropdown-item href="#">1000</b-dropdown-item>
                    <b-dropdown-item href="#">2500</b-dropdown-item>
                  </b-nav-item-dropdown>

                  <b-nav-item-dropdown text="Image" right @click.native="setImage">
                    <b-dropdown-item href="#">yes</b-dropdown-item>
                    <b-dropdown-item href="#">no</b-dropdown-item>
                  </b-nav-item-dropdown>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>

        <div style="margin:5px">
          <b-card-group columns >
            <template v-if="image">
                <b-card v-for="item in filterData" :img-src="item.imgSrc + '?random' + Math.random()"     
                    img-alt="Image"
                    img-top
                    :title="item.email"
                    :key="item.id">
                
                    <b-collapse :id="item.id">
                        <p class="card-text"> {{ item.details }} </p>
                    </b-collapse>
                    <b-btn  v-b-toggle="item.id" class="m-1" variant="primary">
                        <span class="when-opened">Less</span>
                        <span class="when-closed">More</span>
                    </b-btn>
                </b-card>
            </template>
            <template v-else>
                <b-card v-for="item in filterData" :title="item.email" :key="item.id">
                                
                     <b-collapse :id="item.id">
                        <p class="card-text"> {{ item.details }} </p>
                     </b-collapse>
                     <b-btn  v-b-toggle="item.id" class="m-1" variant="primary">
                        <span class="when-opened">Less</span>
                        <span class="when-closed">More</span>
                    </b-btn>
                
                </b-card>
            </template>
          </b-card-group>
        </div>
    </div>
</template>

<script>
    export const searchdata = require('../../static/data/data-2500.json');
    export default {
        name: 'benchmark',
        data () {
            return {
                header: "Benchmark app for vuejs",
                datasize: 10,
                items: [],
                image: false,
                search: "",
                options: [ { text: "Show Image", value : "show"},
                           { text: "Hide Image", value: "hide"} ] 
            }
        },
        mounted() {
            this.items = searchdata.slice(0,this.datasize);
        },
        methods: {
            showMore: function(data){
                this.datasize = data.path[0].innerText;
                if(this.datasize == 2500)
                    this.items = searchdata;
                else
                    this.items = searchdata.slice(0,this.datasize);
            },
            setImage: function(data){
                this.image = data.path[0].innerText == "yes" ? true : false;
            }
        },
        computed:
        {
            filterData :function()
            {
                var self=this;
                return this.items.filter(
                        function(item){
                                return item.details.toLowerCase().indexOf(self.search.toLowerCase())>=0 || item.email.toLowerCase().indexOf(self.search.toLowerCase())>=0;
                            }
                        );
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    
    .collapsed > .when-opened,
    :not(.collapsed) > .when-closed {
      display: none;
    }
    
</style>