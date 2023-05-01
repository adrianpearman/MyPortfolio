// NPM Modules
import { Link } from "react-scroll"

const HelperLinkScroll = ({ 
  className,
  height, 
  id,
  linkName, 
  scrollToElement, 
}) => {
  return(
    <Link
      className = { className }
      duration = { 50 }
      id = { id }
      offset = { height ? -height : -50 }
      smooth = { true }
      spy = { true }
      to = { scrollToElement }
    >
      { linkName }
    </Link>
  )
}

export default HelperLinkScroll