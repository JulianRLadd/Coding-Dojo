class UsersController < ApplicationController
  def index
    @users = User.all
    @user = User.last
  end
  def show
    @user = User.last
    render "show"
  end
  def new
    render "new"
  end
  def create
    @user = User.new(params.require(:user).permit(:first_name, :last_name, :email))
    if @user.save
      flash[:notice] = ['User successfully created']
      redirect_to user_path(@user.id)
    else
      redirect_to new_user_path, notice: @user.errors.full_messages
    end
  end
end

  