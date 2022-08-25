class CategoriesController < ApplicationController

  def index
    render json: Category.all, status: :ok
  end

  def show
    category = Category.find(params[:id])
    render json: category, status: :ok
  end

end
