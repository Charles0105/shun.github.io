// 导航数据
const categories = [
    {
        title: '桂林电子科技大学',
        moreItems: [ // 新增更多链接数组
            { name: '更多链接', url: ' ' },
        ],
        items: [
            { name: '研究生管理系统', url: 'https://yjsjy.guet.edu.cn/(S(3w14ikt2cfs0xzmf2dgdbn3z))/home/stulogin' },
            { name: '智慧校园', url: 'https://cas.guet.edu.cn/authserver/login?service=https%3A%2F%2Fcas.guet.edu.cn%2Fauthserver%2Foauth2.0%2FcallbackAuthorize%3Fclient_id%3D1127287017640329216%26redirect_uri%3Dhttps%253A%252F%252Fpcportal.guet.edu.cn%252Fsopcb%26response_type%3Dcode%26state%3D54bda058-195e-42f4-9e7a-8319715503de%26client_name%3DCasOAuthClient' },
            { name: '图书馆', url: 'https://www.guet.edu.cn/lib/' },
            { name: '研究生院', url: 'https://www.guet.edu.cn/gra/' },
            { name: '建交学院', url: 'https://www.guet.edu.cn/jjxy/' },
            { name: '校园网', url: 'http://10.0.1.5/' },
        ]
    },
    {
        title: 'AI 工具',
        moreItems: [ // 新增更多链接数组
            { name: '文心一言', url: 'https://yiyan.baidu.com/' },
            { name: '在问', url: 'https://zaiwen.xueban.org.cn/chat/working-edition' },
            { name: '更多链接', url: ' ' },
        ],
        items: [
            { name: 'Kimi', url: 'https://kimi.moonshot.cn' },
            { name: 'DeepSeek', url: 'https://chat.deepseek.com/' },
            { name: 'ChatGPT', url: 'https://openai.com/chatgpt/' },
            { name: '豆包', url: 'https://www.doubao.com/chat/?channel=baidu_pz&source=db_baidu_pz_01&keywordid=weizhi7' },
            { name: '通义千问', url: 'https://tongyi.aliyun.com/' },
            { name: '腾讯元宝', url: 'https://yuanbao.tencent.com/chat/naQivTmsDa?yb_channel=3003' },
        ]
    },
    {
        title: '科研工具',
        moreItems: [ // 新增更多链接数组
            { name: '更多链接', url: ' ' },
        ],
        items: [
            { name: '矩阵计算器', url: 'https://matrixcalc.org/zh-CN/#%7B%7B1/10,0,0%7D,%7B-1/25,1/10,0%7D,%7B-1/125,-2/25,1/10%7D%7D*%7B%7B0,-4,-4%7D,%7B0,0,-8%7D,%7B0,0,0%7D%7D' },
            { name: '科研废物导航', url: 'https://www.qingnixueshu.top/' },
            { name: '公式识别', url: 'https://simpletex.cn/ai/latex_ocr' },
            { name: 'AutoDL算力云', url: 'https://www.autodl.com/login' },
            { name: 'Pytorch', url: 'https://pytorch.org/' },
            { name: '有道翻译', url: 'https://fanyi.youdao.com/#/TextTranslate' },
        ]
    },
    {
        title: '文献资源',
        moreItems: [ // 新增更多链接数组
            { name: '更多链接', url: ' ' },
        ],
        items: [
            { name: '知网', url: 'https://www.cnki.net/' },
            { name: 'Web of Science', url: 'https://webofscience.clarivate.cn/wos/alldb/basic-search' },
            { name: 'IEEE Xplore', url: 'https://ieeexplore.ieee.org' },
            { name: 'LetPub', url: 'https://letpub.com.cn/index.php?page=journalapp&amp;fieldtag=1499&amp;firstletter=B' },
            { name: 'GitHub', url: 'https://github.com/' },
            { name: '...', url: ' ' },
        ]
    },
    {
        title: '比赛公告',
        moreItems: [ // 新增更多链接数组
            { name: '更多链接', url: ' ' },
        ],
        items: [
            { name: 'OnSite挑战赛', url: 'https://www.onsite.com.cn/#/dist/announcement' },
            { name: '回放测试', url: 'https://onsite.com.cn/#/dist/costomPage?menuId=263' },
            { name: '大英竞赛', url: 'https://www.saikr.com/neccs/2025' },
            { name: '大英竞赛题库', url: 'https://www.xiaomabenteng.cn/questionDetails?id=03544aef3eb143a3bc3b0692acc4cb5c' },
            { name: '...', url: ' ' },
            { name: '...', url: ' ' },
        ]
    },
    {
        title: '其他链接',
        moreItems: [ // 新增更多链接数组
            { name: '更多链接', url: ' ' },
        ],
        items: [
            { name: 'Bilibili', url: 'https://www.bilibili.com' },
            { name: '网易云音乐', url: 'https://music.163.com' },
            { name: '电子税务局', url: 'https://tpass.qingdao.chinatax.gov.cn:8443/#/login?redirect_uri=https%3A%2F%2Fetax.qingdao.chinatax.gov.cn%3A8443%2Fmhzx%2Fapi%2Fmh%2Ftpass%2Fcode&client_id=vt8337t23tv94cdvbdb875e7t8a357e2&response_type=code&state=0004910edf8f40f799ff19282aef1f2e' },
            { name: '复兴壹号', url: 'https://fuxing1.boc.cn/Home/Login' },
            { name: '智慧团建', url: 'https://zhtj.youth.cn/zhtj/signin' },
            { name: '...', url: ' ' },
        ]
    }
];

