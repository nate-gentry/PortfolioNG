new fullpage('#fullpage', {
    autoScrolling:true,
    navigation: true,
    licenseKey:null,
    anchors: ['section1','section2','section3','section3','section5',],
    navigationTooltips: ['Intro','What I do','What I do2', 'My story','Get in touch'],
    showActiveTooltips : true,
    scrollingSpeed: 1500,


   onLeave:(origin, destination,direction)=>{
       const section =destination.item
       const title = section.querySelectorAll('h1')

    //    const tl = new TimelineMax({ delay : 0.5})
    //    console.log(tl.formTo())
    //    tl.fromTo(title, 1.5, {y : "50", opacity : 0},{y : 0, opacity : 1} )
    if (destination.index === 1){
        const title = section.querySelectorAll('h1')


    }
      
   }
})

