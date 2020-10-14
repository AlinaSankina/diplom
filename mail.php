<?php
// Проверяем тип запроса, обрабатываем только POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Получаем параметры, посланные с javascript
    $name = $_POST['name'];
    $form_phone = $_POST['phone'];
    $form_service = $_POST['service'];
    $time_date = $_POST['time_date'];

    // создаем переменную с содержанием письма
    $content = $name . ' забронировал ритуал ' . $form_service . ' на дату и время ' . $time_date . '. Его телефон: ' . $form_phone;

    // Первый параметр - кому отправляем письмо, второй - тема письма, третий - содержание
    $success = mail("admin@whitelotus.com", 'Запрос на бронирование ритуала', $content);

    if ($success) {
        // Отдаем 200 код ответа на http запрос
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        // Отдаем ошибку с кодом 500 (internal server error).
        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    // Если это не POST запрос - возвращаем код 403 (действие запрещено)
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
};


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $faq_phone = $_POST['phone'];

    $content = $faq_phone . ' - перезвоните по телефону в течение 5 мин';

    $success2 = mail("callme@whitelotus.com", 'Заявка перезвонить', $content);

    if ($success2) {
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}