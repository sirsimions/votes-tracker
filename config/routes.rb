Rails.application.routes.draw do
  
  resources :votes
  resources :users

  get "/", to: 'users#show'
  post "/signup", to: 'users#create'
  post "/login", to: "sessions#create"
  get "/authorized", to: "sessions#show"
  post "/polls", to: "votes#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
