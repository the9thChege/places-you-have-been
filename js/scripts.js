//Business logic
function Destination(place, sights, costs, notes) {
  this.place = place;
  this.sights = sights;
  this.costs = costs;
  this.notes = notes;
}

//UI logic
$(document).ready(function() {
  $(".romania").click(function() {
    $("#romania").show();
    $("#jozi").hide();
    $("#gabon").hide();
    $("#lamu").hide();
    $("#nebraska").hide();
    $("#zimbabwe").hide();
    $("#moon").hide();
    $("#show-place").hide();
  });

  $(".jozi").click(function() {
    $("#jozi").show();
    $("#romania").hide();
    $("#gabon").hide();
    $("#lamu").hide();
    $("#nebraska").hide();
    $("#zimbabwe").hide();
    $("#moon").hide();
    $("#show-place").hide();
  });

  $(".gabon").click(function() {
    $("#gabon").show();
    $("#romania").hide();
    $("#jozi").hide();
    $("#lamu").hide();
    $("#nebraska").hide();
    $("#zimbabwe").hide();
    $("#moon").hide();
    $("#show-place").hide();
  });

  $(".lamu").click(function() {
    $("#lamu").show();
    $("#romania").hide();
    $("#jozi").hide();
    $("#gabon").hide();
    $("#nebraska").hide();
    $("#zimbabwe").hide();
    $("#moon").hide();
    $("#show-place").hide();
  });

  $(".nebraska").click(function() {
    $("#nebraska").show();
    $("#romania").hide();
    $("#jozi").hide();
    $("#gabon").hide();
    $("#lamu").hide();
    $("#zimbabwe").hide();
    $("#moon").hide();
    $("#show-place").hide();
  });

  $(".zimbabwe").click(function() {
    $("#zimbabwe").show();
    $("#romania").hide();
    $("#jozi").hide();
    $("#gabon").hide();
    $("#lamu").hide();
    $("#nebraska").hide();
    $("#moon").hide();
    $("#show-place").hide();
  });

  $(".moon").click(function() {
    $("#moon").show();
    $("#romania").hide();
    $("#jozi").hide();
    $("#gabon").hide();
    $("#lamu").hide();
    $("#nebraska").hide();
    $("#zimbabwe").hide();
    $("#show-place").hide();
  });

  $("form#new-destination").submit(function(event) {
    event.preventDefault();

    var inputLocation = $("input#new-locale").val();
    var inputSights = $("input#new-sights").val();
    var inputCosts = $("input#new-costs").val();
    var inputNotes = $("input#new-notes").val();

    var newDestination = new Destination(inputLocation, inputSights, inputCosts, inputNotes);

    $("ul#places").append("<li><span class='locality'>" + newDestination.place + "</span></li>");

    $("input#new-locale").val("");
    $("input#new-sights").val("");
    $("input#new-costs").val("");
    $("input#new-notes").val("");

    $(".locality").last().click(function() {
      $("#show-place").show();
      $("#moon").hide();
      $("#romania").hide();
      $("#jozi").hide();
      $("#gabon").hide();
      $("#lamu").hide();
      $("#nebraska").hide();
      $("#zimbabwe").hide();
      $("#show-place h2").text(newDestination.place);
      $(".destination").text(newDestination.place);
      $(".sights").text(newDestination.sights);
      $(".costs").text("$" + newDestination.costs);
      $(".notes").text(newDestination.notes);
    });
  });
});
