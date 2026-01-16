function encodeText(){
  const text = document.getElementById("encodeInput").value;
  if(!text){ alert("Enter text"); return; }
  document.getElementById("encodeOutput").value = btoa(text);
}

function decodeText(){
  const text = document.getElementById("decodeInput").value;
  try{
    document.getElementById("decodeOutput").value = atob(text);
  }catch{
    alert("Invalid encoded text");
  }
}

function goHome(){
  window.location.href = "home.html";
}
