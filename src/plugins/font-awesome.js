import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

import { faAddressBook, faAngleLeft, faBan, faBell, faCheck, faCheckSquare, faCloud, faDownload, faEdit, faEnvelope,
    faEraser, faExchangeAlt, faEye, faList, faLock, faLockOpen, faMinus, faPaperPlane, faPhone, faPlus, faQuestionCircle,
    faSave, faSearch, faSignature, faSignOutAlt, faTimes, faToggleOff, faToggleOn, faTrashAlt, faUpload, faUser, faUsers,
    faUserCircle, faFilePdf, faFileImage, faCloudUploadAlt, faLayerGroup, faUserPlus, faCalendarCheck, faFileAlt, faCubes, faBoxOpen, faBars,
    faSignInAlt, faHome, faThLarge, faArrowDown, faBorderAll, faPuzzlePiece, faAlignCenter, faFilter, faCompress, faTable, faCalendarAlt,
    faVials, faDesktop, faFile, faGlobe, faStar, faDatabase, faTasks, faAngleRight, faHandPointLeft, faChartBar, faFileArchive,
    faKeyboard, faStickyNote, faExclamation, faImages } from '@fortawesome/free-solid-svg-icons';

import { faTwitter, faDyalog } from '@fortawesome/free-brands-svg-icons';

library.add(faAddressBook, faAngleLeft, faBan, faBell, faCheck, faCheckSquare, faCloud, faDownload, faEdit, faEnvelope,
    faEraser, faExchangeAlt, faEye, faList, faLock, faLockOpen, faMinus, faPaperPlane, faPhone, faPlus, faQuestionCircle,
    faSave, faSearch, faSignature, faSignOutAlt, faTimes, faToggleOff, faToggleOn, faTrashAlt, faUpload, faUser, faUsers, faCalendarAlt,
    faUserCircle, faFilePdf, faFileImage, faCloudUploadAlt, faLayerGroup, faUserPlus, faCalendarCheck, faFileAlt, faCubes, faBoxOpen, faBars,
    faSignInAlt, faHome, faThLarge, faArrowDown, faBorderAll, faPuzzlePiece, faAlignCenter, faFilter, faCompress, faTable, faFileArchive,
    faVials, faDesktop, faFile, faGlobe, faStar, faDatabase, faTasks, faTwitter, faAngleRight, faHandPointLeft, faChartBar, faDyalog,
    faKeyboard, faStickyNote, faExclamation, faImages);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);