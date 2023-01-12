async function getData() {
	return(await eel.getData());
}
$( "#vasya" ).click(function() {
  var data = getData();
  alert(data);
});