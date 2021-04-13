
class Api::ItemsController < ApplicationController

    def index
        #/chefs/:id/items
        #render a specific chef's items
        @chef = Chef.find(params[:chef_id])
        render json: @chef.items
    end
    
    def show
        #show all the items
        render json: Item.all
    end
    
    # def create
    #     debugger
    #     @dish = Dish.new(dish_params)
    
    #     @chef = @dish.chef

    #     if @dish.save
    #         render :show
    #     else
    #         render json: @dish.errors.full_messages, status: :422
    #     end
    # end
    
    private
    def dish_params
        params.require(:item).permit(:chef_id, :name, :description, :spiciness)
    end
    
end

