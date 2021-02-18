import {createDataList} from './data.js';

const templateFragment = document.querySelector('#picture').content;

const template = templateFragment.querySelector('a');

const fragment = document.createDocumentFragment();

for (let i = 0; i < createDataList.length; i++) {
  const element = template.cloneNode(true);
  element.children[0].src = createDataList[i].url;
  element.children[1].children[0].textContent = '';
  element.children[1].children[1].textContent = '';
  fragment.appendChild(element);
}
