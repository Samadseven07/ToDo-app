function confirmDelete(taskId, taskTitle) {
    const modal = document.getElementById('deleteModal');
    const modalMessage = document.getElementById('modalMessage');
    const confirmBtn = document.getElementById('confirmBtn');

    modalMessage.textContent = `Are you sure you want to delete "${taskTitle}"?`;
    modal.style.display = 'flex';

    // Get CSRF token
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

    confirmBtn.onclick = () => {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = `/task-delete/${taskId}/`;

        const csrfInput = document.createElement('input');
        csrfInput.type = 'hidden';
        csrfInput.name = 'csrfmiddlewaretoken';
        csrfInput.value = csrfToken;
        form.appendChild(csrfInput);

        document.body.appendChild(form);
        form.submit();
    };

    document.querySelector('.close').onclick = () => {
        modal.style.display = 'none';
    };

    document.getElementById('cancelBtn').onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    };
}