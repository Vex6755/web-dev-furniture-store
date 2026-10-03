document.addEventListener('DOMContentLoaded', () => {
   
    // --- UI ELEMENTS ---
    const sidebarMenu = document.getElementById('sidebarMenu');
    const menuOpenBtn = document.getElementById('menuOpen');
    const menuCloseBtn = document.getElementById('menuClose');
   
    const videoModal = document.getElementById('videoModal');
    const videoTrigger = document.getElementById('videoTrigger');
    const modalCloseBtn = document.getElementById('modalClose');
    const modalVideo = document.getElementById('modalVideo');

    // --- MOBILE MENU FUNCTIONALITY ---
    if (menuOpenBtn && menuCloseBtn && sidebarMenu) {
        menuOpenBtn.addEventListener('click', () => {
            sidebarMenu.classList.add('open');
        });

        menuCloseBtn.addEventListener('click', () => {
            sidebarMenu.classList.remove('open');
        });

        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                sidebarMenu.classList.remove('open');
            });
        });
    }

    // --- VIDEO PLAYER MODAL LOGIC ---
    if (videoTrigger && videoModal && modalCloseBtn && modalVideo) {
       
        videoTrigger.addEventListener('click', () => {
            videoModal.style.display = 'flex';
            modalVideo.play().catch(error => {
                console.log("Autoplay caught or prevented by browser policies:", error);
            });
        });

        const closeModalWindow = () => {
            videoModal.style.display = 'none';
            modalVideo.pause();
            modalVideo.currentTime = 0;
        };

        modalCloseBtn.addEventListener('click', closeModalWindow);

        videoModal.addEventListener('click', (event) => {
            if (event.target === videoModal) {
                closeModalWindow();
            }
        });
    }
});

Scroll down to the bottom, write a commit summary (e.g., feat: integrate mobile drawer navigation and modal tracking logic), and click the green Commit changes button.
