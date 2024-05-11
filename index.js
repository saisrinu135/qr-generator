
const btn = document.getElementById('submit-btn');


btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const img = document.getElementById("image");
    const text = document.getElementById("text").value;
    const size = document.getElementById("size").value;

    if (text != '') {
        const API = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${text}`;

        let response = await fetch(API);
        response = await response.blob();
        const url = URL.createObjectURL(response);
        img.classList.add('img-fluid')

        img.src = url;
    }


});
