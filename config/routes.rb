Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  scope ":variant", constraints: { variant: /hotwire|htmx|unpoly/ } do
    resources :tasks, except: :show do
      resource :completion, only: %i[create destroy], module: :tasks
    end
  end

  get "hotwire", to: redirect("/hotwire/tasks", status: 302), as: :hotwire
  get "htmx", to: redirect("/htmx/tasks", status: 302), as: :htmx
  get "unpoly", to: redirect("/unpoly/tasks", status: 302), as: :unpoly

  root to: "application#index"
end
