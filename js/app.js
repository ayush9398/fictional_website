
    var app = angular.module('confusionApp',[]);
        
    app.controller('MenuController',function(){
            
    this.tab=1;
    this.cat=['Mains','Appetizers','Desserts']
    this.tabar=[2,3,4]
    this.filtText="";
    this.showDetails = false;
        this.dishes=[
    {
        name:'Uthapizza',
        image: 'img/uthapizza.png',
        category: 'Mains',
        label:'Hot',
        price:'4.99',
        description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
        comment: ''
    },
    {
        name:'Zucchipakoda',
        image: 'img/zucchipakoda.png',
        category: 'Appetizers',
        label:'',
        price:'1.99',
        description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
        comment: ''
    },
    {
        name:'Vadonut',
        image: 'img/vadonut.png',
        category: 'Appetizers',
        label:'New',
        price:'1.99',
        description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
        comment: ''
    },
    {
        name:'ElaiCheese Cake',
        image: 'img/elaicheesecake.png',
        category: 'Desserts',
        label:'',
        price:'2.99',
        description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
        comment: ''
    }
];
            
    this.select=function(selecttab){
    this.tab=selecttab;
                
    if(this.tab===2){
        this.filtText="appetizer";
    }
    else if(this.tab===3){
        this.filtText="mains";
    }
    else if($scope.tab===4){
        this.filtText="dessert";
    }
    else{
        this.filtText="";
    }
    };
            
    this.isSelected=function(checktab){
    return (this.tab===checktab);
    };
        
    this.toggleDetails=function(){
        this.showDetails=!this.showDetails;
    };
});

    app.controller('ContactController',function()
{
        this.feedback = {mychannel:"", firstname:"", lastname:"", agree:false, email:""}
        var channels=[{value:"tel",label:"Tel."},
                     {value:"Email",label:"Email"}];
        this.channels= channels;
        this.invalidChannelSelaction=false;
    
})

    app.controller('FeedbackController',function($scope)
{
    
    this.sendFeedback= function(){
        
        this.log(this.feedback);
      
        
        if( this.feedback.agree && (this.feedback.mychannel=="")){
            this.invalidChannelSelection = true;
            console.log('incorret');
        }
        else{
            this.invalidChannelSelection = false;
            this.feedback={
                mychannel:"", firstname:"", lastname:"", agree:false, email:""
            };
            this.feedback.mychannel="";
            this.feedbackForm.$setPristine();
            console.log(this.feedback);
        }
        
    };
    
})


;