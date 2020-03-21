'use strict';
(function(){
  var searchLabel = document.querySelector('.search__form-searching-label');
  var searchInput = document.querySelector('.search__form-searching-input');

  searchLabel.addEventListener('click', onDisplaySearchInput);
  searchInput.addEventListener('blur', onHideSearchInput);

  function onDisplaySearchInput(){
    searchInput.classList.add("search__form-searching-input--visible");
    searchLabel.classList.remove("search__form-searching-label--visible");
  };
  function onHideSearchInput(){
    searchInput.classList.remove("search__form-searching-input--visible");
    searchLabel.classList.add("search__form-searching-label--visible");
  };
})();
