// 설정 정보를 웹페이지에 자동 반영
function updatePageContent() {
    if (typeof userConfig === 'undefined') {
        console.log('Config not loaded yet');
        return;
    }

    // 이름 업데이트
    const nameElements = document.querySelectorAll('.hero-subtitle');
    nameElements.forEach(element => {
        element.textContent = `${userConfig.name}입니다`;
    });

    // 소개 업데이트
    const introElements = document.querySelectorAll('.about-text p');
    if (introElements.length > 0) {
        introElements[0].textContent = userConfig.introduction.korean;
        if (introElements.length > 1) {
            introElements[1].textContent = userConfig.introduction.description;
        }
    }

    // 관심 분야 추가 (새로운 섹션)
    const aboutText = document.querySelector('.about-text');
    if (aboutText && userConfig.interests) {
        const interestsSection = document.createElement('div');
        interestsSection.className = 'interests';
        interestsSection.innerHTML = `
            <h3>관심 분야</h3>
            <div class="interest-tags">
                ${userConfig.interests.map(interest => `<span class="interest-tag">${interest}</span>`).join('')}
            </div>
        `;
        aboutText.appendChild(interestsSection);
    }

    // 기술 스택 업데이트
    const skillTags = document.querySelector('.skill-tags');
    if (skillTags) {
        skillTags.innerHTML = '';
        userConfig.skills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillTags.appendChild(skillTag);
        });
    }

    // 프로젝트 업데이트
    const projectCards = document.querySelectorAll('.project-card');
    userConfig.projects.forEach((project, index) => {
        if (projectCards[index]) {
            const title = projectCards[index].querySelector('h3');
            const description = projectCards[index].querySelector('p');
            const icon = projectCards[index].querySelector('.project-placeholder');
            
            if (title) title.textContent = project.title;
            if (description) description.textContent = project.description;
            if (icon) icon.textContent = project.icon;
        }
    });

    // 프로필 사진 업데이트
    const profileImg = document.getElementById('profile-img');
    if (profileImg && userConfig.profileImage) {
        profileImg.src = `images/${userConfig.profileImage}`;
        profileImg.alt = `${userConfig.name} 프로필 사진`;
    }

    // 연락처 업데이트
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink) {
        emailLink.href = `mailto:${userConfig.email}`;
    }

    const githubLink = document.querySelector('a[href*="github.com"]');
    if (githubLink) {
        githubLink.href = userConfig.github;
    }

    const linkedinLink = document.querySelector('a[href*="linkedin.com"]');
    if (linkedinLink) {
        linkedinLink.href = userConfig.linkedin;
    }

    // 미디어 콘텐츠 업데이트
    const mediaGrid = document.getElementById('media-grid');
    if (mediaGrid && userConfig.media) {
        mediaGrid.innerHTML = '';
        userConfig.media.forEach(media => {
            const mediaCard = document.createElement('div');
            mediaCard.className = 'media-card';
            
            const typeBadge = media.type === 'youtube' ? 'YouTube' : 
                             media.type === 'video' ? 'Video' : 'Image';
            
            mediaCard.innerHTML = `
                <div class="media-thumbnail">
                    <img src="${media.thumbnail}" alt="${media.title}" onerror="this.src='images/default-thumbnail.jpg'">
                    ${media.type !== 'image' ? '<div class="play-button">▶</div>' : ''}
                    <div class="media-duration">${media.duration}</div>
                </div>
                <div class="media-content-info">
                    <span class="media-type-badge ${media.type}">${typeBadge}</span>
                    <h3>${media.title}</h3>
                    <p>${media.description}</p>
                </div>
            `;
            
            // 클릭 이벤트 추가
            mediaCard.addEventListener('click', function() {
                if (media.type === 'youtube') {
                    window.open(media.url, '_blank');
                } else if (media.type === 'video') {
                    // 비디오 모달 또는 새 창에서 재생
                    window.open(media.url, '_blank');
                }
            });
            
            mediaCard.style.cursor = 'pointer';
            mediaGrid.appendChild(mediaCard);
        });
    }

    // 푸터 업데이트 (연도 자동 설정)
    const footer = document.querySelector('.footer p');
    if (footer) {
        // config에서 수동 연도 설정이 있으면 사용, 없으면 현재 연도 사용
        const year = userConfig.autoSettings && userConfig.autoSettings.year 
            ? userConfig.autoSettings.year 
            : new Date().getFullYear();
        footer.innerHTML = `&copy; ${year} ${userConfig.name}. All rights reserved.`;
    }
}

// 페이지 로드 시 설정 적용
document.addEventListener('DOMContentLoaded', function() {
    // 설정이 로드될 때까지 대기
    if (typeof userConfig !== 'undefined') {
        updatePageContent();
    } else {
        // config.js가 아직 로드되지 않은 경우 대기
        const checkConfig = setInterval(() => {
            if (typeof userConfig !== 'undefined') {
                updatePageContent();
                clearInterval(checkConfig);
            }
        }, 100);
    }
});

// Smooth scrolling for navigation links
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

// CTA button scroll to projects
document.querySelector('.cta-button').addEventListener('click', function() {
    const projectsSection = document.querySelector('#projects');
    projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = '#ffffff';
        header.style.backdropFilter = 'none';
    }
});

// Add fade-in animation for project cards
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

// Observe all project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add typing effect to hero title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Uncomment the line below if you want a typing effect
// typeWriter(document.querySelector('.hero-title'), '안녕하세요! 👋');

// Add hover effect to skill tags
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
}); 