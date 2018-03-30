function finalCheckout()
{
  var s1c=document.getElementsByClassName("select1Color");
  var s2c=document.getElementsByClassName("select2Color");
  var s3c=document.getElementsByClassName("select3Color");
  var s4c=document.getElementsByClassName("select4Color");
  var subtotal=0;

  var myWindow = window.open('', '_blank');
  myWindow.focus();
  //myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
  myWindow.document.write('<!DOCTYPE html>');
  myWindow.document.write('<html lang="en">');
  myWindow.document.write('<head>');
  myWindow.document.write('<meta charset="utf-8">');
  myWindow.document.write('<title>How The Turntables Furniture Store</title>');
  myWindow.document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
  myWindow.document.write('<link rel="stylesheet" href="style.css">');
  myWindow.document.write('<script src="order.js"></script>');
  myWindow.document.write('</head>');
  myWindow.document.write('<body>');
  myWindow.document.write('<div class="header">');
  myWindow.document.write('<img src="images/banner.jpg" class="hp"  alt="collage of all the characters from the office">');
  myWindow.document.write('<div class="banner-title">');
  myWindow.document.write('<h1>How The Turntables Furniture Store</h1>');
  myWindow.document.write('</div>');
  myWindow.document.write('</div>');
  myWindow.document.write('<div id="nav">');
  myWindow.document.write('<ul>');
  myWindow.document.write('<li><a href="furniture.html">Home</a><li>');
  myWindow.document.write('<li><a href="contact.html">Contact Us</a><li>');
  myWindow.document.write('<li><a href="order.html">Order</a><li>');
  myWindow.document.write('</ul>');
  myWindow.document.write('</div>');
  myWindow.document.write('<div class="row">');
  myWindow.document.write('<div class="leftcolumn">');
  myWindow.document.write('<br>');
  myWindow.document.write('</div>');
  myWindow.document.write('<div class="centercolumn">');
  myWindow.document.write('<h1>Customize Order</h1>');

  if(s1c.length==0)
  {

  }
  else
  {
    for(var i=0;i<s1c.length;i++)
    {
      myWindow.document.write('Round Stool: ');
      myWindow.document.write(s1c[i].value);
      myWindow.document.write(' $20<br>');
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
      myWindow.document.write('Piano Table: ');
      myWindow.document.write(s2c[i].value);
      myWindow.document.write(' $30<br>');
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
      myWindow.document.write('Bench Table: ');
      myWindow.document.write(s3c[i].value);
      myWindow.document.write(' $40<br>');
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
      myWindow.document.write('Stool Table: ');
      myWindow.document.write(s4c[i].value);
      myWindow.document.write(' $10<br>');
      subtotal=subtotal+10;
    }
  }
myWindow.document.write('subtotal: $'+subtotal +'<br>');
myWindow.document.write('shipping options')
myWindow.document.write('<script type="text/javascript">');
myWindow.document.write('function showfield(name){');
myWindow.document.write("if(name=='Standard'){document.getElementById('div1').innerHTML='Shipping Address: <input type="+"text"+" name="+"other"+" />';}");
myWindow.document.write("else document.getElementById('div1').innerHTML='';");
myWindow.document.write('}');
myWindow.document.write('</script>');
myWindow.document.write('<select name="travel_arriveVia" id="travel_arriveVia" onchange="showfield(this.options[this.selectedIndex].value)">');
myWindow.document.write('<option selected="selected">Please select ...</option>');
myWindow.document.write('<option value="Standard">Standard</option>');
myWindow.document.write('<option value="Pickup">Pickup</option>');
myWindow.document.write('</select>');
myWindow.document.write('<div id="div1"></div>');
myWindow.document.write('shipping + $50');


  myWindow.document.write('</div>');
  myWindow.document.write('<div class="rightcolumn">');
  myWindow.document.write('<br>');
  myWindow.document.write('</div>');
  myWindow.document.write('</div>');
  myWindow.document.write('<div id="footer">');
  myWindow.document.write('Latest Update: <!--#echo var="LAST_MODIFIED"-->');
  myWindow.document.write('<br>');
  myWindow.document.write('<a href=mailto:andrew.myer@student.csulb.edu >andrew.myer@student.csulb.edu</a>');
  myWindow.document.write('</div>');
  myWindow.document.write('</body>');
  myWindow.document.write('</html>');
}