// 动态生成导航内容
function renderCategories() {
    const container = document.getElementById('categories');
    let html = '';

    // 分类模板
    const categoryTemplate = (category, index) => `
    <div class="category">
        <div class="category-header">
            <h2 class="category-title">${category.title}</h2>
            <div class="more-wrapper">
                <button class="more-button" onclick="toggleMoreMenu(${index})">
                    更多 <i class="fas fa-chevron-down"></i>
                </button>
                <div class="more-menu" id="more-menu-${index}">
                    ${category.moreItems?.map(item => `
                        <a href="${item.url}" target="_blank" class="more-item">
                            ${item.name}
                        </a>
                    `).join('')}
                </div>
            </div>
        </div>
        <div class="grid">
            ${category.items.map(item => `
                <a href="${item.url}" target="_blank" class="tool-card">
                    <div class="tool-frame">
                        <h3>${item.name}</h3>
                    </div>
                </a>
            `).join('')}
        </div>
    </div>
`;

    // 新的分组渲染逻辑
    const createRow = (start, end) => `
<div class="horizontal-layout">
    ${categories.slice(start, end).map((category, i) =>
        categoryTemplate(category, start + i)
    ).join('')}
</div>
`;

    html += createRow(0, 2);  // 第一行 0-1
    html += createRow(2, 4);  // 第二行 2-3
    html += createRow(4, 6);  // 第三行 4-5

    container.innerHTML = html;
}

// 主题切换
function toggleTheme() {
    document.body.setAttribute('data-theme',
        document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
}

// 更多菜单切换
let activeMenu = null;
function toggleMoreMenu(index) {
    const menu = document.getElementById(`more-menu-${index}`);

    if (activeMenu === menu) {
        menu.classList.remove('show');
        activeMenu = null;
    } else {
        // 关闭其他菜单
        if (activeMenu) activeMenu.classList.remove('show');
        menu.classList.add('show');
        activeMenu = menu;
    }
}

// 点击外部关闭菜单
document.addEventListener('click', (e) => {
    if (!e.target.closest('.more-wrapper')) {
        if (activeMenu) {
            activeMenu.classList.remove('show');
            activeMenu = null;
        }
    }
});

// 初始化
window.onload = renderCategories;

// 待办事项功能
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = todos.map((todo, index) => `
        <li class="countdown-item ${todo.completed ? 'completed' : ''}"> <!-- 添加 completed 类 -->
            <span>
                ${todo.text}
                <small>(${new Date(todo.date).toLocaleDateString()})</small>
            </span>
            <div>
                <button onclick="toggleComplete(${index})" class="status-button">
                    ${todo.completed ? '已完成' : '未完成'}
                </button>
                <button onclick="deleteTodo(${index})">删除</button>
            </div>
        </li>
    `).join('');
}

function addTodo() {
    const input = document.getElementById('todo-input');
    const dateInput = document.getElementById('todo-date');
    const text = input.value.trim();
    const date = dateInput.value;

    if (text && date) {
        todos.push({ text, date, completed: false });
        localStorage.setItem('todos', JSON.stringify(todos));
        input.value = '';
        dateInput.value = '';
        renderTodos();
    } else {
        alert('请输入待办事项和日期！');
    }
}

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed; // 切换完成状态
    localStorage.setItem('todos', JSON.stringify(todos)); // 保存到本地存储
    renderTodos(); // 重新渲染列表
}

function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}

// 初始化时渲染待办事项
window.onload = () => {
    renderCategories();
    renderTodos();
};

// 倒计时功能
let countdowns = JSON.parse(localStorage.getItem('countdowns')) || [];

