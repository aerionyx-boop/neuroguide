/**
 * Веб-версия приложения «НейроГид» (аналог Tkinter на JavaScript).
 */
const BACKGROUND_IMAGE = "Приложение_для_обучения_молодежи_инвестировать.jpg";

const ALL_TYPES_SECTIONS = {
  "3": {
    title: "Текстовые нейросети (ChatGPT, Яндекс GPT, Claude и др.)",
    sub: {
      "1": { title: "3.1. Написание текстов" },
      "2": { title: "3.2. Обработка текста" },
      "3": { title: "3.3. Идеи и мозговой штурм" },
      "4": { title: "3.4. Обучение и объяснение сложных тем" },
      "5": { title: "3.5. Программирование" },
    },
  },
  "4": {
    title: "Генерация и редактирование изображений (Midjourney, DALL·E 3, Kandinsky)",
    sub: {
      "1": { title: "4.1. Ключев" },
      "2": { title: "4.2. Как описать стиль?" },
      "3": { title: "4.3. Параметры качества" },
      "4": { title: "4.4. Как доработать изображение?" },
      "5": { title: '4.5. Что такое "сид" и зачем он нужен?' },
    },
  },
  "5": {
    title: "Голосовые нейросети и генерация музыки",
    sub: {
      "1": { title: "5.1. Синтез речи" },
      "2": { title: "5.2. Клонирование голоса" },
      "3": { title: "5.3. Генерация музыки" },
      "4": { title: "5.4. Обработка звука" },
    },
  },
  "6": {
    title: "Работа с видео и анимацией (Sora, Runway, Pika)",
    sub: {
      "1": { title: "6.1. Генерация видео по тексту" },
      "2": { title: "6.2. Редактирование видео" },
      "3": { title: "6.3. Анимация из изображения" },
      "4": { title: "6.4. Deepfake: серьезность и риски" },
    },
  },
  "7": {
    title: "Работа с данными и аналитика",
    sub: {
      "1": { title: "7.1. Как просить найти актуальную информацию?" },
      "2": { title: "7.2. Анализ больших документов" },
      "3": { title: "7.3. Сравнительный анализ" },
      "4": { title: "7.4. Таблицы и структурирование" },
    },
  },
};

const INSTRUCTION_SECTIONS = {
  "1": {
    title: "Что такое нейросеть и как она работает?",
    sub: {
      "1": { title: "1.1. Что такое нейросеть и ИИ? Простыми словами." },
      "2": { title: "1.2. Виды нейросетей и их отличия" },
      "3": { title: '1.3. Как нейросеть "думает"? Это же не человек!' },
      "4": { title: '1.4. Что такое обучение на данных и при чём здесь "галлюцинации"?' },
      "5": { title: "1.5. Почему нейросети ошибаются и как это исправить?" },
    },
  },
  "2": {
    title: 'Искусство промта. Как правильно "разговаривать" с нейросетью',
    sub: {
      "1": { title: "2.1. Что такое промт и почему он важен?" },
      "2": { title: "2.2. Формула: Роль → Контекст → Задача → Ограничения" },
      "3": { title: "2.3. От плохого к отличному: практические примеры" },
      "4": { title: "2.4. Few-shot prompting (обучение на примерах)" },
      "5": { title: "2.5. Специальные команды" },
    },
  },
};

