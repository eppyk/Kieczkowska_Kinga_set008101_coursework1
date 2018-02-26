function morse_encode()
{
  var plain_text = document.getElementById("encode_message").value.toLowerCase();
	var cipher_text = [];
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var morse = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...',
  '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '-----', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.'];

  for (var idx=0; idx < plain_text.length; idx++)
  {
    var letter = plain_text[idx];
    var index = alphabet.indexOf(letter);
    cipher_text.push(morse[index]);
  }
  document.getElementById("encode_output").innerHTML = cipher_text.join(" ");

}

function morse_decode()
{
  var cipher_text = document.getElementById("decode_message").value;
  cipher_text = cipher_text.split(" ");
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var morse = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...',
  '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '-----', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.'];
  var plain_text = [];

  for (var idx=0; idx < cipher_text.length; idx++)
  {
    var letter = cipher_text[idx];
    var index = morse.indexOf(letter);
    plain_text.push(alphabet[index]);

  }
  document.getElementById("decode_output").innerHTML = plain_text.join("");

}
