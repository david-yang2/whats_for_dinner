require "byebug"
class Api::ItemsController < ApplicationController

    def index
        #dn /menu/:menu_id/items
        #dn :menu_id is part of the path that the route matches
        #dn although this is the item controller, you can still find the menu with the
        #dn given ID in the URL
    
        #dn menu.items will only index the items of the given menu
        @items = Item.all
    end
    
    def show
        render json: Item.find(params[:id])
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

