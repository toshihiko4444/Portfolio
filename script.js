document.addEventListener('DOMContentLoaded', function() {
    // ナビゲーションメニューのトグル
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // ナビゲーションリンクをクリックした時にメニューを閉じる
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 背景動画の管理
    const videos = [
        'assets/2.mp4',
        'assets/3.mp4',
        'assets/4.mp4',
        'assets/5.mp4'
    ];
    
    let currentVideoIndex = 0;
    const bgVideo = document.getElementById('bg-video');
    
    function switchBackgroundVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        const newSource = bgVideo.querySelector('source');
        newSource.src = videos[currentVideoIndex];
        bgVideo.load();
        bgVideo.play();
    }

    // 5秒ごとに背景動画を切り替え
    setInterval(switchBackgroundVideo, 5000);

    // スクロール時のナビゲーションバーの透明度調整
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(13, 20, 33, 0.98)';
        } else {
            navbar.style.background = 'rgba(13, 20, 33, 0.95)';
        }
    });

    // 要素のフェードインアニメーション
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // アニメーション対象の要素を監視
    document.querySelectorAll('.video-item, .thumbnail-item, .about-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // CTAボタンのクリックイベント
    document.querySelector('.cta-button').addEventListener('click', function() {
        document.querySelector('#youtube').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // サムネイル画像のモーダル表示（簡易版）
    document.querySelectorAll('.thumbnail-item').forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;
            
            document.body.appendChild(modal);
            modal.style.display = 'flex';
            
            // モーダルを閉じる
            modal.querySelector('.close').addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });
        });
    });
});

// モーダル用のCSS（動的に追加）
const modalStyle = document.createElement('style');
modalStyle.textContent = `
    .modal {
        display: none;
        position: fixed;
        z-index: 2000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        justify-content: center;
        align-items: center;
    }
    
    .modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        text-align: center;
    }
    
    .modal-content img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
    
    .close {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
        background: none;
        border: none;
    }
    
    .close:hover {
        color: #3f51b5;
    }
`;
document.head.appendChild(modalStyle);