# coding: utf-8
import wtforms
from flask.ext import wtf


class SurveyForm(wtf.Form):
    first_name = wtforms.TextField(u'Имя', [wtforms.validators.Required()])
    last_name = wtforms.TextField(u'Фамилия', [wtforms.validators.Required()])
    birthdate = wtforms.DateField(u'Дата рождения',
            description=u'в формате 1990-08-14')
    height = wtforms.IntegerField(u'Рост', [wtforms.validators.Required()], description=u'в сантиметрах')
    eye_color = wtforms.SelectField(u'Цвет глаз', [wtforms.validators.Required()],
            choices=[('white', u'Белый'), ('black', u'Чёрный'), ('red', u'Красный')])
    
    submit = wtforms.SubmitField(u'Готово')
