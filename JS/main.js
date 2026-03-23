/**
 * PORTFOLIO MAIN JAVASCRIPT
 * - Dropdown Interaction
 * - Scroll Reveal Animation
 * - Active Link Highlighter
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 현재 페이지 메뉴 활성화 (Active State)
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.color = 'var(--main-sage)';
            link.style.fontWeight = '700';
        }
    });

    // 2. 스크롤 애니메이션 (Intersection Observer)
    // 이미지나 그리드 아이템이 화면에 10% 이상 보일 때 나타남
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                // 한 번 나타난 후에는 감시 해제
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 애니메이션을 적용할 요소들 선택
    const revealElements = document.querySelectorAll('.grid-item, .main-visual, .hero-section');
    
    revealElements.forEach(el => {
        // 초기 상태 설정
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
        revealObserver.observe(el);
    });

    // 3. 드롭다운 모바일 대응 (터치 디바이스 배려)
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('touchstart', (e) => {
            // 터치 시 드롭다운이 바로 닫히지 않도록 제어
            // 필요에 따라 추가적인 모바일 로직을 넣을 수 있습니다.
        });
    });

});

/**
 * Archive 페이지 전용 비디오 제어 함수
 * (HTML 내 인라인 호출과 연동)
 */
function openVideo(id) {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('videoPlayer');
    if(modal && player) {
        player.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
    }
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('videoPlayer');
    if(modal && player) {
        player.src = "";
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // 배경 스크롤 복구
    }
}