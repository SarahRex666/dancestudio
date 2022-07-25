class TeachersController < ApplicationController
    skip_before_action :authenticate_user

    def index
        teachers = Teacher.all
        render json: teachers
    end

    def show
        teacher = Teacher.find_by(id: params[:id])
        render json: teacher, include: :dance_classes
    end

    def update
        teacher = Teacher.find_by(id: params[:id])
        if teacher
            teacher.update(teacher_params)
            render json: teacher
        else 
            render json: { error: "Teacher not found."}, status: :not_found
        end
    end

    private

    def teacher_params
        params.permit(:name, :bio, :image_url)
    end
end
