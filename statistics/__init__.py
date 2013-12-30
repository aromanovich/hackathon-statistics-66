# coding: utf-8
import os

import wtforms
import flask
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.migrate import Migrate


app = flask.Flask(__name__)
config = os.environ.get('STATISTICS_CONFIG', 'statistics.config.DefaultConfig')
app.config.from_object(config)
app.jinja_env.globals['bootstrap_is_hidden_field'] = \
        lambda field: isinstance(field, wtforms.HiddenField)

db = SQLAlchemy(app)
migrate = Migrate(app, db)


# Регистрируем вьюхи после инициализации приложения:
from . import views
