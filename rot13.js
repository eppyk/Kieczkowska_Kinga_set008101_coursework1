function rot13_encode()
{
  var plain_text = document.getElementById("encode_message").value.toLowerCase();;
  var cipher_text = [];
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  for (var idx=0; idx<plain_text.length; idx++)
  {
  input = alphabet.indexOf(plain_text[idx]);

  if (input==-1)
  {
    cipher_text.push(plain_text[idx]);

  }
  else
  {
    var coded = (input+13)%26;
    var letter = alphabet[coded];
    cipher_text.push(letter);

  }

  }


  document.getElementById("encode_output").innerHTML = cipher_text.join("");

}

function rot13_decode()
{
  var cipher_text = document.getElementById("decode_message").value;
	var plain_text = [];
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


		for (var idx=0; idx<cipher_text.length; idx++)
		{
		    input = alphabet.indexOf(cipher_text[idx]);

			if (input==-1)
			{
				plain_text.push(cipher_text[idx]);

			}
			else
			{
				var coded = (input+13)%26;
				var letter = alphabet[coded];
				plain_text.push(letter);

			}

      }

	document.getElementById("decode_output").innerHTML = plain_text.join("");


}
