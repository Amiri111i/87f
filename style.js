alert("пис")
const mySplitText = new SplitText('body', {type:"chars", position: "relative" }); 
// gsap.to(mySplitText.chars, {fontWeight: 900, duration: 5})
setTimeout(() => {
  gsap.timeline({ yoyo: true, repeat: -1, repeatDelay: 0.5, delay: 1})
    .to(mySplitText.chars, { 
      duration: .2,
      fontWeight: 900, 
      color: '#146EF5', 
      scale:.7,
      y: 6,
      ease: 'power2.in',
      rotation: '360deg',
      stagger:{ 
        grid: [14,14], 
        amount: .8, 
        from: 'center',
      } 
    })
    .to(mySplitText.chars, { 
      duration: .4,
      fontWeight: 200,  
      color: '#fff',
      scale: 1,
      y: 0,
      rotation: '720deg',
      ease: 'power3.inOut',
      stagger:{ 
        grid: [14,14], 
        amount: .8, 
        from: 'center'
      } 
    }, '-=.3')
}, 500)
