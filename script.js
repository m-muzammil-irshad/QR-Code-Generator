let qrForm = document.querySelector("#qrForm");
qrContainer = document.querySelector(".qr_container");
qrImage = document.querySelector("#qrImage");
qrInput = document.querySelector("#qrInput");
generateBtn = document.querySelector("#generateBtn");

const render = (url) => {

    if (!url) return;
    generateBtn.innerText = 'Generating QR Code....';
    qrImage.src = url;
    const imageLoad = () => {
        const interval = setInterval(() => {
            qrContainer.classList.add("show");
            clearInterval(interval);
            generateBtn.innerText = 'Generate QR Code';
        },50);
    };
    qrImage.addEventListener("load", imageLoad)
};
qrForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const qrData = new FormData(qrForm);
    const text = qrData.get("qrText");
    const URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    render(URL);

});
qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        qrContainer.classList.remove("show");
    }
});