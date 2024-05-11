
const btn = document.getElementById('submit-btn');


btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const img = document.getElementById("image");
    const text = document.getElementById("text").value;
    const size = document.getElementById("size").value;

    if (text != '') {
        const API = `https://chart.googleapis.com/chart?cht=qr&chs=${size}x${size}&chl=${text}`;

        let response = await fetch(API);
        response = await response.blob();
        const url = URL.createObjectURL(response);
        img.classList.add('img-fluid')

        img.src = url;
    }


});
