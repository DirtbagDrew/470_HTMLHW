
function formQuantity()
{
  var e=document.getElementById("select2");
  var f = e.options[e.selectedIndex].value;
  if(f=="0")
  {

  }
  else
  {
    document.write('<!DOCTYPE html>');
    document.write('<html lang="en">');
    document.write('<head>');
    document.write('<meta charset="utf-8">');
    document.write('<title>How The Turntables Furniture Store</title>');
    document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
    document.write('<link rel="stylesheet" href="style.css">');
    document.write('');
    document.write('</head>');
    document.write('<body>');
    document.write('<div class="header">');
    document.write('<img src="images/banner.jpg" class="hp"  alt="collage of all the characters from the office">');
    document.write('<div class="banner-title">');
    document.write('<h1>How The Turntables Furniture Store</h1>');
    document.write('</div>');
    document.write('</div>');
    document.write('<div id="nav">');
    document.write('<ul>');
    document.write('<li><a href="furniture.html">Home</a><li>');
    document.write('<li><a href="contact.html">Contact Us</a><li>');
    document.write('<li><a href="order.html">Order</a><li>');
    document.write('</ul>');
    document.write('</div>');
    document.write('<div class="row">');
    document.write('<div class="leftcolumn">');
    document.write('<br>');
    document.write('</div>');
    document.write('<div class="centercolumn">');
    document.write('<h1>Customize Order</h1>');
    document.write('<p></p>');
    document.write('<form>');

    for(var i=0;i<f;i++)
    {
      var j=i+1;
      document.write('<div class="inventory-item">');
      document.write('<label for="select2">Piano Table '+j+'</label>');
      document.write('<img src="images/t1.JPG" class="checkbox-image" alt="table 1">');
      document.write('<p>Preferred Color</p>');
      document.write('<select size=3 name="select2" id="select2">');
      document.write('<option value="0">Mahogany</option>');
      document.write('<option value="1">Maple</option>');
      document.write('<option value="2">Pine</option>');
      document.write('<option value="3">Oak</option>');
      document.write('</select>');
      document.write('</div>');
    }
    document.write('</form>');
    document.write('</div>');
    document.write('<div class="rightcolumn">');
    document.write('<br>');
    document.write('</div>');
    document.write('</div>');
    document.write('<div id="footer">');
    document.write('Latest Update: <!--#echo var="LAST_MODIFIED"-->');
    document.write('<br>');
    document.write('<a href=mailto:andrew.myer@student.csulb.edu >andrew.myer@student.csulb.edu</a>');
    document.write('</div>');
    document.write('</body>');
    document.write('</html>');
  }
}
