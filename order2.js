function finalCheckout()
{
  var s1cc=document.getElementsByClassName("select1Color");
  s1c=s1cc;
  var s2cc=document.getElementsByClassName("select2Color");
  s2c=s2cc;
  var s3cc=document.getElementsByClassName("select3Color");
  s3c=s3cc;
  var s4cc=document.getElementsByClassName("select4Color");
  s4c=s4cc;

  document.open();

  alert(s1c.length);

  var subtotal=0;
  var total=0;
  document.write('<!DOCTYPE html>');
  document.write('<html lang="en">');
  document.write('<head>');
  document.write('<meta charset="utf-8">');
  document.write('<title>How The Turntables Furniture Store</title>');
  document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
  document.write('<link rel="stylesheet" href="style.css">');
  document.write('<script src="order2.js"></script>');
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

  if(s1c.length==0)
  {

  }
  else
  {
    for(var i=0;i<s1c.length;i++)
    {
      document.write('Round Stool: ');
      document.write(s1c[i].value);
      document.write(' $20<br>');
      subtotal=subtotal+20;
    }
  }
  if(s2c.length==0)
  {

  }
  else
  {
    for(var i=0;i<s2c.length;i++)
    {
      document.write('Piano Table: ');
      document.write(s2c[i].value);
      document.write(' $30<br>');
      subtotal=subtotal+30;
    }
  }
  if(s3c.length==0)
  {

  }
  else
  {
    for(var i=0;i<s3c.length;i++)
    {
      document.write('Bench Table: ');
      document.write(s3c[i].value);
      document.write(' $40<br>');
      subtotal=subtotal+40;
    }
  }
  if(s4c.length==0)
  {

  }
  else
  {
    for(var i=0;i<s4c.length;i++)
    {
      document.write('Stool Table: ');
      document.write(s4c[i].value);
      document.write(' $10<br>');
      subtotal=subtotal+10;
    }
  }
document.write('subtotal: $'+subtotal +'<br>');
document.write('shipping options')

document.write('<select name="travel_arriveVia" id="travel_arriveVia" onchange="showfield(this.options[this.selectedIndex].value,'+subtotal+')">');
document.write('<option selected="selected">Please select ...</option>');
document.write('<option value="Standard">Standard</option>');
document.write('<option value="Pickup">Pickup</option>');
document.write('</select>');
document.write('<div id="div1"></div>');

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

function showfield(name, subtotal)
{
  if(name=='Standard')
  {
    document.getElementById('div1').innerHTML='Shipping Address: <input type="text" name="other" />';
    total=subtotal+50;
  }
  else
  {
    document.getElementById('div1').innerHTML='';
    total=subtotal;
  }
}
