class Api::DishesController < ApplicationController

    def index
        #dn /menu/:menu_id/items
        #dn :menu_id is part of the path that the route matches
        #dn although this is the item controller, you can still find the menu with the
        #dn given ID in the URL
    
        #dn menu.items will only index the items of the given menu
        @dish.chef
    end
    
    def show
        # render json: Item.find(params[:id])
        @dishes = Dish.all
    end
    
    def create
        @dish = Dish.new(dish_params)
    
        #dn can do this because there's an association between them
        #dn can't do @menu = params[:menu_id] eventhough we are in /menus/:menu_id/items/new
            #dn since it POST to /items -> top level resource
        #dn menu_id actually lives in the item parameter
            #dn -> @item.menu == Menu.find(params[:item][:menu_id])
    
        @chef = @dish.chef
    
        if @dish.save
            render :show
        else
            render json: @dish.errors.full_messages, status: :422
        end
    end
    
    private
    def dish_params
        params.require(:dish).permit(:chef_id, :name, :description, :spiciness)
    end
    
end
    