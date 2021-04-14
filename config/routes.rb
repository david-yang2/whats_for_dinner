Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :chefs, except: [:new, :edit] do 
      resources :items, only: [:index]
    end
    resources :items, only: [:show]
    resource :session, only: [:new, :create, :destroy]

    resources :users do
      resources :carts, only: [:show]
      resources :cartitems, only: [:index]
    end

    resources :carts do
      resources :cartitems, only: [:show, :destroy]
    end

    resources :cartitems, only: [:create]
  end

end
