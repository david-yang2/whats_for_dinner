Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :chefs, except: [:new, :edit] do 
      resources :items, only: [:index]
    end
    resources :items, only: [:show]
  end
  resource :session, only: [:create, :destroy]
  resource :users
end
