document.addEventListener('DOMContentLoaded', (event) => {
    const draggables = document.querySelectorAll('.draggable');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
        draggable.addEventListener('dragover', dragOver);
        draggable.addEventListener('drop', drop);
        draggable.addEventListener('dragenter', dragEnter);
        draggable.addEventListener('dragleave', dragLeave);
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('hide');
        }, 0);
    }

    function dragEnter(e) {
        e.preventDefault();
        e.target.classList.add('hovered');
    }

    function dragLeave(e) {
        e.target.classList.remove('hovered');
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.target.classList.remove('hovered');
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        e.target.classList.remove('hide');

        // Swap background images between the dragged and target elements
        const draggedBackground = draggable.style.backgroundImage;
        draggable.style.backgroundImage = e.target.style.backgroundImage;
        e.target.style.backgroundImage = draggedBackground;
    }
});
