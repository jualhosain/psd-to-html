$(function(){



       //smoth scroll for ie edge etc brower

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
        if (this.hash !== "") {
          event.preventDefault();
    
          var hash = this.hash;
          console.log(hash)
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            window.location.hash = hash;
          });
        } 
      });

    //   end scroll 

    // Remove svg.radial-progress .complete inline styling
    $('svg.radial-progress').each(function( index, value ) { 
        $(this).find($('circle.complete')).removeAttr( 'style' );
    });

    // Activate progress animation on scroll
    $(window).scroll(function(){
        $('svg.radial-progress').each(function( index, value ) { 
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if ( 
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
            }
        });
    }).trigger('scroll');
    

    $('.webdesign').rProgressbar({
        percentage: 95,
        fillBackgroundColor: '#1abc9c'
    });
    $('.graphics').rProgressbar({
        percentage: 65,
        fillBackgroundColor: '#ffd728'
    });



    $('.wordpress').rProgressbar({
        percentage: 90,
        fillBackgroundColor: '#9b59b6'
    });



    $('.ui').rProgressbar({
        percentage: 65,
        fillBackgroundColor: '#1994f8',
    });
    
   var mixer = mixitup(' .mixclass');
   let nav = document.querySelector('nav');

    window.addEventListener('scroll',function(){
        let num = window.scrollY;
        if(num >= 100){
            console.clear();
             nav.classList.add('sticky');
             console.log(num + 'sticky')
        }else{
            console.clear();
            nav.classList.remove('sticky');
            console.log(num+ 'remove')
        }
    });

    window.addEventListener('resize',function(){
        let width= window.innerWidth;
        if(width >= 768 ){
            
        }else{

        }
    });


    // menu

    var menuOpen = document.querySelector('.menuMenu i');
    var menuClose = document.querySelector('.menuitems i');
    var menuitems= document.querySelector('.menuitems');
    var menulink = document.querySelectorAll('.menuitems a')

    menuOpen.addEventListener('click', function(){
        menuitems.style.transform="translateX(0%)";
    });

    menuClose.addEventListener('click', function(){
        menuitems.style.transform="translateX(-100%)";
    });

    for(let x=0; x<menulink.length; x++){
        menulink[x].addEventListener('click', function(){
            menuitems.style.transform="translateX(-100%)";
        });
    }

});