const PRACTICE_TASKS = [
  {
    title: "Задание 1: Текстовая нейросеть (ChatGPT / DeepSeek / аналоги)",
    task: `Задача:
    Нужно подготовить сценарий для короткого обучающего видео (2-3 минуты) на тему «Как работать с возражениями в продажах». Видео будет смотреть менеджер по продажам с опытом 1–2 года. Стиль деловой, но без излишней академичности. В конце должен быть четкий вывод.

    Что нужно написать в промте:
    Сформулируйте запрос текстовой нейросети, чтобы она выдала готовый сценарий с указанием таймингов и логических блоков.`,
    answer: `Правильный промт:
    «Ты сценарист образовательных видео. Напиши сценарий для обучающего ролика длительностью 2-3 минуты на тему «Как работать с возражениями в продажах».
    Целевая аудитория - менеджеры по продажам с опытом 1–2 года.
    Стиль деловой, без академичности, с примерами из практики.
    Структура сценария:

    1. Вступление (15–20 сек) - зачем нужно уметь работать с возражениями.
    2. Основной блок (2 мин) - 3 типичных возражения и техники ответа на них (с примерами диалогов).
    3. Заключение (20–30 сек) - вывод в виде 3 тезисов.
    В конце добавь примерные тайминги для каждого блока.»`,
  },
  {
    title: "Задание 2: Голосовая нейросеть (синтез речи, озвучка)",
    task: `Задача:
    Есть готовый текст:

    «Я помню чудное мгновенье:
    Передо мной явилась ты,
    Как мимолетное виденье,
    Как гений чистой красоты.»

    Этот текст нужно озвучить голосом поэта (спокойный, уверенный, средний темп). Файл будет использоваться как голосовое сопровождение к слайду в презентации.

    Что нужно написать в промте:
    Сформулируйте запрос для голосовой нейросети, указав все параметры озвучки (тембр, эмоция, темп, акценты).`,
    answer: `Правильный промт:

    Озвучь следующий текст голосом поэта:

    «Я помню чудное мгновенье:
    Передо мной явилась ты,
    Как мимолетное виденье,
    Как гений чистой красоты.»

    Параметры озвучки:

    Тембр: мужской, низкий, с легкой хрипотцой (как у зрелого чтеца, ассоциирующийся с образом поэта XIX века).
    Эмоциональная окраска: спокойная, глубокая, с оттенком светлой грусти и восхищения. Без излишней театральности.
    Темп речи: средний (примерно 120–130 слов в минуту), плавный, с естественными паузами.
    Логические акценты: выделить голосом слова «чудное», «явилась», «гений чистой красоты». После второй строки сделать короткую паузу (≈0,5 сек).
    Интонация: повествовательная, с мягким понижением в конце каждой строки, кроме последней — на ней легкий подъем с финальным понижением.

    Формат вывода: аудиофайл MP3, частота 44,1 кГц.`,
  },
  {
    title: "Задание 3: Нейросеть для видео / анимации (Runway, Pika, Sora и аналоги)",
    task: `Задача:
    Нужно создать короткий видеоклип (5–7 секунд) для соцсетей.
    Сюжет:
    Белая чашка кофе стоит на деревянном столе, от нее поднимается пар. На заднем плане размытое окно, за которым утро. Атмосфера уютная, спокойная.

    Видео будет использоваться как фон для цитаты в Instagram Reels.

    Что нужно написать в промте:
    Сформулируйте запрос для нейросети генерации видео, чтобы получить именно такой кадр с нужным движением (пар, возможно легкое движение камеры).`,
    answer: `Правильный промт:

    Сгенерируй видео длительностью 6 секунд.
    Сюжет: крупный план белой керамической чашки с кофе на деревянном столе. От чашки поднимается легкий пар. На заднем плане - размытое окно, за ним виден мягкий утренний свет.
    Движение: камера медленно приближается к чашке. Пар слегка колышется.
    Стиль: фотореалистичный, мягкие тени, теплая цветовая гамма.
    Соотношение сторон: 9:16 (вертикальное).
    Разрешение: 1080×1920.`,
  },
  {
    title: "Задание 4: Нейросеть для генерации изображений (Midjourney, DALL·E, Kandinsky и аналоги)",
    task: `Задача:
    Нужно изображение для обложки статьи на тему «Цифровой этикет: как не бесить коллег в мессенджерах».
    Стиль современная иллюстрация, плоская графика (flat illustration), светлые тона. В центре должен находиться человек перед экраном ноутбука с немного растерянным или задумчивым выражением лица. Формат — квадратный 1:1.

    Что нужно написать в промте:
    Сформулируйте запрос для нейросети изображений с учетом стиля, композиции, персонажа, настроения и технических параметров.`,
    answer: `Правильный промт:

    Создай квадратное изображение (1:1) для обложки статьи на тему «Цифровой этикет: как не бесить коллег в мессенджерах».
    Стиль: современная плоская иллюстрация (flat illustration), светлая палитра, чистые линии
    Композиция: в центре — человек 25–35 лет, сидит за ноутбуком, выражение лица слегка растерянное или задумчивое.
    На заднем плане — стилизованные иконки мессенджеров (Telegram, Slack, WhatsApp) в виде легкого облака.
    Настроение: спокойное, с легким оттенком юмора.
    Технические параметры: высокое качество, минималистичный фон, достаточно места для текста по краям.`,
  },
];

