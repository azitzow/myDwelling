class UsersController < ApplicationController
  before_action :find_user, except: [:show, :create]
  skip_before_action :authorized_user, only: :create

  def show
    render json: current_user, status: :ok
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def update
    @user.update!(user_params)
    render json: @user, status: :accepted
  end

  def destroy
    @user.destroy
  end

  def user_maintenance
    current_user.maintenances
  end

  def user_properties
      render json: current_user.properties, status: :ok
  end

  private

  def user_params
    params.permit(:username, :email, :password, :phone_number)
  end

  def find_user
    @user = User.find(params[:id])
  end

end
