import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faBars, faXmark, faCaretDown, faSpinner, faFilter, faBook } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {faInstagram, faFacebook, faTelegram} from "@fortawesome/free-brands-svg-icons"

library.add(faBars, faUser, faPlus, faXmark, faCaretDown, faSpinner, faFilter, faBook, faFacebook, faInstagram, faTelegram);

export { FontAwesomeIcon };
