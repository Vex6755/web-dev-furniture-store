document.addEventListener('DOMContentLoaded', () => {
    const sidebarMenu = document.getElementById('sidebarMenu');
    const menuOpenBtn = document.getElementById('menuOpen');
    const menuCloseBtn = document.getElementById('menuClose');
    const videoModal = document.getElementById('videoModal');
    const videoTrigger = document.getElementById('videoTrigger');
    const modalCloseBtn = document.getElementById('modalClose');
    const modalVideo = document.getElementById('modalVideo');

    if (menuOpenBtn && menuCloseBtn && sidebarMenu) {
        menuOpenBtn.addEventListener('click', () => sidebarMenu.classList.add('open'));
        menuCloseBtn.addEventListener('click', () => sidebarMenu.classList.remove('open'));
    }
    if (videoTrigger && videoModal && modalCloseBtn && modalVideo) {
        videoTrigger.addEventListener('click', () => {
            videoModal.style.display = 'flex';
            modalVideo.play().catch(err => console.log(err));
        });
        const closeModal = () => {
            videoModal.style.display = 'none';
            modalVideo.pause();
            modalVideo.currentTime = 0;
        };
        modalCloseBtn.addEventListener('click', closeModal);
        videoModal.addEventListener('click', (e) => { if (e.target === videoModal) closeModal(); });
    }
});

