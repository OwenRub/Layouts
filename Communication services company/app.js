const close = document.querySelector('.close');
const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');
const button = document.querySelector('.btn');

button.addEventListener('click', showModal);
close.addEventListener('click', hideModal);
window.addEventListener('click', clickOnBackground);

function showModal(e){
	e.preventDefault();
	modalContainer.style.visibility = "visible";
	modalContainer.style.opacity = 1;
	modal.classList.toggle('modal-close');
}

function hideModal(){
	modal.classList.toggle('modal-close');
	setTimeout(() => {
		modalContainer.style.visibility = "hidden";
		modalContainer.style.opacity = 0;
	}, 550);
	
}

function clickOnBackground(e){
	if(e.target == modalContainer)
		hideModal();
}