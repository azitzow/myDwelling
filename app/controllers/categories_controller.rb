class CategoriesController < ApplicationController
  before_action :find_category, only: [:show, :category_maintenance]
  skip_before_action :authorized_user, only: [:index, :show, :category_maintenance]

  def index
    render json: Category.all, status: :ok
  end

  def show
    render json: @category, status: :ok
  end

  def category_maintenance
    render json: @category.maintenances, serializer: MaintenancesWithoutPropertyIdSerializer, status: :ok
  end

  private

  def find_category
    @category = Category.find(params[:id])
  end

end
