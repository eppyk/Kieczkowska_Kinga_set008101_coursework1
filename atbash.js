function atbash_encode()
{
  console.log("am in the encode");
  var plain_text = document.getElementById("encode_message").value.toLowerCase();
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var cipher_text = [];

  for (var idx=0; idx<plain_text.length; idx++)
  {

    var letter = plain_text[idx];
    var index = alphabet.indexOf(letter);
    var tobeadded = alphabet[26-index-1];
    cipher_text.push(tobeadded);

  }
  document.getElementById("encode_output").innerHTML = cipher_text.join("");

}

function atbash_decode()
{
  var cipher_text = document.getElementById("decode_message").value.toLowerCase();
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var plain_text = [];

  for (var idx=0; idx<cipher_text.length; idx++)
  {
    var letter = cipher_text[idx];
    var index = alphabet.indexOf(letter);
    plain_text.push(alphabet[26-index-1]);

  }

  document.getElementById("decode_output").innerHTML = plain_text.join("");


}
