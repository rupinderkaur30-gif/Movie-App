Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :movies, only: [:index, :create, :update, :destroy]
  resources :users, only: [:create]
  resources :reviews, only: [:create]
  resources :favorites, only: [:index, :create]
end
