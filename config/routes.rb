Rails.application.routes.draw do
  
  resources :votes
  resources :users

  get "/", to: 'users#show'
  get "vot", to: 'votes#index'
  post "/signup", to: 'users#create'
  post "/login", to: "sessions#create"
  get "/authorized", to: "sessions#show"
  post "/poll", to: "votes#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
