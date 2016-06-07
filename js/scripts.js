var countUpBy = function(countBy,max){
  var countArray = [];
  for (var index = 1; (index * countBy) <= max; index ++) {
    countArray.push(countBy * index);
  }
  return countArray;
}


$(document).ready(function() {
  $("form#countForm").submit(function(event) {
    event.preventDefault();
    var countBy = $("#countFactor").val();
    var countMax = $("#countMax").val();
    var resultArray = countUpBy(countBy,countMax);
    var result = resultArray.toString();
    var newResult = result.replace(/,/g, ', ');
    $(".output").text(newResult);


  });
});
