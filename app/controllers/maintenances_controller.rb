class MaintenancesController < ApplicationController
  before_action :find_maintenance, except: [:index, :create]

  def index
    render json: Maintenance.where(user_id: nil).or(Maintenance.where(user_id: current_user.id)) , status: :ok
  end

  def show
    render json: @maintenance, status: :ok
  end

  def create
    maintenance = Maintenance.create!(params_with_current_user_id)
    find_property.maintenances << maintenance
    @property.save
    render json: maintenance, status: :created
  end

  def update
    @maintenance.update!(maintenance_params)
    render json: @maintenance, status: :ok
  end

  def destroy
    @maintenance.destroy
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
