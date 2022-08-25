class MaintenancesController < ApplicationController
  before_action :find_maintenance, except: [:index, :create, :update_property_maintenance]
  before_action :find_property, only: :create

  def index
    render json: Maintenance.where(user_id: nil).or(Maintenance.where(user_id: session[:user_id])), status: :ok
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
    @property.maintenances << maintenance
    render json: maintenance, status: :created
  end

  def update
    # updates user maintenance only
    if @maintenance.user_id == current_user.id
      @maintenance.update!(maintenance_params)
      render json: @maintenance, status: :ok
    else
      render json: {error: 'Unauthorized'}, status: :unauthorized
    end
  end

  def update_property_maintenance
    property_maintenance = PropertyMaintenance.find_by(
      property_id: params[:property_id],
      maintenance_id: params[:maintenance_id]
    )
    property_maintenance.update!(completed: params[:completed])
    maintenance = Maintenance.find_by(id: params[:maintenance_id])

    render json:maintenance, property_id: params[:property_id], status: :ok
  end

  def destroy
    if @maintenance.user_id == current_user.id
      @maintenance.destroy
    else
      render json: {error: 'Unauthorized'}, status: :unauthorized
    end
  end

  private

  def maintenance_params
    params.permit(:name, :category_id, :estimated_cost)
  end

  def params_with_current_user_id
    maintenance_params.merge(user_id: session[:user_id])
  end

  def find_property
    @property = Property.find(params[:property_id])
  end

  def find_maintenance
    @property_maintenance = PropertyMaintenance.find(params[:id])
  end

end
