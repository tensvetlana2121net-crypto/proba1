// Данные глав с добавленным историческим текстом
const chapters = {
    1: {
        title: "Глава 1: История русской журналистики",
        content: `
            <h2>📜 История русской журналистики</h2>
            <p>Путь развития отечественной журналистики — это увлекательное путешествие от рукописных бюллетеней до современных медиа. Рассмотрим ключевые этапы этого развития.</p>
            
            <div class="image-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vedomosti_1703.jpg/800px-Vedomosti_1703.jpg" alt="Первая газета Ведомости" onerror="this.src='https://via.placeholder.com/600x400?text=Первая+газета+Ведомости'">
                <figcaption>Первая русская печатная газета «Ведомости», 1703 год</figcaption>
            </div>
            
            <h3>📜 XVII век: Дорегулярная журналистика</h3>
            <p>Регулярной журналистики не существовало. Главной формой передачи информации были гонцы, грамоты и <strong>«Куранты»</strong> (от французского courant — текущий). Это рукописные бюллетени при Посольском приказе (с 1621 года), которые составлялись для царя Алексея Михайловича. Они содержали выдержки из иностранных газет и донесения послов — информация была строго секретной, «для служебного пользования».</p>
            
            <div class="image-container">
                <img src="https://via.placeholder.com/600x300?text=Куранты+Посольского+приказа" alt="Куранты">
                <figcaption>Образец рукописных «Курантов» XVII века</figcaption>
            </div>
            
            <h3>👑 XVIII век: Рождение регулярной печати</h3>
            <p>Реформы Петра I создали светскую публичную сферу.</p>
            
            <p><strong>1703 год</strong> — «Ведомости» (первая русская печатная газета). Пётр I лично редактировал номера, ставя цель информировать о войнах, промышленности и просвещении.</p>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
            </div>
            
            <p><strong>Середина века</strong> — появление журналов. М.В. Ломоносов выпускает научно-популярный журнал (1765 год).</p>
            
            <p><strong>Эпоха Екатерины II.</strong> Расцвет сатирической журналистики: <strong>Н.И. Новиков</strong> издаёт «Трутень», «Живописец», критикуя крепостничество и бюрократию. Однако после пугачёвского бунта журналы Новикова закрывают.</p>
            
            <div class="image-container">
                <img src="https://via.placeholder.com/600x350?text=Журналы+Новикова" alt="Журналы Новикова">
                <figcaption>Сатирические журналы Н.И. Новикова</figcaption>
            </div>
            
            <p><strong>Конец века.</strong> А.Н. Радищев в «Путешествии из Петербурга в Москву» (типографским станком как журналом) закладывает традицию подпольной («самиздат») и радикальной публицистики. Журналистика становится полем борьбы идей.</p>
            
            <h3>⭐ XIX век: Золотой век русской журналистики</h3>
            <p>Журналы становятся «толстыми», литературно-политическими, формируя общественное мнение.</p>
            
            <p><strong>1810–1820-е:</strong> Конкуренция «карамзинистов» («Вестник Европы») и консерваторов («Русский вестник»). Декабристы издают альманахи («Полярная звезда», «Мнемозина»).</p>
            
            <p><strong>1830–1840-е:</strong> Появление «Литературной газеты» и «Московского наблюдателя». <strong>А.С. Пушкин</strong> основывает «Современник» (1836) — будущий рупор демократов. Возникает «журнальная цензура», борьба «западников» и «славянофилов».</p>
            
            <div class="image-container">
                <img src="https://via.placeholder.com/600x350?text=Современник+Пушкина" alt="Современник">
                <figcaption>Журнал «Современник», основанный А.С. Пушкиным</figcaption>
            </div>
            
            <p><strong>1850–1860-е:</strong> Расцвет демократической журналистики. <strong>Некрасов и Чернышевский</strong> превращают «Современник» в трибуну революционной мысли. И.С. Аксаков издаёт «День». Фельетон становится ведущим жанром.</p>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
            </div>
            
            <p><strong>1870-е–1890-е:</strong> Появляются массовые дешёвые газеты для народа («Московский листок», «Петербургская газета»). Начинают работу <strong>В.Г. Короленко, А.П. Чехов</strong> (как фельетонист). Развитие телеграфных агентств (РТА).</p>
            
            <div class="image-container">
                <img src="https://via.placeholder.com/600x300?text=Чехов+фельетонист" alt="Чехов">
                <figcaption>А.П. Чехов — мастер фельетона</figcaption>
            </div>
            
            <div class="info-box">
                <h4>📌 Ключевые выводы:</h4>
                <ul>
                    <li>XVII век — рукописные «Куранты» для царя</li>
                    <li>1703 год — первая печатная газета «Ведомости»</li>
                    <li>XVIII век — сатирическая журналистика Новикова</li>
                    <li>XIX век — «толстые» журналы и «Современник»</li>
                </ul>
            </div>
        `,
        survey: [
            { question: "В каком году вышла первая русская печатная газета «Ведомости»?", type: "radio", options: ["1699", "1703", "1725", "1765"] },
            { question: "Кто издавал сатирические журналы «Трутень» и «Живописец»?", type: "radio", options: ["Ломоносов", "Радищев", "Новиков", "Пушкин"] },
            { question: "Какой журнал основал А.С. Пушкин в 1836 году?", type: "text" },
            { question: "Что такое «Куранты»?", type: "text" },
            { question: "Оцените качество материала от 1 до 5", type: "range", min: 1, max: 5 },
            { question: "Ваши комментарии и предложения:", type: "textarea" }
        ]
    },
    2: {
        title: "Глава 2: Жанры и формы журналистики",
        content: `
            <h2>📰 Жанры и формы журналистики</h2>
            <p>Изучаем основные журналистские жанры: от заметки до расследования.</p>
            
            <div class="image-container">
                <img src="https://via.placeholder.com/600x300?text=Жанры+журналистики" alt="Жанры">
                <figcaption>Классификация журналистских жанров</figcaption>
            </div>
            
            <h3>Информационные жанры:</h3>
            <ul>
                <li><strong>Заметка</strong> — оперативное сообщение о событии</li>
                <li><strong>Репортаж</strong> — рассказ с места событий</li>
                <li><strong>Интервью</strong> — беседа с ньюсмейкером</li>
                <li><strong>Отчёт</strong> — подробное освещение мероприятия</li>
            </ul>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
            </div>
            
            <h3>Аналитические жанры:</h3>
            <ul>
                <li><strong>Статья</strong> — глубокий анализ проблемы</li>
                <li><strong>Обозрение</strong> — обзор событий за период</li>
                <li><strong>Журналистское расследование</strong> — поиск скрытых фактов</li>
                <li><strong>Рецензия</strong> — критический разбор произведения</li>
            </ul>
            
            <h3>Художественно-публицистические:</h3>
            <ul>
                <li><strong>Очерк</strong> — документально-художественное повествование</li>
                <li><strong>Фельетон</strong> — сатирическое обличение пороков</li>
                <li><strong>Памфлет</strong> — острая политическая сатира</li>
            </ul>
            
            <div class="image-container">
                <img src="https://via.placeholder.com/600x250?text=Фельетон+в+газете" alt="Фельетон">
                <figcaption>Пример фельетона в дореволюционной газете</figcaption>
            </div>
        `,
        survey: [
            { question: "Какой жанр подходит для оперативного сообщения о событии?", type: "radio", options: ["Статья", "Заметка", "Фельетон", "Очерк"] },
            { question: "Кто из русских писателей прославился как фельетонист?", type: "radio", options: ["Толстой", "Достоевский", "Чехов", "Гоголь"] },
            { question: "Оцените полезность главы от 1 до 5", type: "range", min: 1, max: 5 }
        ]
    },
    3: {
        title: "Глава 3: Современная медиасреда",
        content: `
            <h2>📱 Современная медиасреда</h2>
            <p>Цифровая трансформация журналистики: от газет к социальным сетям.</p>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
            </div>
            
            <h3>Тренды современной журналистики:</h3>
            <ul>
                <li>📱 Мобильная журналистика (MoJo)</li>
                <li>🎥 Видеоконтент и стриминг</li>
                <li>🤖 Искусственный интеллект в новостях</li>
                <li>📊 Дата-журналистика</li>
                <li>🔍 Фактчекинг и борьба с фейками</li>
            </ul>
            
            <div class="image-container">
                <img src="https://via.placeholder.com/600x300?text=Современные+медиа" alt="Современные медиа">
                <figcaption>Трансформация медиапотребления</figcaption>
            </div>
            
            <h3>Платформы распространения:</h3>
            <ul>
                <li>Telegram-каналы</li>
                <li>YouTube</li>
                <li>TikTok</li>
                <li>Подкасты</li>
                <li>Интернет-СМИ</li>
            </ul>
            
            <div class="info-box">
                <h4>💡 Важно:</h4>
                <p>Современный журналист должен владеть мультимедийными навыками: уметь снимать видео, монтировать, работать с данными и верифицировать информацию.</p>
            </div>
        `,
        survey: [
            { question: "Какую платформу вы считаете главной для новостей сегодня?", type: "radio", options: ["Telegram", "YouTube", "TikTok", "Традиционные СМИ", "Другое"] },
            { question: "Что такое фактчекинг?", type: "text" },
            { question: "Ваши пожелания по теме книги:", type: "textarea" }
        ]
    }
};

