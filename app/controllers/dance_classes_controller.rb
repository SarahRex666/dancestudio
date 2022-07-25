class DanceClassesController < ApplicationController
    skip_before_action :authenticate_user

    def index
        render json: DanceClass.all
    end

    def show
        dance_class = DanceClass.find_by(id: params[:id])
        render json: dance_class, include: "*.*"
    end

    def create
        dance_class = DanceClass.create(dance_class_params)
        render json: dance_class, status: :created
    end

    def update
        dance_class = DanceClass.find_by(id: params[:id])
        dance_class.update(dance_class_params)
        render json: dance_class, status: :ok
    end

    def destroy
        dance_class = DanceClass.find_by(id: params[:id])
        dance_class.destroy
        render json: ""
    end

    private 

    def dance_class_params
        params.permit(:id, :name, :style, :description)
    end
end