// 모바일 햄버거 메뉴
(function () {
    const topbar = document.createElement('div');
    topbar.className = 'mobile-topbar';
    topbar.innerHTML = `
        <a class="top-name" href="index.html">KIM MINJUN</a>
        <button class="hamburger" id="hamburger" aria-label="메뉴">
            <span></span><span></span><span></span>
        </button>
    `;
    document.body.prepend(topbar);

    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');

    function openMenu() {
        sidebar.classList.add('open');
        hamburger.classList.add('open');
        overlay.classList.add('show');
    }

    function closeMenu() {
        sidebar.classList.remove('open');
        hamburger.classList.remove('open');
        overlay.classList.remove('show');
    }

    hamburger.addEventListener('click', () => {
        sidebar.classList.contains('open') ? closeMenu() : openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    sidebar.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', closeMenu);
    });
})();

// 슬라이더 터치 스와이프 (work 페이지)
(function () {
    const workInner = document.getElementById('work-inner');
    if (!workInner) return;

    let touchStartX = 0;
    let touchEndX = 0;
    const SWIPE_THRESHOLD = 50;

    workInner.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    workInner.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) < SWIPE_THRESHOLD) return;

        if (diff > 0) {
            // 왼쪽으로 스와이프 → 다음
            document.getElementById('nextBtn')?.click();
        } else {
            // 오른쪽으로 스와이프 → 이전
            document.getElementById('prevBtn')?.click();
        }
    }, { passive: true });
})();
