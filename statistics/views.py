from flask import request, redirect, url_for, render_template

from . import app
from .models import Statistics
from .forms import SurveyForm


@app.route('/')
def index():
    form = SurveyForm(request.form)
    if form.validate_on_submit():
        statistics = Statistics()
        form.populate_obj(statistics)
        db.session.add(statistics)
        db.session.commit()
        return redirect(url_for('.finish'))

    return render_template('survey.html')


@app.route('/finish/')
def finish():
    return render_template('thanks.html')
