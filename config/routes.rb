Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  scope ":variant", constraints: { variant: /hotwire|htmx|unpoly/ } do
    resources :tasks, except: :show
  end

  root to: redirect("/hotwire/tasks", status: 302)
end
