#!/bin/sh
if [[ -z $STATISTICS_CONFIG ]]; then
    STATISTICS_CONFIG=statistics.config_local.TestingConfig 
fi

PYTHONPATH=".:$PYTHONPATH" STATISTICS_CONFIG=$STATISTICS_CONFIG \
    py.test -s --tb=short --cov statistics --cov-report term-missing tests "$@"
