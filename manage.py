#!/usr/bin/env python
# coding: utf-8
import random
import datetime

from flask.ext.script import Manager
from flask.ext.migrate import Migrate, MigrateCommand

import statistics
from statistics import db
from statistics.models import Statistics


manager = Manager(statistics.app)
manager.add_command('db', MigrateCommand)


@manager.command
def load_random_fixtures(n):
    n = int(n)
    for i in xrange(n):
        s = Statistics(
            first_name=str(i) + 'firstname',
            last_name=str(i) + 'lastname',
            height=random.randint(150, 200),
            weight=random.randint(45, 120),
            foot_size=random.randint(30, 50),
            eye_color=random.choice([
                'blue'
                'green',
                'hazel',
                'gray',
                'black',
                'red',
            ]),
            birthdate=datetime.datetime(
                year=random.randint(1960, 1995),
                month=random.randint(1, 12),
                day=1
            ),
            year_started_working=random.randint(2003, 2014),
            sex=random.choice(['m', 'f']),
            mobile_platform=random.choice(['android', 'apple', 'windows', 'other']),
        )
        db.session.add(s)
        db.session.commit()
    
if __name__ == '__main__':
    manager.run()
