# coding: utf-8
from datetime import date

import wtforms
from wtforms import validators
from flask.ext import wtf


required = wtforms.validators.Required(u'Пожалуйста, заполните это поле.')
positive_number = validators.NumberRange(min=0, message=u'Значение должно быть положительным.')


class SurveyForm(wtf.Form):
    first_name = wtforms.TextField(u'Имя', [required, validators.Length(max=100)])

    last_name = wtforms.TextField(u'Фамилия', [required, validators.Length(max=100)])

    birthdate = wtforms.DateField(u'Дата рождения', description=u'в формате 1990-08-14')

    height = wtforms.IntegerField(u'Рост', [
        required,
        positive_number,
    ], description=u'в сантиметрах')

    weight = wtforms.IntegerField(u'Вес', [
        required,
        positive_number,
    ], description=u'в килограммах')

    foot_size = wtforms.IntegerField(u'Размер ноги', [
        required,
        positive_number,
    ], description=u'например, 43')

    year_started_working = wtforms.IntegerField(u'Год начала работы в компании', [
        required,
        validators.NumberRange(min=2000, max=date.today().year),
    ])

    sex = wtforms.SelectField(
        u'Пол', [required],
        choices=[
            ('f', u'Женский'),
            ('m', u'Мужской')
        ])

    eye_color = wtforms.SelectField(
        u'Цвет глаз', [required],
        choices=[
            ('blue', u'Голубой'),
            ('green', u'Зелёный'),
            ('hazel', u'Карий'),
            ('gray', u'Серый'),
            ('black', u'Чёрный'),
            ('red', u'Красный'),
        ])

    submit = wtforms.SubmitField(u'Готово')
