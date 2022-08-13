new Vue({
    el: "#app",
    data: {
        heal: 100,
        monster_heal: 100,
        game_is_on: false,
        time: 4,
        healTime: 1,
        log: []
    },
    methods: {
        start_game: function(){
            this.game_is_on=true
        },
        attack: function(){
                var fire=Math.ceil(Math.random()*11);
                this.monster_heal-=fire;
                this.monster_attack();
                this.add_logs({turn: "p", text: "Oyuncu atağı: "+ fire } );
        },
        special_attack: function(){
            if(this.time>0){
                var special_fire=Math.ceil(Math.random()*20);
                this.monster_attack();
                this.monster_heal-=special_fire;
                this.time--;
                this.add_logs({turn: "s", text: "Özel Oyuncu atağı: "+ special_fire } );
            }
            else{
                alert("Özel Saldırı Hakknızı Bitmiştir");
            }
      
            
        },
        heal_up: function(){
                    if(this.healTime>0){
                        this.heal+=20;
                        this.healTime--;
                        this.add_logs({turn: "h", text: "Oyuncu İyileştirmesi: +20"} );
                    }
                    else{
                        alert("İlk Yardım Hakknızı Bitmiştir");
                    }
                   
        },
        give_up: function(){
                this.heal=0;
                this.add_logs({turn: "g", text: "Oyuncu Pes Etti: " } );
        },
        monster_attack : function(){
            var monster_fire=Math.ceil(Math.random()*16);
            this.heal-=monster_fire;
            this.add_logs({turn: "m", text: "Canavar atağı: "+ monster_fire } );
        },

        add_logs:function(log){
            this.log.push(log)
        }
        
        },
        watch: {
            heal: function(value){
                if(value<=0){
                    this.heal=0;
                    if(confirm("Oyunu Kaybettin Tekrar Denemek İstermisin?")){
                        this.heal=100;
                        this.monster_heal=100;
                        this.log=[];
                    };
                }
                else if(value>=100){
                    this.heal=100
                   
                }
            },
            monster_heal: function(value){
                if(value<=0){
                    this.monster_heal=0;
                    if(confirm("Oyunu Kazandın Tekrar Denemek İstermisin?")){
                        this.heal=100;
                        this.monster_heal=100;
                        this.log=[];
                    };
                }
            }

        }
        



});

