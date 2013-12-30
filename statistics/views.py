import json

from flask import request, redirect, url_for, render_template

from . import app, db
from .models import Statistics
from .forms import SurveyForm


@app.route('/', methods=['GET', 'POST'])
def index():
    print request.form
    form = SurveyForm(request.form)
    if form.validate_on_submit():
        statistics = Statistics()
        form.populate_obj(statistics)
        db.session.add(statistics)
        db.session.commit()
        return redirect(url_for('.finish'))

    return render_template('survey.html', form=form)


def get_heights():
    q = Statistics.query.group_by(
        Statistics.height
    ).order_by(
        Statistics.height
    ).with_entities(Statistics.height, db.func.count(Statistics.id))
    
    female_dict = dict(q.filter_by(sex='f').all())
    male_dict = dict(q.filter_by(sex='m').all())

    labels = range(
        db.session.query(db.func.min(Statistics.height)).scalar(),
        db.session.query(db.func.max(Statistics.height)).scalar())
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


@app.route('/charts/')
def charts():
    heights = get_heights()
    return render_template(
        'charts.html',
        heights=json.dumps(heights),
    )


@app.route('/finish/')
def finish():
    return render_template('thanks.html')
