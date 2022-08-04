class PasswordsController < ApplicationController
    skip_before_action :authenticate_user
    def forgot
        user = User.find_by(email: params[:email])
        if user.id
          user.generate_password_token!
          UserMailer.forgot_email(user).deliver_later
          render json: user, status: :ok
        else
          render json: {error: ['Email address not found. Please check and try again.']}, status: :not_found
        end
      end
    
      def reset  
        user = User.find_by(email: params[:email])
    
        if user.present? && user.password_token_valid?
          if user.reset_password!(params[:password])
            render json: user, status: :ok
          else
            render json: {error: user.errors.full_messages}, status: :unprocessable_entity
          end
        else
          render json: {error:  ['Link not valid or expired. Try generating a new link.']}, status: :not_found
        end
      end
end
