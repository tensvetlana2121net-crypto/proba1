// Данные глав
const chapters = {
    1: {
        title: "Глава 1: Основы программирования",
        content: `
            <h2>Основы программирования</h2>
            <p>Программирование — это процесс создания компьютерных программ. Сегодня мы рассмотрим базовые концепции.</p>
            
            <div class="image-container">
                <img src="https://via.placeholder.com/600x300?text=Программирование" alt="Программирование">
                <figcaption>Рисунок 1: Процесс разработки</figcaption>
            </div>
            
            <h3>Ключевые понятия:</h3>
            <ul>
                <li>Переменные и типы данных</li>
                <li>Условные операторы (if-else)</li>
                <li>Циклы (for, while)</li>
                <li>Функции и процедуры</li>
            </ul>
            
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
            </div>
            
            <div class="image-container">
                <img src="https://via.placeholder.com/600x200?text=Пример+кода" alt="Пример кода">
            </div>
        `,
        survey: [
            { question: "Какой язык программирования вы считаете лучшим для начинающих?", type: "radio", options: ["Python", "JavaScript", "Java", "C++"] },
            { question: "Что такое переменная?", type: "text" },
            { question: "Насколько понятна эта глава? (1-5)", type: "number", min: 1, max: 5 }
        ]
    },
    2: {
        title: "Глава 2: Продвинутые техники",
        content: `
            <h2>Продвинутые техники программирования</h2>
            <p>Углубляем знания и изучаем сложные концепции.</p>
            
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
            </div>
            
            <h3>Темы главы:</h3>
            <ul>
                <li>Объектно-ориентированное программирование</li>
                <li>Паттерны проектирования</li>
                <li>Работа с базами данных</li>
                <li>Тестирование и отладка</li>
            </ul>
            
            <div class="image-container">
                <img src="https://via.placeholder.com/600x400?text=UML+диаграмма" alt="UML диаграмма">
            </div>
        `,
        survey: [
            { question: "Какой паттерн проектирования вы используете чаще всего?", type: "radio", options: ["Singleton", "Factory", "Observer", "Strategy", "Другой"] },
            { question: "Используете ли вы TDD (разработку через тестирование)?", type: "radio", options: ["Да, всегда", "Иногда", "Нет", "Планирую начать"] },
            { question: "Оцените сложность материала от 1 до 5", type: "range", min: 1, max: 5 }
        ]
    },
    3: {
        title: "Глава 3: Архитектура ПО",
        content: `
            <h2>Архитектура программного обеспечения</h2>
            <p>Как проектировать масштабируемые и поддерживаемые системы.</p>
            
            <div class="image-container">
                <img src="https://via.placeholder.com/600x300?text=Архитектура+микросервисов" alt="Архитектура">
            </div>
            
            <h3>Основные архитектурные стили:</h3>
            <ul>
                <li>Монолитная архитектура</li>
                <li>Микросервисы</li>
                <li>Событийно-ориентированная архитектура</li>
                <li>Serverless</li>
            </ul>
            
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
            </div>
        `,
        survey: [
            { question: "Какая архитектура лучше для стартапа?", type: "radio", options: ["Монолит", "Микросервисы", "Serverless", "Зависит от проекта"] },
            { question: "Ваш опыт работы с микросервисами:", type: "select", options: ["0 проектов", "1-2 проекта", "3-5 проектов", "Более 5"] },
            { question: "Комментарии и предложения:", type: "textarea" }
        ]
    }
};

let currentChapter = null;

