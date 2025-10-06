// 获取 DOM 元素
const navLinks = document.querySelectorAll('.nav-link');
const skillItems = document.querySelectorAll('.skill-item');
const contactItems = document.querySelectorAll('.contact-item');

// 处理导航链接点击事件
function handleNavClick(event) {
    // 移除所有链接的 active 类
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // 给当前点击的链接添加 active 类
    event.currentTarget.classList.add('active');
}

// 为所有导航链接添加点击事件
navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
});

// 技能卡片动画
function observeSkills() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });

    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
        observer.observe(item);
    });
}

// 联系方式项动画
function observeContacts() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 80);
            }
        });
    }, {
        threshold: 0.1
    });

    contactItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease';
        observer.observe(item);
    });
}

// 页面加载完成后初始化
window.addEventListener('load', () => {
    console.log('关于我页面加载完成！');
    observeSkills();
    observeContacts();
});

// 平滑滚动到顶部
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        document.querySelector('.navbar').style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        document.querySelector('.navbar').style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

