$(document).ready(function(){


    $(".link_img_000").on("mouseover",function()
    {
        $(this).attr("src","assets/images/Arrow_hover.png")
    })

    $(".link_img_000").on("mouseout",function()
    {
        $(this).attr("src","assets/images/Arrow Normal Right_A3.png")
    })


     $(".approch_img").on("mouseover",function()
    {
        $(this).attr("src","assets/images/Arrow.png")
    })

    $(".approch_img").on("mouseout",function()
    {
        $(this).attr("src","assets/images/Arrow.png")
    })


    $(".link_img2").on("mouseover",function()
    {
        $(this).attr("src","assets/images/Arrow_hover_Left.png")
    })

    $(".link_img2").on("mouseout",function()
    {
        $(this).attr("src","assets/images/Arrow Normal Left_A3.png")
    })


  $('#popup_btn_1, #popup_btn_2, #popup_btn_3').on('click', function(){
       
        $(this).toggleClass('plus_icon_hover');
        $(this).next('div').fadeToggle('popup')
  });
  $('.scaleImg').on('click', function(){
    $(this).find('.popupText').fadeToggle('dispnone');
  })

   /*First MCQ */
   $(".mcq1").find(".options").off().on('click', function(){
    
        $(".mcq1").find(".options").removeClass("active")
        $(this).addClass("active");
        var $that=$(this);
        setTimeout(function(){
            if($that.find("input").is(":checked")){
                $(".submit1").removeClass("disabled");
            }
        }, 50)
        
    });

    $(".submit1").on("click", function(){
        
        var ans=$(this).closest(".mcq1").find(".option_container").find(".options").find("input:checked").attr("data-ans");

        if(ans=='true'){
            $(".mcq1").find(".feedback_container").find(".incorrect_feedback").hide();
            $(".mcq1").find(".feedback_container").show().find(".correct_feedback").show()
            
        }else{
            $(".mcq1").find(".feedback_container").find(".correct_feedback").hide()
            $(".mcq1").find(".feedback_container").show().find(".incorrect_feedback").show()
        }

        $(this).addClass("disabled");

        $(this).closest(".mcq1").find(".option_container .options").addClass("disabled");

        $(".mcq2").show();
    })
    /*First MCQ */


    /*Second MCQ */
    $(".mcq2").find(".options").off().on('click', function(){
        
            $(".mcq2").find(".options").removeClass("active")
            $(this).addClass("active");
            var $that=$(this);
            setTimeout(function(){
                if($that.find("input").is(":checked")){
                    $(".submit2").removeClass("disabled");
                }
            }, 50)
            
        });
    
        $(".submit2").on("click", function(){
            
            var ans=$(this).closest(".mcq2").find(".option_container").find(".options").find("input:checked").attr("data-ans");
    
            if(ans=='true'){
                $(".mcq2").find(".feedback_container").find(".incorrect_feedback").hide();
                $(".mcq2").find(".feedback_container").show().find(".correct_feedback").show()
                
            }else{
                $(".mcq2").find(".feedback_container").find(".correct_feedback").hide()
                $(".mcq2").find(".feedback_container").show().find(".incorrect_feedback").show()
            }
    
            $(this).addClass("disabled");
    
            $(this).closest(".mcq2").find(".option_container .options").addClass("disabled");
            $(".mcq3").show();
        })
        /*Second MCQ */


         /*Third MCQ */
    $(".mcq3").find(".options").off().on('click', function(){
        
            $(".mcq3").find(".options").removeClass("active")
            $(this).addClass("active");
            var $that=$(this);
            setTimeout(function(){
                if($that.find("input").is(":checked")){
                    $(".submit3").removeClass("disabled");
                }
            }, 50)
            
        });
    
        $(".submit3").on("click", function(){
            
            var ans=$(this).closest(".mcq3").find(".option_container").find(".options").find("input:checked").attr("data-ans");
    
            if(ans=='true'){
                $(".mcq3").find(".feedback_container").find(".incorrect_feedback").hide();
                $(".mcq3").find(".feedback_container").show().find(".correct_feedback").show()
                
            }else{
                $(".mcq3").find(".feedback_container").find(".correct_feedback").hide()
                $(".mcq3").find(".feedback_container").show().find(".incorrect_feedback").show()
            }
    
            $(this).addClass("disabled");
    
            $(this).closest(".mcq3").find(".option_container .options").addClass("disabled");
            $(".mcq4").show();
        })
        /*Third MCQ */


    /*Fourth MCQ */
    $(".mcq4").find(".options").off().on('click', function(){
        
            $(".mcq4").find(".options").removeClass("active")
            $(this).addClass("active");
            var $that=$(this);
            setTimeout(function(){
                if($that.find("input").is(":checked")){
                    $(".submit4").removeClass("disabled");
                }
            }, 50)
            
        });
    
        $(".submit4").on("click", function(){
            
            var ans=$(this).closest(".mcq4").find(".option_container").find(".options").find("input:checked").attr("data-ans");
    
            if(ans=='true'){
                $(".mcq4").find(".feedback_container").find(".incorrect_feedback").hide();
                $(".mcq4").find(".feedback_container").show().find(".correct_feedback").show()
                
            }else{
                $(".mcq4").find(".feedback_container").find(".correct_feedback").hide()
                $(".mcq4").find(".feedback_container").show().find(".incorrect_feedback").show()
            }
    
            $(this).addClass("disabled");
    
            $(this).closest(".mcq4").find(".option_container .options").addClass("disabled");
            
        })
        /*Fourth MCQ */


clickAndReveal_arrows.init();
imgNavigation.init();
navigation.init();
accordiantemplate.init();

})

