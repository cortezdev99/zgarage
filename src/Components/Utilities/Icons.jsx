// fas icons
import {
  faHome,
  faTag,
  faIdCard,
  faImages,
  faPaw,
  faPhone,
  faMapPin
} from "@fortawesome/free-solid-svg-icons";

// far icons
import {
  faCalendarCheck
} from "@fortawesome/free-regular-svg-icons";

// fab icons
import { 
  faFacebookSquare,
  faInstagram
} from '@fortawesome/free-brands-svg-icons' 

import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
     faHome,
     faCalendarCheck,
     faTag,
     faIdCard,
     faImages,
     faPaw,
     faPhone,
     faMapPin,
     faFacebookSquare,
     faInstagram
  );
};

export default Icons;