// Добавляем стиль для info-box
const infoBoxStyle = document.createElement('style');
infoBoxStyle.textContent = `
    .info-box {
        background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
        border-left: 4px solid #667eea;
        padding: 20px;
        margin: 25px 0;
        border-radius: 10px;
    }
    
    .info-box h4 {
        color: #667eea;
        margin-bottom: 10px;
    }
    
    figcaption {
        font-size: 0.85em;
        color: #666;
        margin-top: 8px;
        font-style: italic;
    }
    
    .chapter-header h1 {
        color: #667eea;
        border-bottom: 2px solid #e0e0e0;
        padding-bottom: 15px;
    }
`;
document.head.appendChild(infoBoxStyle);

// Остальной код (openBook, closeBook, loadChapter, showSurvey и т.д.) остаётся без изменений
let currentChapter = null;
let isBookOpen = false;

function openBook() {
    const cover = document.getElementById('book-cover');
    const content = document.getElementById('book-content');
    
    if (cover && content) {
        cover.style.animation = 'fadeOutUp 0.5s ease forwards';
        setTimeout(() => {
            cover.style.display = 'none';
            content.classList.remove('hidden');
            isBookOpen = true;
            content.style.animation = 'fadeInUp 0.6s ease';
        }, 500);
    }
}

function closeBook() {
    const cover = document.getElementById('book-cover');
    const content = document.getElementById('book-content');
    
    if (cover && content) {
        content.style.animation = 'fadeOutDown 0.5s ease forwards';
        setTimeout(() => {
            content.classList.add('hidden');
            cover.style.display = 'flex';
            cover.style.animation = 'fadeInUp 0.6s ease';
            isBookOpen = false;
        }, 500);
    }
}

