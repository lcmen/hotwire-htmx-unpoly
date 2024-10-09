require_relative "boot"

require "rails"
require "active_model/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_view/railtie"

Bundler.require(*Rails.groups)

module HotwireHtmxUnpoly
  class Application < Rails::Application
    config.load_defaults 8.0
    config.autoload_lib(ignore: %w[assets tasks])
    config.importmap.cache_sweepers << Rails.root.join("app/assets/javascript")
    config.turbo.draw_routes = false
    config.generators.system_tests = nil
  end
end
