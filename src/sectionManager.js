import { Linter } from 'eslint';
import lineStorage from './storage/lineStorage.js';
import {SECTION_MANAGER_PAGE_TEMPLATE, SECTION_REGISTER_FORM_TEMPLATE} from './view/sectionTemplate.js'

const makeLineButtonView = (lines) => {
  let lineButtonTemplate = '';
  lines.forEach((line) => {
    lineButtonTemplate = lineButtonTemplate + `<button class="section-line-menu-button" data-lineName=${line.name}>${line.name}</button> &nbsp`;
  })
  return lineButtonTemplate;
}

export default function sectionManagerPage(contentSectionTag) {
  contentSectionTag.innerHTML = SECTION_MANAGER_PAGE_TEMPLATE;

  let lines = lineStorage().getLine();
  let sectionSelectContainer = document.getElementById('section-selector-container');
  let sectionRegisterContainer = document.getElementById('section-register-container');
  sectionSelectContainer.innerHTML = makeLineButtonView(lines);

  let sectionLineMenuButton = document.getElementsByClassName('section-line-menu-button');
  sectionSelectContainer.addEventListener('click', function(e) {
    // console.log(e.target.dataset.linename);
    // let lineName = e.target.dataset.linename;
    sectionRegisterContainer.innerHTML = SECTION_REGISTER_FORM_TEMPLATE;
    // let lineTitle = document.getElementById('line-title').innerText;
    // lineTitle = lineName;
  })

  
}

export {sectionManagerPage};