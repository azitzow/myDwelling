class MaintenancesController < ApplicationController
  before_action :find_maintenance, except: [:index, :create]

  def index
    render json: Maintenance.all, status: :ok
  end

  def show
    render json: @maintenance, status: :ok
  end

  def create
    maintenance = Maintenance.create!(maintenance_params)
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

  def find_maintenance
    @maintenance = Maintenance.find(params[:id])
  end

  def maintenance_params
    params.permit(:name, :description, :category)
  end

  # def maintenance_with_user_id
  #   maintenance_params.merge(user_id: current_user.id)
  # end

end
