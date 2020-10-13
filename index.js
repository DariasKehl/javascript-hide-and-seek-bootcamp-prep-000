function getFirstSelector(selector) { 
  return document.querySelector(selector);
}

function nestedTarget() {
  //const div4 = document.querySelector('ul.unranked-list li div')
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
    var ranks = document.querySelectorAll('ul.ranked-list li');
    for (var i = 0; i < ranks.length; i++) {
      ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
    }
// https://github.com/learn-co-students/
// javascript-hide-and-seek-v-000/pull/4/files
// Referenced.

}
/*
function deepestChild() {
  var grandNode = document.querySelector('#grand-node');
  var deepestNode = grandNode.children[0];
  for (var i = 0; !deepestNode.children[i]; i) {
    deepestNode = deepestNode.children[0]
  }
  return deepestNode;
}
*/

// From assistant
function deepestChild() {
    let node = document.getElementById('grand-node')
    let nextNode = node.children[0]
  
    while (nextNode) {
      node = nextNode
      nextNode = node.children[0]
    }
  
    return node
  }