
class Api::ChefsController < ApplicationController
    #before_action :require_current_user!, except: [:index, :show]
  
    def index
      @chefs = Chef.all
    end
  
    def show
      @chef = Chef.find(params[:id])
    end
  
    def create
      @chef = Chef.new(chef_params)
  
      if @chef.save
        render :show
      else
        render json: @chef.errors.full_messages, status: 422
      end
    end
  
    def update
      @chef = Chef.find(params[:id])
      if @chef.update(chef_params)
        render :show
      else
        render json: @chef.errors.full_messages, status: 422
      end
    end
  
    def destroy
      @chef = Chef.find(params[:id])
      if @chef.destory
        render :show
      else 
        render json: @chef.errors.full_messages, status: 422
      end
    end
  
    private
    def chef_params
      params.require(:chef).permit(:name, :location, :bio)
    end
  end
  