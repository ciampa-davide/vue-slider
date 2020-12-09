var app = new Vue(
  {
    el:"#root",
    data:{
      indexImg: 0,
      images: [
        "https://data.gioiapura.it/imgprodotto/bracciale-donna-gioielli-pandora-590702hv-17_235757.jpg",
        "https://i.pinimg.com/originals/f7/3f/2f/f73f2f6e9aa820bf8fbbd4c7de9e9a9f.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1HtQ-7_e4g9dx79SO0PqWOAOXgyKfbn2hvw&usqp=CAU",
        "https://res.cloudinary.com/jerrick/image/upload/c_scale,q_auto/gfa0yutguc8vg3ucsgq7.jpg",
        "https://thumbs.dreamstime.com/b/uomo-che-sta-sulle-sue-ginocchia-34903138.jpg",
        "https://images.indianexpress.com/2019/12/Christmas-Wishes-2019_amp.jpg"
      ]
    },
    methods:{
      nextImage: function(){
        this.indexImg++;
        if(this.indexImg == this.images.lenght ){
          this.indexImg = 0;
        }
      },
      prevImage: function(){
        this.indexImg--;
        if(this.indexImg == -1 ){
          this.indexImg = this.images.lenght - 1;
        }
      }
    }
  }
)
