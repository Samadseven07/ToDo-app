function confirmDelete(taskId, taskTitle) {
        const modal = document.getElementById('deleteModal');
        const modalMessage = document.getElementById('modalMessage');
        const confirmBtn = document.getElementById('confirmBtn');
        const cancelBtn = document.getElementById('cancelBtn');

        modalMessage.textContent = `Are you sure you want to delete "${taskTitle}"?`;
        modal.style.display = 'flex';

        // Get CSRF token
        const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

        // Delete confirmation
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

        // Cancel closes modal
        cancelBtn.onclick = () => {
            modal.style.display = 'none';
        };

        // Clicking outside modal closes it
        window.onclick = (e) => {
            if (e.target === modal) modal.style.display = 'none';
        };
    }

    // Toggle Done button green/white
    function toggleDone(button, taskId) {
        button.classList.toggle('completed');
    }