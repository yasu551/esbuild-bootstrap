Rails.application.routes.draw do
  resources :tasks, only: %i[index create update]
  resources :users, only: %i[show new create]
  root 'tasks#index'
end
