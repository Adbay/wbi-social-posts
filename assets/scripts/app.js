$(function() {
  // load the widget configuration
  var config = new WidgetConfig();
  config.on("config-initialized", function(event, data) {
    //$("#output").text(config.preferences["Article Number"]);
    //load the page
    $.get(config.preferences["Feed"], "", function(data, textStatus, jqXHR) {
      console.log(data);
      var randomIndex = get_random(data);
      $("#photo").attr("src", data[randomIndex][3]);
      $("#title").text(data[randomIndex][2]);
      $("#message").text(data[randomIndex][4]);
    });
  });
  config.on("config-error", function() {
    $("#output").text("Error loading preferences");
  });
  config.init();
});

function get_random(myList) {
  return Math.floor(Math.random() * 72);
}
