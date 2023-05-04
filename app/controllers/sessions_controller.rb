class SessionsController < ApplicationController
    def create
        user = User.find_by_mobNo(session_params[:mobNo])

        if user && user.authenticate(session_params[:password])
            token = issue_token(user)
            render json: {user: UserSerializer.new(user), jwt: token}
        else
            render json: {error: "Incorrect username or password."}
        end
    end

    def show
        if logged_in?
            render json: current_user
        else
            render json: {error: "User is not logged in/could not be found."}
        end
    end

    private
    def session_params
        params.permit(:mobNo, :password)
    end
end
