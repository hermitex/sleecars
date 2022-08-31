require 'dotenv'
require 'bundler/setup'
require 'rake'

Dotenv.load

ENV['RACK_ENV'] = 'development'


Bundler.require(:default, ENV['RACK_ENV'])

require_all 'app/models'
