class PropertiesController < ApplicationController
  before_action :find_property, except: [:index, :create]

  def index
    render json: Property.where("user_id = ?", current_user.id), status: :ok
  end

  def show
    render json:@property, status: :ok
  end

  def create
    property = Property.create!(params_with_current_user_id)
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
    params.permit(:name, :address, :image)
  end

  def params_with_current_user_id
    property_params.merge(user_id: current_user.id)
  end

  def find_property
    @property = Property.find(params[:id])
  end

end
