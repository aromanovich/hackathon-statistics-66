#!/usr/bin/env python
# coding: utf-8
from flask.ext.script import Manager
from flask.ext.migrate import Migrate, MigrateCommand

import statistics


manager = Manager(statistics.app)
manager.add_command('db', MigrateCommand)


if __name__ == '__main__':
    manager.run()
