class MaintenancesController < ApplicationController
  before_action :find_maintenance, except: [:index, :create]

  def index
    render json: Maintenance.where(user_id: nil).or(Maintenance.where(user_id: current_user.id)) , status: :ok
  end

  def show
    if @maintenance.user_id == current_user.id
      render json: @maintenance, status: :ok
    else
      render json: {error: 'Unauthorized'}, status: :unauthorized
    end
  end

  def create
    maintenance = Maintenance.create!(params_with_current_user_id)
    find_property.maintenances << maintenance
    @property.save
    render json: maintenance, status: :created
  end

  def update
    if @maintenance.user_id == current_user.id
      @maintenance.update!(maintenance_params)
      render json: @maintenance, status: :ok
    else
      render json: {error: 'Unauthorized'}, status: :unauthorized
    end
  end

  def destroy
    if @maintenance.user_id == current_user.id
      @maintenance.destroy
    else
      render json: {error: 'Unauthorized'}, status: :unauthorized
    end
  end

  private

  def find_property
    @property = Property.find(params[:property_id])
  end

  def find_maintenance
    @maintenance = Maintenance.find(params[:id])
  end

  def maintenance_params
    params.permit(:name, :category_id)
  end

  def params_with_current_user_id
    maintenance_params.merge(user_id: session[:user_id])
  end
end
