Rails.application.routes.draw do
  resources :properties
  resources :users, except: [:show, :create]

  # User Routes
  get '/authorized_user', to: 'users#show'
  post '/signup', to: "users#create"

  # Sessions Routes
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
