const audio = document.getElementById('audio');
        const audioIcon = document.getElementById('audio-icon');
        let isPlaying = false;

        // Inicializa audio en silencio hasta interacción
        audio.muted = true;

        // Toggle audio al hacer click en el icono
        document.getElementById('toggle-audio').addEventListener('click', (e) => {
            e.preventDefault();
            if (isPlaying) {
                audio.muted = true;
                audio.pause();
                audioIcon.classList.remove('bi-volume-up');
                audioIcon.classList.add('bi-volume-mute');
            } else {
                audio.muted = false;
                audio.play();
                audioIcon.classList.remove('bi-volume-mute');
                audioIcon.classList.add('bi-volume-up');
            }
            isPlaying = !isPlaying;
        });