function loadChapter(chapterNum) {
    if (!isBookOpen) {
        openBook();
        setTimeout(() => loadChapter(chapterNum), 600);
        return;
    }
    
    currentChapter = chapterNum;
    const chapter = chapters[chapterNum];
    if (!chapter) return;
    
    const contentDiv = document.getElementById('chapter-content');
    if (contentDiv) {
        contentDiv.innerHTML = `
            <div class="chapter-header">
                <h1>${chapter.title}</h1>
            </div>
            ${chapter.content}
            <div class="chapter-nav">
                <button class="nav-btn" ${chapterNum == 1 ? 'disabled' : ''} onclick="loadChapter(${chapterNum - 1})">
                    ← Предыдущая глава
                </button>
                <button class="nav-btn" onclick="showSurvey(${chapterNum})">
                    📝 Пройти опрос
                </button>
                <button class="nav-btn" ${chapterNum == 3 ? 'disabled' : ''} onclick="loadChapter(${chapterNum + 1})">
                    Следующая глава →
                </button>
            </div>
        `;
    }
    
    history.pushState({ chapter: chapterNum }, '', `#chapter-${chapterNum}`);
    window.scrollTo({ top: 200, behavior: 'smooth' });
}

function showSurvey(chapterNum) {
    const chapter = chapters[chapterNum];
    if (!chapter || !chapter.survey) return;
    
    const modal = document.getElementById('survey-modal');
    const questionsDiv = document.getElementById('survey-questions');
    
    if (!modal || !questionsDiv) return;
    
    let html = `<input type="hidden" id="survey-chapter" value="${chapterNum}">`;
    html += `<input type="hidden" id="survey-chapter-title" value="${chapter.title}">`;
    
    chapter.survey.forEach((q, idx) => {
        html += `<div class="survey-question">`;
        html += `<label><strong>${idx + 1}. ${q.question}</strong></label><br>`;
        
        switch(q.type) {
            case 'radio':
                q.options.forEach(opt => {
                    html += `<label style="display: block; margin: 5px 0;"><input type="radio" name="q${idx}" value="${opt}" required> ${opt}</label>`;
                });
                break;
            case 'text':
                html += `<input type="text" name="q${idx}" class="survey-input" style="width: 100%; padding: 8px; margin-top: 5px;" required>`;
                break;
            case 'number':
                html += `<input type="number" name="q${idx}" min="${q.min}" max="${q.max}" class="survey-input" style="width: 100%; padding: 8px; margin-top: 5px;" required>`;
                break;
            case 'range':
                html += `<input type="range" name="q${idx}" min="${q.min}" max="${q.max}" oninput="this.nextElementSibling.value = this.value" required>`;
                html += `<output>${q.min}</output>`;
                break;
            case 'select':
                html += `<select name="q${idx}" class="survey-input" style="width: 100%; padding: 8px; margin-top: 5px;" required>`;
                html += `<option value="">Выберите вариант...</option>`;
                q.options.forEach(opt => {
                    html += `<option value="${opt}">${opt}</option>`;
                });
                html += `</select>`;
                break;
            case 'textarea':
                html += `<textarea name="q${idx}" rows="3" class="survey-input" style="width: 100%; padding: 8px; margin-top: 5px;"></textarea>`;
                break;
        }
        html += `</div><br>`;
    });
    
    questionsDiv.innerHTML = html;
    modal.style.display = "block";
}

