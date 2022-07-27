class ReviewsController < ApplicationController
    skip_before_action :authenticate_user
    
    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        reviews = Review.find_by(id: params[:id])
        render json: reviews
    end

    def create
        review = Review.create(review_params)
        reviews = review.teacher
        render json: reviews, status: :created
    end

    def destroy
        review = Review.find_by(id: params[:id])
        reviews = review.teacher
        review.destroy
        render json: reviews
    end

    private 

    def review_params
        params.permit(:id, :user_id, :teacher_id, :content, :rating)
    end
end
