Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  scope ":variant", constraints: { variant: /hotwire|htmx|unpoly/ } do
    resources :tasks, except: :show
  end

  get "hotwire", to: redirect("/hotwire/tasks", status: 302)
  get "htmx", to: redirect("/htmx/tasks", status: 302)
  get "unpoly", to: redirect("/unpoly/tasks", status: 302)

  root to: redirect("/hotwire/tasks", status: 302)
end
