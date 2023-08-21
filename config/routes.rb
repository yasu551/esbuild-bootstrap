Rails.application.routes.draw do
  resources :tasks, only: %i[index create update]
  root 'tasks#index'
end
