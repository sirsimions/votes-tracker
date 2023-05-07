class UsersController < ApplicationController
    require 'jwt'
    wrap_parameters format: []
    def create
        user = User.new(user_params)
    
        if user.save
            token = issue_token(user)
            render json: {user: UserSerializer.new(user), jwt: token}
        else
            if user.errors.messages
                render json: {error: user.errors.messages}
            else
                render json: {error: "User could not be created. Please try again."}
            end
        end
    end
    
      def show
        user = User.find_by(id: params[:id]);
        if user
            render json: user, status: :created
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end
    
      
      def index
          user=User.all
          render json: user
      end
    
      def profile
          render json: @user
      end
    
      private
    
      def user_params
        params.permit(:firstname, :lastname, :mobno, :role, :password, :password_confirmation)
      end
end
