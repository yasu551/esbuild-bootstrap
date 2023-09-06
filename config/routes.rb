Rails.application.routes.draw do
  resources :tasks, only: %i[index show create update]
  resources :users, only: %i[index show new create edit update]
  root 'tasks#index'
end
