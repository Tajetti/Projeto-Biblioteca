function abrirModal(id) {
    document.getElementById(id).style.display = 'block';
}

function fecharModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.campoLivro');
    elements.forEach((element) => {
        element.style.display = 'block'; 
    });
});

function filterElements(category, event) {
    event.preventDefault(); 

    const elements = document.querySelectorAll('.campoLivro');

    elements.forEach((element) => {
        if (category === "Todos") {
            element.style.display = 'block';
        } else {
            element.style.display = 'none'; // Oculta todos
            if (element.classList.contains(category)) {
                element.style.display = 'block';
            }
        }
    });
}
