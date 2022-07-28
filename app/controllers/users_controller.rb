class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create]

    def index
        render json: User.all
    end
    def show
        user = User.find_by(id: session[:user_id])
        render json: user, include: "*.*"
    end
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    def update
        userChange = User.find(params[:id])
        userChange.update(user_params)
        render json: userChange, status: :ok
    end

    private
    def user_params
        params.permit(:id, :first_name, :last_name, :address, :phone, :username, :password)
    end
end
