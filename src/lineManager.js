import {LINE_MANAGER_PAGE_TEMPLATE} from './view/lineTemplate.js'

export default function lineManagerPage(contentSectionTag) {
  contentSectionTag.innerHTML = LINE_MANAGER_PAGE_TEMPLATE;
}

export {lineManagerPage}