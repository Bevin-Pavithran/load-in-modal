## Load In Modal
This project allows the user load content of a link on a modal. When an user clicks on a link, the content of the link is loaded on an iFrame within the modal. 

## Requirements
jQuery.min.js
boostrap.min.js
boostrap.min.css

## How to use

Sample HTML page: 

```html
<html lang="en">
<head>
  <title>Load In Popup</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <script src="loadinModal.js"></script>
  <script>
    $(document).ready(function () {
      $('.addtomodal').loadInModal();
    });
  </script>
</head>
<body>

<div class="container">
  <a href="http://example.com/" class="btn addtomodal">Example</a><br>
  <a href="http://w3schools.com" class="btn addtomodal">W3ccc</a>
</div>
</body>
</html>
```

Here, `<a></a>` tags with class `addtomodal` is loaded within a modal. 
```js
$(document).ready(function () {
  $('.addtomodal').loadInModal();
});
```

Add class to hyperlink

```html
<a href="http://example.com/" class="btn addtomodal">Example</a><br>
```
