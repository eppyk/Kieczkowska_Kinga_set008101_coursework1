function polybius_encode()
{
	var plain_text = document.getElementById("encode_message").value.toLowerCase();
	var grid = [ 0, [0, 'a' , 'b', 'c', 'd', 'e', 'f'], [0, 'g', 'h', 'i', 'j', 'k', 'l'], [0, 'm', 'n', 'o', 'p', 'q', 'r'],
	[0, 's', 't', 'u', 'v', 'w', 'x'], [0, 'y', 'z', '0', '1', '2', '3'], [0, '4', '5', '6', '7', '8', '9']];
	var cipher_text = [];

	for (var i=0; i < plain_text.length; i++)
	{
		var letter = plain_text[i];
		for (var j=1; j<grid.length; j++)
		{
			var newarr = grid[j];
			if (newarr.indexOf(letter) != -1)
			{
				cipher_text.push(grid.indexOf(newarr));
				cipher_text.push(newarr.indexOf(plain_text[i]));
				cipher_text.push("  ");

			}

		}


	}
	document.getElementById("encode_output").innerHTML = cipher_text.join("");


}


function polybius_decode()
{
	var cipher_text = document.getElementById("decode_message").value.split(" ");
	var grid = [ 0, [0, 'a' , 'b', 'c', 'd', 'e', 'f'], [0, 'g', 'h', 'i', 'j', 'k', 'l'], [0, 'm', 'n', 'o', 'p', 'q', 'r'],
	[0, 's', 't', 'u', 'v', 'w', 'x'], [0, 'y', 'z', '0', '1', '2', '3'], [0, '4', '5', '6', '7', '8', '9']];
	var plain_text = [];

	for (var i=0; i < cipher_text.length; i++)
	{
		tuple = cipher_text[i];
		plain_text.push(grid[(tuple-(tuple%10))/10][tuple%10]);


	}
	document.getElementById("decode_output").innerHTML = plain_text.join("");

}
