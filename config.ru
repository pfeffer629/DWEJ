require 'rubygems'
require 'bundler'
require 'sinatra'
require 'stripe'
require 'json'
require "dotenv"
Dotenv.load

Bundler.require

require './app'
run MySinatraApp