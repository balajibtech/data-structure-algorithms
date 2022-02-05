const list = [
    {"dir":"anagrams","name":"Anagrams"},
    {"dir":"BinaryHeap","name":"Binary Heap"},
    {"dir":"binarySearch","name":"Binary Search"},
    {"dir":"BinarySearchTree","name":"Binary Search Tree"},
    {"dir":"caesarCipher","name":"Caesar Cipher"},
    {"dir":"capitalize","name":"Capitalize"},
    {"dir":"chunk","name":"Chunk"},
    {"dir":"diagrams","name":"Diagrams"},
    {"dir":"fizzbuzz","name":"Fizz Buzz"},
    {"dir":"Graph","name":"Graph"},
    {"dir":"HashTable","name":"Hash Table"},
    {"dir":"linearSearch","name":"Linear Search"},
    {"dir":"linked-list","name":"Linked List"},
    {"dir":"maxChar","name":"Max Character"},
    {"dir":"merge","name":"Merge"},
    {"dir":"oddsGreaterThan100","name":"Odds Greated Than 100"},
    {"dir":"palindrome","name":"Palindrome"},
    {"dir":"priorityQueue","name":"Priority Queue"},
    {"dir":"pyramid","name":"Pyramid"},
    {"dir":"queue","name":"Queue"},
    {"dir":"reverseInt","name":"Reverse Integer"},
    {"dir":"reverseString","name":"Reverse String"},
    {"dir":"sorting","name":"Sorting"},
    {"dir":"stack","name":"Stack"},
    {"dir":"steps","name":"Steps"},
    {"dir":"stringPatternSearch","name":"String Pattern Search"},
    {"dir":"Tree","name":"Tree"},
    {"dir":"TwoSumFromArray","file":"index.js","name":"Two sum on Array"},
    {"dir":"vowels","name":"Vowels"},
];

function loaded(url) {
    let element = document.getElementById('scriptid');
    if (element != null) element.removeElement;
    element = document.createElement("script");
    element.src = url;
    element.type = "text/javascript";
    element.id = "scriptid";
    document.getElementsByTagName("body")[0].appendChild(element);
}

(function(){
    const listContainer = document.getElementById("list");
    const dir = window.location.search.replace("?","");
    let file = './twoSum.js';
    list.map((value)=>{
        value.file = value.file ? value.file : "index.js";
        value.file = value.dir+"/"+value.file;
        if(dir == value.dir) file = value.file; 
        const link = "<li><a href='?"+value.dir+"'>"+value.name+"</a></li>";
        listContainer.insertAdjacentHTML('beforeend', link);
    });
    loaded(file);
})();