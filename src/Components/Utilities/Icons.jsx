// fas icons
import {
  faBars,
  faChevronUp,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
  faPlus,
  faTrashAlt,
  faSearchPlus,
  faPhoneVolume,
  faExclamation
} from "@fortawesome/free-solid-svg-icons";

// far icons
import {
    faCopyright,
    faSquare,
    faCheckSquare,
    faClock
  } from "@fortawesome/free-regular-svg-icons";

// fab icons
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons' 

import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faBars,
    faInstagram,
    faFacebookF,
    faTwitter,
    faCopyright,
    faChevronUp,
    faChevronDown,
    faChevronLeft,
    faSquare,
    faCheckSquare,
    faChevronRight,
    faPlus,
    faTrashAlt,
    faSearchPlus,
    faPhoneVolume,
    faClock,
    faExclamation
  );
};

export default Icons;