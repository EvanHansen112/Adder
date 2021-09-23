var count = 0;
var sum = 0;
function clr()
{
  document.getElementById("sum").innerHTML = " ";
  count = 0;
  sum = 0;
}
function add(x)
{
  sum = sum + x;
  count = count + 1;
  print();
}
function print()
{
  document.getElementById("sum").innerHTML = "<hr>The sum is " + sum + "<br>The count is " + count;
  return print;
}
