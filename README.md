<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Сайт правосудия</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Сайт правосудия</h1>
        <nav>
            <ul>
                <li><a href="#about">О правосудии</a></li>
                <li><a href="#services">Наши услуги</a></li>
                <li><a href="#contact">Связаться с нами</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="about">
            <h2>О правосудии</h2>
            <p>Правосудие — это власть, ответственная за применение законов и справедливости в обществе.</p>
        </section>

        <section id="services">
            <h2>Наши услуги</h2>
            <ul>
                <li>Юридические консультации</li>
                <li>Юридическое представительство в судах</li>
                <li>Урегулирование споров</li>
            </ul>
        </section>

        <section id="contact">
            <h2>Связаться с нами</h2>
            <form id="contact-form">
                <label for="name">Имя:</label>
                <input type="text" id="name" required>
                
                <label for="email">Электронная почта:</label>
                <input type="email" id="email" required>

                <label for="message">Ваше сообщение:</label>
                <textarea id="message" required></textarea>

                <button type="submit">Отправить</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Сайт правосудия. Все права защищены.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
