# coding: utf-8
class DefaultConfig(object):
    DEBUG = False
    TESTING = False

    SENTRY_DSN = None
    SQLALCHEMY_DATABASE_URI = None


class DevelopmentConfig(DefaultConfig):
    DEBUG = True
    SECRET_KEY = 'development'
    SQLALCHEMY_DATABASE_URI = 'mysql://root:@localhost/statistics_66'


class TestingConfig(DefaultConfig):
    TESTING = True
    SECRET_KEY = 'testing'
    SQLALCHEMY_DATABASE_URI = 'mysql://root:@localhost/statistics_66_test'
