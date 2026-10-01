
const campoPesquisa = document.getElementById("campoPesquisa");
const plantas = document.querySelectorAll(".planta");
const semResultados = document.getElementById("semResultados");

campoPesquisa.addEventListener("input", function () {
    const pesquisa = campoPesquisa.value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    let encontrou = false;

    plantas.forEach(function (planta) {
        const nome = planta.dataset.planta
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        const aluno = planta.dataset.aluno
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        if (nome.includes(pesquisa) || aluno.includes(pesquisa)) {
            planta.style.display = "block";
            encontrou = true;
        } else {
            planta.style.display = "none";
            planta.classList.remove("aberta");
        }
    });

    semResultados.style.display = encontrou ? "none" : "block";
});

plantas.forEach(function (planta) {
    planta.addEventListener("click", function () {
        planta.classList.toggle("aberta");
    });
});