class NeuroGuide {
  constructor() {
    this.mainEl = document.getElementById("main");
    this.bgEl = document.getElementById("background");
    this.trySetBackground();
    this.showMainScreen();
  }

  trySetBackground() {
    const img = new Image();
    img.onload = () => {
      this.bgEl.style.backgroundImage = `url("${encodeURI(BACKGROUND_IMAGE)}")`;
      this.bgEl.classList.remove("is-hidden");
    };
    img.onerror = () => {
      this.bgEl.classList.add("is-hidden");
    };
    img.src = BACKGROUND_IMAGE;
  }

  clearMain() {
    this.mainEl.replaceChildren();
  }

  // Удаляем старую кнопку назад из DOM
  removeBackButton() {
    const existingContainer = document.querySelector('.back-button-container');
    if (existingContainer) {
      existingContainer.remove();
    }
  }

  // Создаем кнопку назад сверху слева
  createBackButtonTop(onClick) {
    this.removeBackButton();
    
    const container = document.createElement('div');
    container.className = 'back-button-container';
    
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn-back-top';
    btn.textContent = '← Назад';
    btn.addEventListener('click', () => {
      this.removeBackButton();
      onClick();
    });
    
    container.appendChild(btn);
    document.querySelector('.app').appendChild(container);
    return btn;
  }

