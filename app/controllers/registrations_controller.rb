class RegistrationsController < ApplicationController
        skip_before_action :authenticate_user
    
        def index
            registrations = Registration.all
            render json: registrations
        end
    
        def show
            registration = Registration.find_by(id: params[:id])
            render json: registration
        end
    
        def create
            registration = Registration.create(registration_params)
            render json: registration, status: :created
        end
    
        def destroy
            registration = Registration.find_by(id: params[:id])
            registration.destroy
            render json: Registration.all
        end
    
        private 
    
        def registration_params
            params.permit(:id, :user_id, :dance_class_id)
        end
    end
