Rails.application.routes.draw do
  resources :property_maintenances
  resources :maintenances
  resources :properties
  resources :users, except: [:show, :create]
  resources :categories, only: [:index, :show]

  # User Routes
  get '/authorized_user', to: 'users#show'
  post '/signup', to: "users#create"

  # Sessions Routes
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'

  # Property
  get '/properties/:id/maintenance', to: 'properties#maintenance'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
