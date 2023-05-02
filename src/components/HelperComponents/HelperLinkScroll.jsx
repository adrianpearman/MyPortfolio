// NPM Modules
import { scroller, animateScroll as scroll, Events, scrollSpy } from "react-scroll"
import { useEffect } from "react"

const HelperLinkScroll = ({ className, height, id, linkName, scrollToElement, }) => {

  useEffect(() => {
     Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', to, element, arguments);
    });

    

    Events.scrollEvent.register('end', function(to, element) {
      console.log(arguments)
      console.log('end', to, element, arguments);
    });

    scrollSpy.update();
  }, [])

  const handleMoveOnKeyPress = (e) => {
    const elementHeight = height !== undefined ? -height : -50
    const options = {
        duration: 50,
        offset: elementHeight,  
        smooth: true,
        spy: true,
      }
    if(e.type === "click"){
      scroller.scrollTo(scrollToElement, options)
    }else if(e.key === "Enter"){
      // Will need to figure out a way to programmatically call this function  when the enter key is pressed
      // scroller.scrollTo(scrollToElement, options)
    }
  }

  return(
    <a 
      className={className}
      id={id}
      onClick={(e) => { handleMoveOnKeyPress(e) }}
      onKeyDown={(e) => { handleMoveOnKeyPress(e) }}
      tabIndex={0} 
    >
      { linkName}
    </a>
  )
}

export default HelperLinkScroll;