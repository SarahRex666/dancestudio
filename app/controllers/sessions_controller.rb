class SessionsController < ApplicationController
    skip_before_action :authenticate_user

    def index
        session_hash = session.id
        render json: session_hash
    end

# login
    def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
    session[:user_id] = user.id
    render json: user, status: :created
    else
        render json: { errors: "invalid credentials"}, status: :unauthorized
    end
end

    #logout
    def destroy
        if current_user
            session.delete :user_id
            render json: "Logged Out", status: :ok
        else
            render json: { errors: "no active session"}, status: :unauthorized
        end
    end
end