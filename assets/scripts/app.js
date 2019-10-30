$(function() {
  // load the widget configuration
  var config = new WidgetConfig();
  config.on("config-initialized", function(event, data) {
    //$("#output").text(config.preferences["Article Number"]);
    //load the page
    $.get(config.preferences["Feed"], "", function(data, textStatus, jqXHR) {
      if (data[0][3] == "") {
        data[0][3] = "media/default.png";
      }
      $("#photo").attr("src", data[0][3]);
      $("#title").text(data[0][2]);
      $("#message").text(data[0][4]);
    });
  });
  config.on("config-error", function() {
    $("#output").text("Error loading preferences");
  });
  config.init();
});
