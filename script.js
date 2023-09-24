//your JS code here. If required.
const metaverseStatus = document.querySelector("#metaverse-status");
const enterMetaverseButton = document.querySelector("#enter-metaverse-button");

enterMetaverseButton.addEventListener("click", () => {
  metaverseStatus.textContent = "Entered Metaverse";
});