function renderCountdowns() {
    const countdownList = document.getElementById('countdown-list');
    countdownList.innerHTML = countdowns.map((countdown, index) => {
        const eventDate = new Date(countdown.date);
        const today = new Date();
        const timeDiff = eventDate - today;
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        return `
            <li class="countdown-item">
                <span>
                    ${countdown.event} - 还剩 ${daysLeft} 天
                    <small>(${eventDate.toLocaleDateString()})</small>
                </span>
                <button onclick="deleteCountdown(${index})">删除</button>
            </li>
        `;
    }).join('');
}

function addCountdown() {
    const eventInput = document.getElementById('countdown-event');
    const dateInput = document.getElementById('countdown-date');
    const event = eventInput.value.trim();
    const date = dateInput.value;

    if (event && date) {
        countdowns.push({ event, date });
        localStorage.setItem('countdowns', JSON.stringify(countdowns));
        eventInput.value = '';
        dateInput.value = '';
        renderCountdowns();
    } else {
        alert('请输入事件名称和日期！');
    }
}

function deleteCountdown(index) {
    countdowns.splice(index, 1);
    localStorage.setItem('countdowns', JSON.stringify(countdowns));
    renderCountdowns();
}

// 初始化时渲染倒计时
window.onload = () => {
    renderCategories();
    renderTodos();
    renderCountdowns();
};

// 日历功能
function updateDateTime() {
    const now = new Date();
    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time');

    // 格式化日期
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('zh-CN', options);

    // 格式化时间
    timeElement.textContent = now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
}

// 每秒钟更新一次时间
setInterval(updateDateTime, 1000);
updateDateTime(); // 初始化

// 天气功能
async function fetchWeather() {
    const apiKey = '75749484efa22d9b52412ee8a0a2d8c9'; // 替换为你的天气API密钥
    const city = 'Guilin'; // 替换为目标城市
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=zh_cn`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const weatherIcon = document.getElementById('weather-icon');
        const weatherTemp = document.getElementById('weather-temp');
        const weatherCity = document.getElementById('weather-city');

        // 更新天气信息
        weatherTemp.textContent = `${Math.round(data.main.temp)}°C`;
        weatherCity.textContent = data.name;

        // 根据天气代码设置图标
        const weatherCode = data.weather[0].id;
        if (weatherCode >= 200 && weatherCode < 300) {
            weatherIcon.textContent = '⛈️'; // 雷阵雨
        } else if (weatherCode >= 300 && weatherCode < 600) {
            weatherIcon.textContent = '🌧️'; // 雨
        } else if (weatherCode >= 600 && weatherCode < 700) {
            weatherIcon.textContent = '❄️'; // 雪
        } else if (weatherCode >= 700 && weatherCode < 800) {
            weatherIcon.textContent = '🌫️'; // 雾
        } else if (weatherCode === 800) {
            weatherIcon.textContent = '☀️'; // 晴
        } else if (weatherCode > 800) {
            weatherIcon.textContent = '☁️'; // 多云
        }
    } catch (error) {
        console.error('天气数据获取失败:', error);
        document.getElementById('weather-city').textContent = '天气加载失败';
    }
}

// 初始化天气
fetchWeather();

// 今天吃什么功能
const foodList = [
    "赣味小炒", "客来香", "川菜馆", "这些年", "食堂", "蛋炒饭", 
    "KFC疯狂星期四", "塔斯汀汉堡","沙县小吃", "纸包鱼", "云吞面", 
    "黄焖鸡米饭", "重庆鸡公煲", "张亮麻辣烫", "兰州拉面", "铜炉火锅鸡", 
    "东北饺子馆", "重庆火锅", "五谷鱼粉", "羊肉粉", "星厨小宴", 
    "盖浇饭", "烤肉拌饭", "螺蛳粉","鼎唐烧鹅", "桂林米粉", 
    "老秦家面馆","顺意面馆","武汉热干面", "胖妹面庄", 
    "重庆小面", "煲仔饭", "肠粉",
];

function recommendFood() {
    const resultElement = document.getElementById('food-result');
    // 添加加载动画
    resultElement.innerHTML = '<div class="loading-dots"><span>.</span><span>.</span><span>.</span></div>';
    
    // 模拟选择过程
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * foodList.length);
        resultElement.textContent = `少爷请吃：${foodList[randomIndex]}！`;
    }, 800);
}

// 加载动画样式（添加到CSS）
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
.loading-dots {
    display: inline-flex;
    gap: 4px;
}
.loading-dots span {
    animation: dot-bounce 1s infinite;
}
@keyframes dot-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}
`;
document.head.appendChild(loadingStyle);