  showMainScreen() {
    this.clearMain();
    this.removeBackButton(); // Убираем кнопку назад на главном экране
    
    const mkBtn = (text, onClick) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "btn-main";
      b.textContent = text;
      b.addEventListener("click", onClick);
      return b;
    };
    this.mainEl.appendChild(
      mkBtn("Основные разделы", () => this.showInvestmentTypes())
    );
    this.mainEl.appendChild(
      mkBtn("Инструкция", () => this.showInvestmentMethods())
    );
    this.mainEl.appendChild(
      mkBtn("Практика", () => this.showPracticTask())
    );
  }

  // Старый createBackButton больше не используем, но оставим для совместимости
  createBackButton(onClick) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "btn-back";
    b.textContent = "Назад";
    b.addEventListener("click", onClick);
    return b;
  }

  showInvestmentTypes() {
    this.clearMain();
    this.createBackButtonTop(() => this.showMainScreen());
    
    const scroll = document.createElement("div");
    scroll.className = "screen-scroll";

    const names = [
      "Текстовые нейросети (ChatGPT, Яндекс GPT, Claude и др.)",
      "Генерация и редактирование изображений (Midjourney, DALL·E 3, Kandinsky)",
      "Голосовые нейросети и генерация музыки",
      "Работа с видео и анимацией (Sora, Runway, Pika)",
      "Работа с данными и аналитика",
    ];

    names.forEach((name, idx) => {
      const key = String(idx + 3);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn-section";
      btn.textContent = name;
      btn.addEventListener("click", () => this.showText(key));
      scroll.appendChild(btn);
    });

    this.mainEl.appendChild(scroll);
  }

  showInvestmentMethods() {
    this.clearMain();
    this.createBackButtonTop(() => this.showMainScreen());
    
    const scroll = document.createElement("div");
    scroll.className = "screen-scroll";

    const names = [
      "Что такое нейросеть и как она работает?",
      'Искусство промта. Как правильно \n"разговаривать" с нейросетью',
    ];

    names.forEach((name, idx) => {
      const key = String(idx + 1);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn-section";
      btn.textContent = name;
      btn.addEventListener("click", () => this.showText1(key));
      scroll.appendChild(btn);
    });

    this.mainEl.appendChild(scroll);
  }

  showPracticTask() {
    this.clearMain();
    this.createBackButtonTop(() => this.showMainScreen());

    const header = document.createElement("header");
    header.className = "practice-header";

    const title = document.createElement("h1");
    title.className = "practice-title";
    title.textContent = "Практические задания";

    const spacer = document.createElement("div");
    spacer.className = "practice-spacer";
    spacer.setAttribute("aria-hidden", "true");

    header.appendChild(title);
    header.appendChild(spacer);

    const container = document.createElement("div");
    container.className = "practice-container";

    PRACTICE_TASKS.forEach((task) => {
      const card = document.createElement("article");
      card.className = "task-card";

      const t = document.createElement("div");
      t.className = "task-title";
      t.textContent = task.title;

      const body = document.createElement("div");
      body.className = "task-body";
      body.textContent = task.task;

      const answerRow = document.createElement("div");
      answerRow.className = "answer-row";

      const answerDiv = document.createElement("div");
      answerDiv.className = "answer-body";
      answerDiv.textContent = task.answer;

      const toggleBtn = document.createElement("button");
      toggleBtn.type = "button";
      toggleBtn.className = "btn-toggle";
      toggleBtn.textContent = "Показать ответ";
      toggleBtn.addEventListener("click", () => {
        const open = answerDiv.classList.toggle("is-visible");
        toggleBtn.classList.toggle("is-open", open);
        toggleBtn.textContent = open ? "Скрыть ответ" : "Показать ответ";
      });

      answerRow.appendChild(toggleBtn);
      card.appendChild(t);
      card.appendChild(body);
      card.appendChild(answerRow);
      card.appendChild(answerDiv);

      container.appendChild(card);

      const sep = document.createElement("div");
      sep.className = "separator";
      container.appendChild(sep);
    });

    this.mainEl.appendChild(header);
    this.mainEl.appendChild(container);
  }

  showText(key) {
    const category = ALL_TYPES_SECTIONS[key];
    const title = category ? category.title : "Раздел не найден";

    this.clearMain();
    this.createBackButtonTop(() => this.showInvestmentTypes());
    
    const scroll = document.createElement("div");
    scroll.className = "screen-scroll";

    const titleBlock = document.createElement("div");
    titleBlock.className = "title-block";
    titleBlock.textContent = title;

    const textBlock = document.createElement("div");
    textBlock.className = "text-block";
    if (category && category.sub) {
      const lines = Object.values(category.sub)
        .map((s) => s.title)
        .join("\n\n");
      textBlock.textContent = lines;
    }

    scroll.appendChild(titleBlock);
    scroll.appendChild(textBlock);
    this.mainEl.appendChild(scroll);
  }

  showText1(key) {
    const category = INSTRUCTION_SECTIONS[key];
    const title = category ? category.title : "Раздел не найден";

    this.clearMain();
    this.createBackButtonTop(() => this.showInvestmentMethods());
    
    const scroll = document.createElement("div");
    scroll.className = "screen-scroll";

    const titleBlock = document.createElement("div");
    titleBlock.className = "title-block";
    titleBlock.textContent = title;

    const textBlock = document.createElement("div");
    textBlock.className = "text-block";
    if (category && category.sub) {
      textBlock.textContent = Object.values(category.sub)
        .map((s) => s.title)
        .join("\n\n");
    }

    scroll.appendChild(titleBlock);
    scroll.appendChild(textBlock);
    this.mainEl.appendChild(scroll);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new NeuroGuide();
});
