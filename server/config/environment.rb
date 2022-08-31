ENV['RACK_ENV'] = 'development'
require 'dotenv'
require 'bundler/setup'
require 'rake'

Dotenv.load

Bundler.require(:default, ENV['RACK_ENV'])

require_all 'app/'
