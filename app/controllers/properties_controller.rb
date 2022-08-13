class PropertiesController < ApplicationController
  before_action :find_property, except: [:index, :create]
  # Only authorized users have access to this model controllers
  def index
    render json: Property.where("user_id = ?", current_user.id), status: :ok
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
    params.permit(:name, :address, :image, :user_id)
  end

  def find_property
    @property = Property.find(params[:id])
  end

end
