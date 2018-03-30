function order()
{
  var keepShopping=true;

}
function newItem()
{
  document.write('<select size=3 name = "selectCollection" id="selectCollection1">');
  document.write('<option value="1">Living Room</option>');
  document.write('<option value="1" >Kitchen</option>');
  document.write('<option>Bedroom</option>');
  document.write('<option>Family Room</option>');
  document.write('</select>');
  var e = document.getElementsById('selectCollection1');
  if(e=='1')
  {
    alert('');
  }
}
