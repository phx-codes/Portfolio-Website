function updateLocalTime() {
  const now = new Date();
  const options = { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  };
  document.getElementById("local-time").textContent = now.toLocaleTimeString([], options);
}

setInterval(updateLocalTime, 1000);
updateLocalTime();
