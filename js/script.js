function abrirModal(id) {
    document.getElementById(id).style.display = 'block';
}

function fecharModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}
