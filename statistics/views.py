# coding: utf-8
import json

from flask import request, redirect, url_for, render_template, flash

from . import app, db
from .models import Statistics
from .forms import SurveyForm


@app.route('/', methods=['GET', 'POST'])
def index():
    form = SurveyForm(request.form)
    if form.validate_on_submit():
        statistics = Statistics()
        form.populate_obj(statistics)
        db.session.add(statistics)
        db.session.commit()
        flash(u'Спасибо за заполнение анкеты!', category='success')
        return redirect(url_for('.charts'))

    return render_template('survey.html', form=form)


def get_aggregated_by_sex_data(column):
    """
    :type column: Statistics.*
    """
    q = Statistics.query.group_by(
        column
    ).order_by(
        column
    ).with_entities(column, db.func.count(Statistics.id))
    
    female_dict = dict(q.filter_by(sex='f').all())
    male_dict = dict(q.filter_by(sex='m').all())

    labels = range(
        db.session.query(db.func.min(column)).scalar(),
        db.session.query(db.func.max(column)).scalar())
    female_data = []
    male_data = []
    for label in labels:
        female_data.append(female_dict.get(label, 0))
        male_data.append(male_dict.get(label, 0))
    return {
        'labels': labels,
        'femaleData': female_data,
        'maleData': male_data,
    }

def get_statistics(column):
    q = Statistics.query.order_by(column)
    
    return [{
        'sex': s.sex,
        'data': getattr(s, str(column.name)),
    } for s in q]


def get_ages():
    q = Statistics.query.order_by(Statistics.birthdate.desc()).with_entities(
        Statistics, 
        db.func.ceil(db.func.datediff(db.func.current_date(), Statistics.birthdate) / 365.25)
    )
    return [{
        'sex': stat.sex,
        'data': age,
    } for (stat, age) in q]


def get_aggregated_data(column, value=None):
    """
    :type column: Statistics.*
    """
    if value is None:
        value = column
    data = Statistics.query.group_by(
        column
    ).order_by(
        value
    ).with_entities(db.func.count(Statistics.id), value)
    
    return zip(*data.all())


@app.route('/charts/')
def charts():
    heights = get_statistics(Statistics.height)
    weights = get_statistics(Statistics.weight)
    mobile_platforms = get_aggregated_data(Statistics.mobile_platform)
    sex = get_aggregated_data(Statistics.sex)
    year_started_working = get_aggregated_data(Statistics.year_started_working)
    eye_colors = get_aggregated_data(Statistics.eye_color)
    mobile_platforms = get_aggregated_data(Statistics.mobile_platform)
    foot_sizes = get_statistics(Statistics.foot_size)
    ages = get_ages()


    return render_template(
        'charts.html',
        heights=json.dumps(heights),
        weights=json.dumps(weights),
        mobile_platforms=json.dumps(mobile_platforms),
        eye_colors=json.dumps(eye_colors),
        sex=json.dumps(sex),
        year_started_working=json.dumps(year_started_working),
        foot_sizes=json.dumps(foot_sizes),
        ages=json.dumps(ages),
    )


@app.route('/finish/')
def finish():
    flash(u'Спасибо за заполнение анкеты!')
    return redirect(url_for('.charts'))
