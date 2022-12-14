class PropertiesController < ApplicationController
  before_action :find_property, except: [:index, :create]

  def index
    render json: Property.where(user_id: session[:user_id]), status: :ok
  end

  def show
    if @property.user_id == current_user.id
      render json:@property, status: :ok
    else
      render json: { error: 'Unauthorized'}, status: :unauthorized
    end
  end

  def create
    property = Property.create!(params_with_current_user_id)
    property.maintenances = Maintenance.where(user_id: nil).or(Maintenance.where(user_id: session[:user_id]))
    render json: property, status: :created
  end

  def update
    if @property.user_id == session[:user_id]
      @property.update!(property_params)
      render json:@property, status: :ok
    else
      render json: { error: 'Unauthorized'}, status: :unauthorized
    end
  end

  def destroy
    @property.destroy
    if @property.user_id == session[:user_id]
      @property.destroy
    else
      render json: { error: 'Unauthorized'}, status: :unauthorized
    end
  end

  def maintenance
    property_id = params[:id]
    property = Property.find(property_id)
    render json: property.maintenances, property_id: property_id, status: :ok
  end

  private

  def property_params
    params.permit(:name, :address, :image)
  end

  def params_with_current_user_id
    property_params.merge(user_id: session[:user_id])
  end

  def find_property
    @property = Property.find(params[:id])
  end

end