var clickAndReveal_arrows = 
{
    init:function()
    {
        $(".arrow_class").on("click", function(){
            $(this).parent().hide();
            $(this).parent().next().show();
        })
        
        $(".close_popup_arrow").on("click", function(){
            $(this).parent().hide();
            $(this).parent().prev().show();
        })
    }

}

var imgNavigation = 
{
    count:0,
    init:function()
    {
        imgNavigation.buttonEvent();        
        $(".img_prev_Btn").css("opacity",".5");
        $(".img_prev_Btn").css("cursor","default");
    },
    
    buttonEvent: function()
    {
       
      $(".img_next_Btn").on("click", imgNavigation.buttonCallbackfuntionNext)
      $(".img_prev_Btn").on("click", imgNavigation.buttonCallbackfuntionPrev)

    },    
    buttonCallbackfuntionNext: function(event)
    { 
        imgNavigation.count=imgNavigation.count+1; 
           
        if(imgNavigation.count<=9) 
        {
            $(".img_prev_Btn").css("opacity","1");
            $(".img_prev_Btn").css("cursor","pointer"); 
            $(this).parent().parent().parent().parent().hide();
            $(this).parent().parent().parent().parent().next().show();           
            if(imgNavigation.count==9)
            {
                $(".img_next_Btn").css("opacity",".5");
                $(".img_next_Btn").css("cursor","default"); 
            }
        }
        else
        {
            imgNavigation.count= 9
        }
       
    },

    buttonCallbackfuntionPrev: function()
    {         
        imgNavigation.count = imgNavigation.count -1;        
        if(imgNavigation.count>=0) 
        {
            $(".img_next_Btn").css("opacity","1");
            $(".img_next_Btn").css("cursor","pointer"); 
            $(this).parent().parent().parent().parent().hide();
            $(this).parent().parent().parent().parent().prev().show();           
            if(imgNavigation.count==0)
            {
                $(".img_prev_Btn").css("opacity",".5");
                $(".img_prev_Btn").css("cursor","default"); 
            }
        }
        else        
        {
            imgNavigation.count= 0
        }      
    },
}


var navigation =
{
    init:function()
    {
        this.buttonEvent();        
        $("#nextBtn").css("cursor","pointer")
        // $('#nav_1').hide();
        $("#preBtn").css("opacity","0.5"); 
        $("#preBtn").css("opacity","0.5");
        $("#h_0").css("background","#003DA5");      
        
    },
    buttonEvent: function()
    {
      $("#preBtn").on("click", this.buttonCallbackfuntionPrev)
      $("#nextBtn").on("click", this.buttonCallbackfuntionNext)
    },
    buttonCallbackfuntionNext: function()
    { 
        $('#nav_1').show();
        $('#nav_0').hide()  
        $("#preBtn").css("cursor","pointer");  
        $("#nextBtn").css("opacity","0.5");  
        $("#nextBtn").css("cursor","default"); 
        $("#preBtn").css("opacity","1"); 
        $("#h_1").css("background","#003DA5"); 
        $("#h_0").css("background","#666666");     
      
    },

    buttonCallbackfuntionPrev: function()
    { 
        $('#nav_0').show();
        $('#nav_1').hide() 
        $("#preBtn").css("opacity","0.5"); 
        $("#preBtn").css("cursor","default"); 
        $("#nextBtn").css("opacity","1");  
        $("#nextBtn").css("cursor","pointer"); 
        $("#h_1").css("background","#666666"); 
        $("#h_0").css("background","#003DA5");      

      
    },

}

var accordiantemplate = 
{

    init:function()
    {

        $(".collapse.show").each(function () {
            $(this).prev(".card-header").find(".fa")
                .addClass("fa-minus").removeClass("fa-plus");
        });
        // Toggle plus minus icon on show hide
        // of collapse element
        $(".collapse").on('show.bs.collapse', function () {
            $(this).prev(".card-header").find(".fa")
                .removeClass("fa-plus").addClass("fa-minus");
                $(this).prev().find("button").css("color","#9c2e89")
               
        }).on('hide.bs.collapse', function () {
            $(this).prev(".card-header").find(".fa")
                .removeClass("fa-minus").addClass("fa-plus");
                $(this).prev().find("button").css("color","#003DA5")
                
        });


    }

}


