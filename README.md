## Getting started

1. Установить зависимости, перечисленные в `requirements/basic.txt`;
2. Настроить приложение, создав `statistics.config_local` по образу и подобию
   `statistics/config_local.py-dist`;

Для запуска dev-сервера:

`STATISTICS_CONFIG=statistics.config_local.DevelopmentConfig ./manage.py runserver`

Для запуска тестов:

1. Установить зависимости, перечисленные в `requirements/dev.txt`;
2. `./test.sh`
