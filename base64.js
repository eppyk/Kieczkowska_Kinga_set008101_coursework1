function base64_encode()

{
  var plain_text = document.getElementById("encode_message").value;
  document.getElementById("encode_output").innerHTML = btoa(plain_text);


}


function base64_decode()
{
  var cipher_text = document.getElementById("decode_message").value;
  document.getElementById("decode_output").innerHTML = atob(cipher_text);

}
