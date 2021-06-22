
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

    private
    def dish_params
        params.require(:item).permit(:chef_id, :name, :description, :spiciness)
    end
    
end

