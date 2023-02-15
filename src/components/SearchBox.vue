<script>
export default {
  name: "SearchBox",
};
let options = {
  searchOptions: {
    key: "3F5S2fGQztQekbPuQKbDAXBaFTJa7prv",
    language: "it-IT",
    limit: 5,
  },
  autocompleteOptions: {
    key: "3F5S2fGQztQekbPuQKbDAXBaFTJa7prv",
    language: "it-IT",
  },
};
let ttSearchBox = new tt.plugins.SearchBox(tt.services, options);
let searchBoxHTML = ttSearchBox.getSearchBoxHTML();
searchBoxHTML.setAttribute("id", "my-search-box");
document.body.append(searchBoxHTML);

tt.setProductInfo("geographic-coordinates");
</script>
<template>
  <div id="my-search-box"></div>
</template>

<style>
#my-search-box {
  position: absolute;
  top: 500px;
  left: 50%;
  width: 20%;
}
</style>
