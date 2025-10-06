// 获取 DOM 元素
const greetBtn = document.getElementById('greetBtn');
const message = document.getElementById('message');
const navLinks = document.querySelectorAll('.nav-link');

// 问候语列表
const greetings = [
    '你好！很高兴见到你！',
    '欢迎！希望你有美好的一天！',
    '嗨！今天过得怎么样？',
    '问候！祝你一切顺利！',
    'Hello! Nice to meet you!'
];

// 获取随机问候语
function getRandomGreeting() {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
}

// 显示问候消息
function showGreeting() {
    // 移除之前的动画类
    message.classList.remove('show');
    
    // 短暂延迟后显示新消息
    setTimeout(() => {
        message.textContent = getRandomGreeting();
        message.classList.add('show');
    }, 100);
}

// 处理导航链接点击事件
function handleNavClick(event) {
    event.preventDefault();
    
    // 移除所有链接的 active 类
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // 给当前点击的链接添加 active 类
    event.target.classList.add('active');
    
    // 获取目标页面
    const target = event.target.getAttribute('href');
    console.log('导航至：' + target);
}

// 添加点击事件监听器
greetBtn.addEventListener('click', showGreeting);

// 为所有导航链接添加点击事件
navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
});

// 页面加载完成后的欢迎消息
window.addEventListener('load', () => {
    console.log('页面加载完成！');
});

