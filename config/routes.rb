Rails.application.routes.draw do
  resources :teachers
  resources :dance_classes
  resources :registrations
  resources :users 
  resources :sessions
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  post "/classreg", to: "registration#create"
  delete "/logout", to: "sessions#destroy"
  root "main#index"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