// Загрузка главы
function loadChapter(chapterNum) {
    currentChapter = chapterNum;
    const chapter = chapters[chapterNum];
    if (!chapter) return;
    
    const contentDiv = document.getElementById('chapter-content');
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
    
    // Обновляем URL без перезагрузки
    history.pushState({ chapter: chapterNum }, '', `#chapter-${chapterNum}`);
    
    // Прокрутка к началу
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Показать опрос
function showSurvey(chapterNum) {
    const chapter = chapters[chapterNum];
    if (!chapter || !chapter.survey) return;
    
    const modal = document.getElementById('survey-modal');
    const questionsDiv = document.getElementById('survey-questions');
    
    let html = `<input type="hidden" id="survey-chapter" value="${chapterNum}">`;
    html += `<input type="hidden" id="survey-chapter-title" value="${chapter.title}">`;
    
    chapter.survey.forEach((q, idx) => {
        html += `<div class="survey-question">`;
        html += `<label><strong>${idx + 1}. ${q.question}</strong></label><br>`;
        
        switch(q.type) {
            case 'radio':
                q.options.forEach(opt => {
                    html += `<label><input type="radio" name="q${idx}" value="${opt}"> ${opt}</label><br>`;
                });
                break;
            case 'text':
                html += `<input type="text" name="q${idx}" class="survey-input" style="width: 100%; padding: 8px; margin-top: 5px;">`;
                break;
            case 'number':
                html += `<input type="number" name="q${idx}" min="${q.min}" max="${q.max}" class="survey-input" style="width: 100%; padding: 8px; margin-top: 5px;">`;
                break;
            case 'range':
                html += `<input type="range" name="q${idx}" min="${q.min}" max="${q.max}" oninput="this.nextElementSibling.value = this.value">`;
                html += `<output>${q.min}</output>`;
                break;
            case 'select':
                html += `<select name="q${idx}" class="survey-input" style="width: 100%; padding: 8px; margin-top: 5px;">`;
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
document.getElementById('survey-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const chapterNum = document.getElementById('survey-chapter').value;
    const chapterTitle = document.getElementById('survey-chapter-title').value;
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
    
    // Сохраняем в localStorage (для демо)
    const allResponses = JSON.parse(localStorage.getItem('surveyResponses') || '[]');
    allResponses.push(responseData);
    localStorage.setItem('surveyResponses', JSON.stringify(allResponses));
    
    // Отправка на Google Sheets (опционально)
    await sendToGoogleSheets(responseData);
    
    alert('Спасибо! Ваши ответы сохранены.');
    document.getElementById('survey-modal').style.display = "none";
    
    // Показать все ответы (отдельная форма)
    showAllResponses();
});

// Отправка в Google Sheets (через Google Apps Script)
async function sendToGoogleSheets(data) {
    // Замените YOUR_WEB_APP_URL на URL вашего Google Apps Script
    const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
    
    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.log('Google Sheets не настроен, данные сохранены в localStorage');
    }
}

// Показать все ответы в отдельной форме
function showAllResponses() {
    const responses = JSON.parse(localStorage.getItem('surveyResponses') || '[]');
    
    if (responses.length === 0) {
        alert('Пока нет сохранённых ответов');
        return;
    }
    
    let output = '=== ВСЕ ОТВЕТЫ НА ОПРОСЫ ===\n\n';
    responses.forEach((resp, idx) => {
        output += `📌 Опрос #${idx + 1}\n`;
        output += `📖 Глава: ${resp.chapterTitle}\n`;
        output += `🕐 Дата: ${resp.timestamp}\n`;
        output += `📝 Ответы:\n`;
        
        for (const [question, answer] of Object.entries(resp.answers)) {
            output += `  • ${question}: ${answer}\n`;
        }
        output += '\n' + '='.repeat(50) + '\n\n';
    });
    
    // Создаём новое окно с ответами
    const win = window.open();
    win.document.write(`
        <html>
        <head><title>Ответы на опросы</title></head>
        <body style="font-family: monospace; padding: 20px;">
            <h2>📊 Результаты опросов</h2>
            <pre>${output}</pre>
            <button onclick="localStorage.clear(); location.reload();">Очистить все ответы</button>
        </body>
        </html>
    `);
}

// Навигация по кнопкам "Назад/Вперёд" браузера
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.chapter) {
        loadChapter(event.state.chapter);
    }
});

// Закрытие модального окна
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('survey-modal').style.display = "none";
});

window.onclick = function(event) {
    const modal = document.getElementById('survey-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Обработка кликов по оглавлению
document.querySelectorAll('#table-of-contents a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const chapter = link.getAttribute('data-chapter');
        loadChapter(parseInt(chapter));
    });
});

// Загрузка первой главы по умолчанию (если есть hash)
if (window.location.hash) {
    const chapterMatch = window.location.hash.match(/chapter-(\d+)/);
    if (chapterMatch) {
        loadChapter(parseInt(chapterMatch[1]));
    }
}