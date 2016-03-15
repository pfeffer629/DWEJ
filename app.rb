require "bundler/setup"
require 'sinatra'
require 'stripe'
require 'json'
require "dotenv"
Dotenv.load

Stripe.api_key = ENV['STRIPE_API_KEY']

get '/' do
  erb :index
end

post '/' do
  # Amount in cents
  @amount = params["dollarAmount"].to_i * 100
  @email = params["email"]
  @first_name = params["firstName"]
  @last_name = params["lastName"]
  @address_line_1 = params["addressLine1"]
  @address_line_2 = params["addressLine2"]
  @zip_code = params["zipCode"]
  @city = params["city"]
  @state = params["state"]
  @phone = params["homePhone"]
  @token = params["stripeToken"]

  tempHash = {
    "first_name" => @first_name,
    "last_name" => @last_name,
    "email" => @email,
    "phone" => @phone
  }

  File.open("public/user_details.json","w") do |f|
    f.write (tempHash.to_json)
  end

  charge = Stripe::Charge.create(
    :amount      => @amount,
    :currency    => 'usd',
    :source => @token,
    :description => 'test'
  )

  erb :thank_you
end

get '/thank-you' do
  erb :thank_you
end