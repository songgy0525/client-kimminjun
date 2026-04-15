// 모바일 햄버거 메뉴
(function () {
    // 상단 바 생성
    const topbar = document.createElement('div');
    topbar.className = 'mobile-topbar';
    topbar.innerHTML = `
        <a class="top-name" href="index.html">KIM MINJUN</a>
        <button class="hamburger" id="hamburger" aria-label="메뉴">
            <span></span><span></span><span></span>
        </button>
    `;
    document.body.prepend(topbar);

    // 오버레이 생성
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

    // 메뉴 링크 클릭 시 닫기
    sidebar.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', closeMenu);
    });
})();
