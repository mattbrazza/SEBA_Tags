/* GET ELEMENTS/DATA NEEDED FOR APPLICATION */
const tagTableBody = document.getElementById('tag-table-body');
const noResultsRow = document.getElementById('no-results-row');
const templateRow = document.getElementById('sample-row-template');
const searchTextInput = document.getElementById('search-text');
const tagCount = document.getElementById('tag-count');
const BASE_TAGS = GLOBAL_ALL_SEBA_TAGS;

/* ADD EVENT-LISTENER(S) FOR SEARCHING */
searchTextInput.addEventListener('keyup', function(evt){
  let searchText = searchTextInput.value.toLowerCase().trim();
  if (searchText.length === 0) {
    displayTags(BASE_TAGS);
    tagCount.textContent = '';
    return;
  }
  
  let searchTerms = searchText.split(' ');

  // TODO: Figure out how to only look at filteredTags after first term for efficiency
  let tags = BASE_TAGS;
  for (var i=0; i<searchTerms.length; i++) {
    tags = filterTags(searchTerms[i], tags);
  }

  displayTags(tags);
  return;
});


/* FUNCTIONS FOR APPLICATIONS */
function filterTags(term, tags){
  let foundTags = [];

  var tagCnt = 0;
  for (var i=0; i<tags.length; i++) {
    if ((tags[i].name.toLowerCase().indexOf(term) > -1) ||
        (tags[i].desc.toLowerCase().indexOf(term) > -1)) {
      tagCnt = foundTags.push(tags[i]);
    }
    tagCount.textContent = (tagCnt > 0) ? 'Found ' + tagCnt + ' tags.' : 'No tags found...';
  }

  return foundTags;
};

function initiatePage(){
  searchText = '';
  searchTextInput.value = '';
  noResultsRow.style.display = 'None';
  return;
};

function displayTags(tags){
  // Clear current tag-rows
  while (tagTableBody.firstChild){
    tagTableBody.removeChild(tagTableBody.firstChild);
  }

  // TODO: If (tags.length == 0) { display no-results-row }

  // Create tag-rows from Filtered Tags with Template
  tags.forEach(function(tag){
    let clone = templateRow.content.querySelector('tr').cloneNode(true);
      clone.getElementsByClassName('tag-name')[0].textContent = tag.name
      clone.getElementsByClassName('tag-desc')[0].textContent = tag.desc
      clone.getElementsByClassName('tag-type')[0].textContent = tag.type

    tagTableBody.appendChild(clone);
    return;
  });
  
  return;
};


/* TESTING */
window.onload = function(){
  initiatePage();
  displayTags(BASE_TAGS);
};


/* BETA TESTING STUFF /
const tagTypeArrow = document.getElementById('tag-type-arrow');
const tagTypeBox = document.getElementById('tag-type-box');
let tagTypeShown = false;
let checkedBoxes = []

tagTypeArrow.addEventListener('click', function(evt){
  tagTypeBox.style.display = (tagTypeShown) ? 'Block' : 'None';
  tagTypeArrow.innerHTML = (tagTypeShown) ? '&#8673;' : '&#8675;';

  tagTypeShown = !tagTypeShown;
  return;
});

tagTypeBox.addEventListener('click', function(evt){
  if (evt.target.type !== 'checkbox') { return; }
  let type = evt.target.value;
  let checked = evt.target.checked; // TRUE=just checked - wants to be seen

  return;
});
*/


