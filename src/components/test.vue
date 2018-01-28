<template>
    <div class="test">
        <h1>{{ header }}</h1>
        <input type="text" v-model="datasize" placeholder="Enter datasize" />
        <b-button v-on:click="getData()" variant="primary">Fetch</b-button>
        <br />
        <div style="margin:5px">
          <b-card-group columns >
            <b-card v-for="item in items" :img-src="item.imgSrc + '?random' + Math.random()"    
                    img-alt="Image"
                    img-top
                    :title="item.email">
                
                <p class="card-text">
                    <p v-bind:class="{more: item.more}">
                        {{ item.details }}
                    </p>
                </p>
                <button @click="item.more = !item.more" class="btn btn-primary"> {{ item.more ? 'More' : 'Less' }} </button>
            </b-card>
          </b-card-group>
        </div>
    </div>
</template>

<script>
   
    export default {
        name: 'test',
        data () {
            return {
                header: "Demo app",
                datasize: 1,
                items: []
            }
        },
        mounted() {
            this.$http.get("static/data/data-" + this.datasize + ".json").then(result => {
                this.items = this.addDefaultValues(result.body);
            }, error => {
                console.error(error);
            });
        },
        methods: {
            getData: function(){
                this.$http.get("static/data/data-" + this.datasize + ".json").then(result => {
                    this.items = this.addDefaultValues(result.body);
                }, error => {
                    console.error(error);
                });
            },
            showMore: function(){
                alert("clicked");
            },
            addDefaultValues: function(data){
                for(var i=0;i<data.length;i++){
                    data[i]["more"] = true;
                }
                return data;
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    .more {
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0px 30px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    
</style>