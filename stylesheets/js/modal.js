const cancelOrderModal = document.querySelector('#cancelOrderModal')

cancelOrderModal.addEventListener('shown.bs.modal', (e) => {
  const button = e.relatedTarget;
  const orderId = button.dataset.bsOrderId;
  console.log(button, orderId);
  const modalText = modalByDelete.querySelector('#deleteText');
  modalText.textContent = orderId;
})