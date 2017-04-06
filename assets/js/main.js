(function ($) {
  var spreadsheetId = "11SfUjhoXnDKTjXofiA3EWtT2sorrIdK8ZZxvGnumRQM";
  var sheetNum = 1;
  var imageFolder = "/assets/img/";
  var i = 0;

  $.ajax({
    dataType: "json",
    type: "GET",
    url: "https://spreadsheets.google.com/feeds/list/" + spreadsheetId + "/" + sheetNum + "/public/values?alt=json",
    success: function (data) {
      data = data.feed.entry;


      updateData(i);

      setInterval(function () {
        i === data.length - 1 ? i = 0 : i++;
        updateData(i);
      }, 3000);

      function updateData(i) {
        var iceaMember = iceaMember = data[i]["gsx$iceamember"]["$t"];
        var day = data[i]["gsx$day"]["$t"];
        var nameplateCapacity = data[i]["gsx$nameplatecapacity"]["$t"];
        var capacityFactor = data[i]["gsx$capacityfactor"]["$t"];
        var memberLogo = data[i]["gsx$memberlogo"]["$t"];
        var month = Math.ceil(day * 30);
        var year = Math.ceil(day * 365);
        var homes = Math.ceil(year / 12);
        var carbon = Math.ceil(year * 2100);

        var vendorTotal = data[i]["gsx$total"]["$t"];
        var homesTotal = Math.ceil(vendorTotal / 12);
        var carbonTotal = Math.ceil(vendorTotal * 2100);

        console.log(vendorTotal);
        console.log(homesTotal);
        console.log(carbonTotal);

        $('#member-logo').attr('src', imageFolder + memberLogo);
        $('#icea-member').text(iceaMember);
        $('#icea-day').text(day);
        $('#icea-month').text(month);
        $('#icea-year').text(year);
        $('#homes').text(homes);
        $('#carbon').text(carbon);
        $('#carbon-total').text(carbonTotal);
        $('#homes-total').text(homesTotal);
        
      }
    }
  });

})(jQuery);