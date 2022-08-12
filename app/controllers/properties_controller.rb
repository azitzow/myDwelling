class PropertiesController < ApplicationController

  def index
    render json: Property.all, status: :ok
  end

  def show
    render json:@property, status: :ok
  end

  def create
    property = Property.create!(property_params)
    render json: property, status: :created
  end

  def update
    @property.update!(property_params)
    render json:@property, status: :ok
  end

  def destroy
    @property.destroy
  end

  private

  def property_params
    params.permit(:address, :user_id)
  end

  def find_property
    @property = Property.find(params[:id])
  end
end
