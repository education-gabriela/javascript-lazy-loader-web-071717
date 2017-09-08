"use strict";
let page = 3;
// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars (cars) {
  const div = $("<div>");
  div.addClass("rows");
  cars.forEach(function (car) {
    let divColumn = $("<div>").addClass("col-md-4 car");

    $("<h2>").text(car.Make).appendTo(divColumn);

    let model = $("<p>");
    $("<strong>").text("Model:").appendTo(model);
    model.append(" " + car.Model);
    model.appendTo(divColumn);

    let year = $("<p>");
    $("<strong>").text("Year:").appendTo(year);
    year.append(" " + car.Year);
    year.appendTo(divColumn);

    divColumn.appendTo(div);
  });

  return "<div class=\"row\">" + div.html() + "</div>";
}

function addCarsToDOM (carsJSON) {
    let div = formatCars(carsJSON);
    $("#cars").append(div);
}

function fetchJSON () {
  $.ajax({
    url: baseUrl + page + "/3/",
    contentType: "application/jsonp",
    dataType: "jsonp",
    type: "GET",
    success: function (data) {
      addCarsToDOM(data);
      page++;
    }
  });
}
