document.addEventListener('DOMContentLoaded', () => {
    // 1. Interação do Botão Principal de Agendamento
    const mainAppointmentButton = document.getElementById('main-appointment-button');
    const primaryButton = document.querySelector('.button-primary');

    const handleAppointmentClick = (event) => {
        event.preventDefault(); // Impede que o link/botão vá para o topo da página
        alert('✅ Redirecionando para a página de Agendamento Online da Dra. Maristela...');
        // Aqui você adicionaria window.location.href = "pagina-de-agendamento.html";
    };

    if (mainAppointmentButton) {
        mainAppointmentButton.addEventListener('click', handleAppointmentClick);
    }

    if (primaryButton) {
        primaryButton.addEventListener('click', handleAppointmentClick);
    }


    // 2. Interação dos Links do Footer
    const footerLinks = document.querySelectorAll('.site-footer a');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Pega o valor do atributo 'data-link' ou 'data-social' para identificar o clique
            const linkType = link.getAttribute('data-link') || link.getAttribute('data-social');
            
            if (linkType) {
                let message = '';

                switch (linkType) {
                    case 'home':
                        message = '🏠 Redirecionando para a página Home.';
                        break;
                    case 'services':
                    case 'ourservices':
                        message = '🏥 Carregando a lista completa de Serviços Veterinários.';
                        break;
                    case 'contact':
                        message = '📞 Abrindo formulário de Contato e informações de telefone.';
                        break;
                    case 'about':
                        message = 'ℹ️ Lendo a história e informações Sobre a Clínica.';
                        break;
                    case 'convenios':
                        message = '🤝 Exibindo a lista de Convênios aceitos.';
                        break;
                    case 'agendamento':
                        message = '📅 Redirecionando para a página de Agendamento.';
                        break;
                    case 'privacidade':
                        message = '📄 Exibindo a Política de Privacidade.';
                        break;
                    case 'termos':
                        message = '📜 Exibindo os Termos de Uso.';
                        break;
                    case 'facebook':
                        message = '👍 Abrindo a página da Dra. Maristela no Facebook...';
                        break;
                    case 'instagram':
                        message = '📸 Abrindo o perfil da Dra. Maristela no Instagram...';
                        break;
                    default:
                        message = `🖱️ O link "${link.textContent.trim()}" foi clicado.`;
                }
                
                // Exibe o alerta
                alert(message);

                // Efeito visual (opcional): Adiciona uma classe temporária para feedback visual no clique
                link.classList.add('clicked-effect');
                setTimeout(() => {
                    link.classList.remove('clicked-effect');
                }, 300);
            }
        });
    });
});

/* Adicione este CSS no styles.css para o efeito de clique:
.clicked-effect {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
}
*/