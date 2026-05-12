const modal = document.querySelector("#videoModal");
const modalFrame = document.querySelector("#videoModalFrame");
const modalTitle = document.querySelector("#videoModalTitle");
const modalExternal = document.querySelector("#videoModalExternal");
const videoLinks = Array.from(document.querySelectorAll(".video-poster"));

function openVideoModal(link) {
  const href = link.href;
  const title = link.dataset.videoTitle || "作品预览";

  modalTitle.textContent = title;
  modalFrame.src = href;
  modalExternal.href = href;
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeVideoModal() {
  modal.hidden = true;
  modalFrame.src = "about:blank";
  document.body.classList.remove("modal-open");
}

for (const link of videoLinks) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openVideoModal(link);
  });
}

for (const closeButton of document.querySelectorAll("[data-close-video]")) {
  closeButton.addEventListener("click", closeVideoModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeVideoModal();
  }
});
