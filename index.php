<!DOCTYPE html>
<html lang="en">
<head>
  <title>Load In Popup</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <script src="loadinModal.js"></script>
  <link rel="stylesheet" href="loadinModal.css">
  <script>
    $(document).ready(function () {
      $('.addtomodal').loadInModal(function(){
        $('#iframeinmodal').on('load',function () {
          $('#siteloader-content').hide();
        });
      });
    });
  </script>
</head>
<body>
<div class="container">
  <a href="http://example.com" class="btn addtomodal">Example</a><br>
  <a href="http://w3schools.com" class="btn addtomodal">W3ccc</a>

</body>
</html>
