document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Função para aplicar o tema salvo no carregamento da página
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme'); // 'dark' ou 'light-mode'

        // Se não houver tema salvo, define 'dark-mode' como padrão
        if (!savedTheme) {
            body.classList.add('dark-mode'); // Adiciona a classe para o modo escuro padrão
            localStorage.setItem('theme', 'dark-mode');
        } else {
            // Aplica o tema salvo
            body.classList.add(savedTheme);
        }
    }

    // Aplica o tema imediatamente ao carregar
    applySavedTheme();

    // Event listener para o efeito de scroll do header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Event listener para o botão de alternância de tema
    themeToggle.addEventListener('click', () => {
        // Verifica se o modo claro está ativo
        const isLightMode = body.classList.contains('light-mode');

        if (isLightMode) {
            // Se estiver no modo claro, muda para o modo escuro
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            // Se estiver no modo escuro, muda para o modo claro
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});