// Отправка опроса
const form = document.getElementById('survey-form');
if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const chapterNum = document.getElementById('survey-chapter')?.value;
        const chapterTitle = document.getElementById('survey-chapter-title')?.value;
        
        if (!chapterNum || !chapters[chapterNum]) return;
        
        const questions = chapters[chapterNum].survey;
        const answers = {};
        
        for (let i = 0; i < questions.length; i++) {
            const input = document.querySelector(`[name="q${i}"]`);
            if (input) {
                answers[questions[i].question] = input.value;
            } else {
                const radios = document.querySelectorAll(`[name="q${i}"]`);
                if (radios.length > 0) {
                    const selected = Array.from(radios).find(r => r.checked);
                    answers[questions[i].question] = selected ? selected.value : "Не указано";
                }
            }
        }
        
        const responseData = {
            chapter: chapterNum,
            chapterTitle: chapterTitle,
            timestamp: new Date().toISOString(),
            answers: answers
        };
        
        const allResponses = JSON.parse(localStorage.getItem('surveyResponses') || '[]');
        allResponses.push(responseData);
        localStorage.setItem('surveyResponses', JSON.stringify(allResponses));
        
        alert('✅ Спасибо! Ваши ответы сохранены.');
        const modal = document.getElementById('survey-modal');
        if (modal) modal.style.display = "none";
        showAllResponses();
    });
}

function showAllResponses() {
    const responses = JSON.parse(localStorage.getItem('surveyResponses') || '[]');
    
    if (responses.length === 0) {
        alert('📭 Пока нет сохранённых ответов');
        return;
    }
    
    let output = '📊 ВСЕ ОТВЕТЫ НА ОПРОСЫ 📊\n\n';
    output += '═'.repeat(60) + '\n\n';
    
    responses.forEach((resp, idx) => {
        output += `📌 ОПРОС #${idx + 1}\n`;
        output += `📖 Глава: ${resp.chapterTitle}\n`;
        output += `🕐 Дата: ${new Date(resp.timestamp).toLocaleString('ru-RU')}\n`;
        output += `📝 ОТВЕТЫ:\n`;
        
        for (const [question, answer] of Object.entries(resp.answers)) {
            output += `   • ${question}\n`;
            output += `     → ${answer || '—'}\n\n`;
        }
        output += '═'.repeat(60) + '\n\n';
    });
    
    const win = window.open();
    if (win) {
        win.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Ответы на опросы</title>
                <style>
                    body { font-family: 'Courier New', monospace; padding: 30px; background: #f5f5f5; }
                    .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 15px; }
                    h1 { color: #667eea; text-align: center; }
                    pre { white-space: pre-wrap; font-size: 14px; }
                    button { background: #667eea; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin: 10px; }
                    button:hover { background: #5a67d8; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>📋 Результаты опросов</h1>
                    <pre>${output}</pre>
                    <button onclick="localStorage.clear(); location.reload();">🗑️ Очистить все ответы</button>
                    <button onclick="window.print()">🖨️ Печать</button>
                </div>
            </body>
            </html>
        `);
    }
}

// Обработчики событий
const openBtn = document.getElementById('open-book-btn');
if (openBtn) openBtn.addEventListener('click', openBook);

const closeBtn = document.getElementById('close-book-btn');
if (closeBtn) closeBtn.addEventListener('click', closeBook);

const closeModal = document.querySelector('.close');
if (closeModal) {
    closeModal.addEventListener('click', () => {
        const modal = document.getElementById('survey-modal');
        if (modal) modal.style.display = "none";
    });
}

window.onclick = function(event) {
    const modal = document.getElementById('survey-modal');
    if (event.target === modal && modal) {
        modal.style.display = "none";
    }
};

const tocLinks = document.querySelectorAll('#table-of-contents a');
tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const chapter = link.getAttribute('data-chapter');
        if (chapter) loadChapter(parseInt(chapter));
    });
});

// Добавляем анимации
const styleAnim = document.createElement('style');
styleAnim.textContent = `
    @keyframes fadeOutUp {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-30px); }
    }
    @keyframes fadeOutDown {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(30px); }
    }
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(styleAnim);

// Проверка hash
if (window.location.hash) {
    const chapterMatch = window.location.hash.match(/chapter-(\d+)/);
    if (chapterMatch) {
        setTimeout(() => loadChapter(parseInt(chapterMatch[1])), 100);
    }
}