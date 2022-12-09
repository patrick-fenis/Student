// console.log($);
// console.log('modal practice app.js is linked to this index.html');
// functions

$(() => {
	const $openBtn = $("#openModal");
	const $modal = $("#modal");
	const $closeBtn = $("#close");

	//functions
	const openModal = () => {
		$modal.css("display", "block");
		// $modal.show();
	};

	const closeModal = () => {
		$modal.css("display", "none");
	};

	// event listeners
	$openBtn.on("click", openModal);
	$closeBtn.on("click", closeModal);

	// setTimeout(openModal, 5000);
	// setTimeout(() => {
	// 	$closeBtn.css("display", "block");
	// }, 10000);
});
