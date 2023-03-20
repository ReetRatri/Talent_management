$(document).ready(function(){
    
    // gobind code 27-12-2022
    var flag = false;
    $("#toggleBtn").click(function(){        
        
        $(".bottombar").toggle();
        if(flag==false)
        {
            $(this).addClass("open").removeClass("bgimage");            
            flag = true;
        }
        else
        {
            flag =false;
            $(this).removeClass("open").addClass("bgimage");
        }
        
      });

      
      $(".pmi").click(function(){        
        
        $("#menu_home01").show();
        $("#menu_home02").hide();
        
        
      });

      $(".third_party").click(function(){        
        
        $("#menu_home02").show();
        $("#menu_home01").hide();
        
        
      });

    /////
    $(".link ").on("mouseover",function()
    {
        $(this).find('img').attr("src","Article01/assets/images/Read_More_Btn_Hover.png")
        $(this).find('.link_Btn_caption').css("color","#000")
        
    })

    $(".link").on("mouseout",function()
    {
        $(this).find('img').attr("src","Article01/assets/images/Read_More_Btn.png")
        $(this).find('.link_Btn_caption').css("color","#FFF")
    })
   
    $(".link_img_000").on("mouseover",function()
    {
        $(this).attr("src","Article01/assets/images/Learner_arrow_Hover.png")
    })

    $(".link_img_000").on("mouseout",function()
    {
        $(this).attr("src","Article01/assets/images/Learner_arrow_Normal.png")
    })


    $(".link_img2").on("mouseover",function()
    {
        $(this).attr("src","assets/images/Arrow_hover_Left.png")
    })

    $(".link_img2").on("mouseout",function()
    {
        $(this).attr("src","assets/images/Arrow Normal Left_A3.png")
    })


    $(".link_img").on("mouseover",function()
    {
        $(this).attr("src","Article01/assets/images/Arrow_hover.png")
    })

    $(".link_img").on("mouseout",function()
    {
        $(this).attr("src","Article01/assets/images/Arrow Normal Right_A3.png")
    })

  $('#popup_btn_1, #popup_btn_2').on('click', function(){
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

        videoplayer.init();
      //  navigation.init();
       clickAndRevealActivity.init();
       accordiantemplate.init();
      // slide.init()
        
})


var videoplayer =
{
    init:function()
    {
        this.buttonEvent();
    },
    buttonEvent: function()
    {
      $(".video_icon_btn").on("click", this.buttonCallbackfuntion)
      $(".video_popup_close").on("click", this.closeVideo)
    },
    buttonCallbackfuntion: function()
    { 
        $('#video_pmi').get(0).play();         
        $(".video_player").show();
        $(".video_base").hide();
    },
    closeVideo:function()
    {
        $(".video_player").hide();
        $(".video_base").show();
        $('#video_pmi').get(0).pause()     
    }
}

// var navigation =
// {
   

//     init:function()
//     {
//         this.buttonEvent();        
//         $("#nextBtn").css("cursor","pointer")
//        // $('#nav_1').hide();
//         $("#preBtn").css("opacity","0.5"); 
//         $("#preBtn").css("opacity","0.5");
//         $("#h_0").css("background","#1D9ADD");      
        
//     },
//     buttonEvent: function()
//     {
//      $("#preBtn").on("click", this.buttonCallbackfuntionPrev)
//      $("#nextBtn").on("click", this.buttonCallbackfuntionNext)
    
//     },
//     buttonCallbackfuntionNext: function()
//     { 
      
//         $('#nav_1').css("display","flex");
//         $('#nav_0').hide()  
//         $("#preBtn").css("cursor","pointer");  
//         $("#nextBtn").css("opacity","0.5");  
//         $("#nextBtn").css("cursor","default"); 
//         $("#preBtn").css("opacity","1"); 
//         $("#h_1").css("background","#1D9ADD"); 
//         $("#h_0").css("background","#666666");     
      
//     },

//     buttonCallbackfuntionPrev: function()
//     { 
//         $('#nav_0').show();
//         $('#nav_1').hide() 
//         $("#preBtn").css("opacity","0.5"); 
//         $("#preBtn").css("cursor","default"); 
//         $("#nextBtn").css("opacity","1");  
//         $("#nextBtn").css("cursor","pointer"); 
//         $("#h_1").css("background","#666666"); 
//         $("#h_0").css("background","#1D9ADD");      

      
//     },

// }

var clickAndRevealActivity = 
{
    imageshover:[],
    imagesNormal:[],
    imagesVisted:[],

    init:function()
    {
        this.imageshover = ["Ecosystem_Hover","Organization_Hover","Team_Hover","Leader_Hover","Individual_Hover"]
        this.imagesNormal = ["Ecosystem_Normal","Organization_Normal","Team_Normal","Leader_Normal","Individual_Normal"]
        this.imagesViseted = ["0","0","0","0","0"]
        this.buttonEvent(); 
        $(".inner_area_goldenRule .img1000").css('cursor','pointer')        
    },
    buttonEvent: function()
    {
      $(".inner_area_goldenRule .img1000").on("click", this.buttonCallbackfuntion)

      $(".inner_area_goldenRule .img1000").on("mouseover", this.buttonOver)
      $(".inner_area_goldenRule .img1000").on("mouseout", this.buttonOut)
      
    }    
    ,
    buttonCallbackfuntion: function()
    {      
       
        $(this).parent().next().next().next().show();
        var no = $(this).attr('id').split("_")[1];       
        $(this).attr("src","assets/images/"+clickAndRevealActivity.imageshover[no]+".png")
        clickAndRevealActivity.imagesViseted[no] = "1";
        $(this).css("cursor","default");
     
      
    },
    buttonOver:function()
    {
        var no = $(this).attr('id').split("_")[1];       
        $(this).attr("src","assets/images/"+clickAndRevealActivity.imageshover[no]+".png")
    },
    buttonOut:function()
    {
        var no = $(this).attr('id').split("_")[1];
        if(clickAndRevealActivity.imagesViseted[no] == "0")
        {
            
            $(this).attr("src","assets/images/"+clickAndRevealActivity.imagesNormal[no]+".png")
        }
        
    }

   

}

var slide = 
{


    init:function()
    {

        const slider = document.querySelector('.items');
        let isDown = false;
        let startX;
        let scrollLeft;
      
        slider.addEventListener('mousedown', (e) => {
          isDown = true;
          slider.classList.add('active');
          startX = e.pageX - slider.offsetLeft;
          scrollLeft = slider.scrollLeft;
          console.log("erreerre", scrollLeft)
        });
      
        slider.addEventListener('mouseleave', () => {
          isDown = false;
          slider.classList.remove('active');
        });
      
        slider.addEventListener('mouseup', () => {
          isDown = false;
          slider.classList.remove('active');
        });
      
        slider.addEventListener('mousemove', (e) => {
          if (!isDown) return;  // stop the fn from running
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;
          const walk = (x - startX) * 2;
          slider.scrollLeft = scrollLeft - walk;
          
          console.log('sdsd', scrollLeft)
          console.log(slider.scrollLeft)
        });
      
      
      //   touchEvents
      
        slider.addEventListener('touchstart', (e) => {
          isDown = true;
          slider.classList.add('active');
          startX = e.pageX - slider.offsetLeft;
          scrollLeft = slider.scrollLeft;
        });
      
        slider.addEventListener('touchend', () => {
          isDown = false;
          slider.classList.remove('active');
        });
      
        slider.addEventListener('touchcancel', () => {
          isDown = false;
          slider.classList.remove('active');
        });
      
        slider.addEventListener('touchmove', (e) => {
          if (!isDown) return;  // stop the fn from running
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;
          const walk = (x - startX) * 2;
          slider.scrollLeft = scrollLeft - walk;
        });

    }
}

var accordiantemplate = 
{

    init:function()
    {

        $(".collapse.show").each(function () {
            $(this).prev(".card-header").find(".fa")
                .addClass("fa-angle-up").removeClass("fa-angle-down");
        });
        // Toggle plus minus icon on show hide
        // of collapse element
        $(".collapse").on('show.bs.collapse', function () {
            $(this).prev(".card-header").find(".fa")
                .removeClass("fa-angle-down").addClass("fa-angle-up");
                $(this).prev().find("button").css("color","white")
               
        }).on('hide.bs.collapse', function () {
            $(this).prev(".card-header").find(".fa")
                .removeClass("fa-angle-up").addClass("fa-angle-down");
                $(this).prev().find("button").css("color","white")
                
        });


    }

}

