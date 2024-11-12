source "https://rubygems.org"

ruby file: ".ruby-version"

gem "rails", "~> 8.0.0"
gem "propshaft"
gem "puma", ">= 5.0"
gem "importmap-rails"
gem "turbo-rails"
gem "stimulus-rails"
gem "tailwindcss-rails"

group :development, :test do
  gem "brakeman", require: false
  gem "rubocop-rails-omakase", require: false
  gem "sqlite3", ">= 2.1"
end

group :development do
  gem "web-console"
end
