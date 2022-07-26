Rails.application.routes.draw do
  resources :teachers
  resources :dance_classes
  resources :registrations
  resources :users 
  resources :sessions
  resources :reviews
  resources :passwords
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  post "/classreg", to: "registration#create"
  delete "/logout", to: "sessions#destroy"
  post 'password/forgot', to: 'passwords#forgot'
  post 'password/reset', to: 'passwords#reset'
  put 'password/update', to: 'passwords#update'
  root "welcome#index"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
