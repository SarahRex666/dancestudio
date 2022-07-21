class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authenticate_user

    def authorized
        return render json: { error: "Not Authorized"},status: :unauthorized unless session.include? :user_id
    end

    private 

    def current_user
        @current_user ||= User.find_by_id(session[:user_id])
    end

    def authenticate_user
        return if current_user
        render json: { errors: "Login please."}, status: :unauthorized
    end
end