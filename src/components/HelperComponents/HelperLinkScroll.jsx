// NPM Modules
import { Link } from "react-scroll"

const HelperLinkScroll = ({ scrollToElement, linkName, height }) => {
  return(
    <Link
      to={ scrollToElement }
      spy={ true }
      smooth={ true }
      offset={ height ? -height : -50 }
      duration={ 50 }
    >
      { linkName }
    </Link>
  )
}

export default HelperLinkScroll