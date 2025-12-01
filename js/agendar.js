        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('agendamentoForm');
            const modal = document.getElementById('depois'); 
            
            // Função para mostrar o modal
            const showModal = () => {
                modal.classList.add('show');
                modal.style.display = 'flex'; 
            };

            // Ação ao enviar o formulário
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault(); // Impede o recarregamento da página
                    
                    // Exibe o modal de sucesso
                    showModal();
                    
                    // Limpar o formulário (opcional)
                    form.reset();
                });
            } else {
                console.error("Formulário não encontrado! Verifique o ID 'agendamentoForm'.");
            }
        });