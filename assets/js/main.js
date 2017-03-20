(function ($) {
  var spreadsheetId = "11SfUjhoXnDKTjXofiA3EWtT2sorrIdK8ZZxvGnumRQM";
  var sheetNum = 1;
  var imageFolder = "/assets/img/";

  $.ajax({
    dataType: "json",
    type: "GET",
    url: "http://gsx2json.com/api?id=" + spreadsheetId + "&sheet=" + sheetNum,
    success: function (data) {
      data = data.rows;
      var i = 0;
      var iceaMember = data[i].iceamember;
      var day = data[i].day;
      updateData(i);

      setInterval(function () {
        i === data.length - 1 ? i = 0 : i++;
        updateData(i);
      }, 3000);

      function updateData(i){
        iceaMember = data[i].iceamember;
        day = data[i].day;

        var memberLogo = data[i].memberlogo;
        var month = Math.ceil(day * 30);
        var year = Math.ceil(day * 365);
        var homes = Math.ceil(year / 12);
        var carbon = Math.ceil(year * 2100);

        $('#member-logo').attr('src', imageFolder + memberLogo);
        console.log(imageFolder + memberLogo);
        $('#icea-member').text(iceaMember);
        $('#icea-day').text(day);
        $('#icea-month').text(month);
        $('#icea-year').text(year)
        $('#homes').text(homes)
        $('#carbon').text(carbon)
      }
    }
  });

})(jQuery);