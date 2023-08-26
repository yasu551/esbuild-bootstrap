class UsersController < ApplicationController
  before_action :set_user, only: %i[show]

  def show
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to user_url(@user)
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(%i[name annual_income])
  end

  def set_user
    @user = User.find(params[:id])
  end
end
