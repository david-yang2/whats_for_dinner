class Api::CartitemsController < ApplicationController
    # GET     /api/users/:user_id/cartitems 
    def index
        

        @user = User.find(params[:user_id])
        render json: @user.cartitems
    end
    
    def show
        # #show all the items
        # render json: Item.all
    end
    


    # POST   /api/cartitems
    def create
        
        # if the route was /api/carts/:cart_id/cartitems "POST"
        # you grab the cart_id from the URL rather than having user pass it in
        # @c
        # @cartitem.cart_id = params[:cart_id]



        @cartitem = Cartitem.new(cartitem_params)
        # however better and cleaner to have everything come through from body of 
        # request, rather than body and URL

        if @cartitem.save
            return
        else
            render json: @cartitem.errors.full_messages, status: :unprocessable_entity
        end
    end
    
    private
    def cartitem_params
        params.require(:cartitem).permit(:user_id, :name, :price, :description, :imagepath)
    end
    
end

